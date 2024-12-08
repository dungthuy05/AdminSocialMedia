import React, { useState, useEffect } from 'react';

import axios from '../libs/axios';
import Heart from './heart';
import GuestUser from '../assets/images/guest-user.png';
import commentIcon from '../assets/images/comment.svg';
import LeftArrow from '../assets/images/arrow-left.svg';
import RightArrow from '../assets/images/arrow-right.svg';

const getUserBasicInfo = async (userId) => {
  const response = await axios.get(`/user/basic-info/${userId}`);
  return response.data.user ?? null;
};

const formatTime = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now - date) / 1000);

  if (diff < 60) return `${diff} seconds ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  return `${Math.floor(diff / 86400)} days ago`;
};

const Carousel = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[300px] flex items-center justify-center bg-black rounded-lg overflow-hidden">
      {items[currentSlide]?.endsWith('.mp4') ? (
        <video controls className="object-contain w-full h-full rounded-lg">
          <source src={items[currentSlide]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={items[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="object-contain w-full h-full rounded-lg"
        />
      )}

      {items.length > 1 && (
        <>
          <button
            className="absolute left-4 bg-gray-700 p-2 py-3 rounded-full hover:bg-gray-600 z-5"
            onClick={handlePrev}
          >
            <img src={LeftArrow} alt="left arrow" className="w-4" />
          </button>
          <button
            className="absolute right-4 bg-gray-700 p-2 py-3 rounded-full hover:bg-gray-600 z-5"
            onClick={handleNext}
          >
            <img src={RightArrow} alt="right arrow" className="w-4" />
          </button>
        </>
      )}

      <div className="absolute bottom-4 flex space-x-2">
        {items.length > 1 &&
          items.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 border border-white shadow ${
                index === currentSlide ? 'bg-gray-700 scale-125' : 'bg-gray-400'
              }`}
            />
          ))}
      </div>
    </div>
  );
};

const Comment = ({ comment }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserBasicInfo(comment.userId);
      setUser(userData);
    };
    fetchUser();
  }, [comment.userId]);

  return (
    <div className="p-4 mb-3 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
      <div className="flex items-center space-x-3 mb-2">
        <img
          src={user?.avatar || GuestUser}
          alt={`${user?.username || 'Anonymous'}'s avatar`}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-gray-800 font-bold">{user?.username ?? 'Anonymous'}</p>
          <p className="text-gray-500 text-sm">{formatTime(comment.createdAt)}</p>
        </div>
      </div>

      {comment.repliedUser && (
        <div className="mb-2 text-sm text-gray-600">
          Replying to <span className="font-bold">{comment.repliedUser}</span>
        </div>
      )}

      <p className="text-gray-700 mb-2">{comment.content}</p>

      {comment.images.length + comment.videos.length > 0 && (
        <Carousel items={[...comment.images, ...comment.videos]} />
      )}
    </div>
  );
};

const PostDetails = ({ postId, reacted, reactions, views, comments }) => {
  const [isReacted, setIsReacted] = useState(reacted);

  const handleToggleLike = async () => {
    try {
      setIsReacted((prev) => !prev);
      await axios.post(`post/${postId}/react`);
    } catch (error) {
      console.error('Error while reacting to post:', error);
    }
  };

  return (
    <div className="flex items-center justify-around mt-4 p-2 bg-gray-100 rounded-lg">
      <div className="flex items-center space-x-2">
        <Heart isReacted={isReacted} onClick={handleToggleLike} />
        <span className="text-gray-700 text-sm">
          {isReacted ? reactions + 1 : reactions} Reactions
        </span>
      </div>
      <div className="text-gray-700 text-sm flex items-center space-x-2">
        <span>{views} Views</span>
      </div>
      <div className="text-gray-700 text-sm flex items-center space-x-2">
        <img src={commentIcon} alt="Comment Icon" className="w-7 h-7" />
        <span>{comments} Comments</span>
      </div>
    </div>
  );
};

export default function Post({ post }) {
  const [comments, setComments] = useState(post.sampleComments);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [currCmtPage, setCurrCmtPage] = useState(0);

  console.log(post);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserBasicInfo(post.userId);
      setUser(userData);
    };
    fetchUser();
  }, [post.userId]);

  const handleSeeMore = async () => {
    setLoading(true);

    try {
      const response = await axios.get(`/post/${post.id}/comments`, {
        params: {
          page: currCmtPage + 1,
          limit: 5,
        },
      });

      const newComments = response.data.comments || [];

      for (const cmt of comments) {
        if (!newComments.some((newCmt) => newCmt.id === cmt.id)) {
          newComments.push(cmt);
        }
      }

      setComments((prevComments) => [...newComments]);
      setCurrCmtPage((prev) => prev + 1);
    } catch (error) {
      console.error('Error while fetching comments:', error);
    }

    setLoading(false);
  };

  const canLoadMore = comments.length < post.nComments;

  return (
    <div className="flex flex-col lg:flex-row mt-4 overflow-hidden">
      {/* Post Section */}
      <div className="flex-1 lg:mr-2 p-6 bg-blue-50 shadow-md rounded-lg border-r border-gray-200 h-full">
        <div className="flex items-center space-x-3 mb-2">
          <img
            src={user?.avatar || GuestUser}
            alt={`${user?.username || 'Anonymous'}'s avatar`}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-gray-800 font-bold">{user?.username ?? 'Anonymous'}</p>
            <p className="text-gray-500 text-sm">{formatTime(post.createdAt)}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{post.content}</p>

        {/* Post Carousel */}
        {post.images.length + post.videos.length > 0 && (
          <Carousel items={[...post.images, ...post.videos]} />
        )}

        {/* Post Details Section */}
        <PostDetails
          reacted={post.isReacted}
          postId={post.id}
          reactions={post.nReactions}
          views={post.nViews}
          comments={post.nComments}
        />
      </div>

      {/* Comments Section */}
      <div className="flex-1 lg:ml-2 lg:mt-0 mt-2 p-6 bg-gray-50 shadow-md rounded-lg max-h-[496px] overflow-y-auto">
        <h1 className="text-xl font-bold mb-4 text-blue-800">Comments</h1>
        {comments.length === 0 && <p className="text-gray-500 italic">No comments available.</p>}

        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}

        {/* See More Button */}
        {canLoadMore && comments.length !== 0 && (
          <button
            onClick={handleSeeMore}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'See More'}
          </button>
        )}
      </div>
    </div>
  );
}

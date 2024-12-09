import { useEffect, useState } from 'react';

import Post from '../../components/post';
import axios from '../../libs/axios';

export default function PendingPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const response = await axios.get('/post/8d043612-feff-491b-8d7c-fd76b46ad747');
        setPost(response.data.post || []);
      } catch (error) {
        console.error('Error while fetching posts:', error);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col w-full h-full space-y-4">
      <h1 className="text-3xl font-bold text-gray-800">Pending Posts</h1>
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">Loading...</p>
        </div>
      ) : post ? (
        <div className="grid grid-cols-1 gap-4">
          <Post post={post} />
        </div>
      ) : (
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">No pending post</p>
        </div>
      )}
    </div>
  );
}

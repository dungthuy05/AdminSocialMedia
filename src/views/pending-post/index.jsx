import { useEffect, useState } from 'react';

import Post from '../../components/post';
import axios from '../../libs/axios';
import TrashIcon from '../../assets/images/trash.svg';
import IgnoreIcon from '../../assets/images/ignored.svg';

export default function PendingPost() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await axios.get('/report/report-list-post');
      setResult(response.data[0] || null);
    } catch (error) {
      console.error('Error while fetching posts:', error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async () => {
    if (result?.post?.id) {
      const confirmed = window.confirm('Bạn có chắc chắn muốn xóa bài viết này không?');
      if (!confirmed) return;

      try {
        await axios.delete(`/post/${result.post.id}`);
        alert('Bài viết đã được xóa thành công!');
        await fetchPosts(); // Fetch bài post mới sau khi xóa
      } catch (error) {
        console.error('Error while deleting post:', error);
        alert('Xóa bài viết thất bại.');
      }
    }
  };

  const handleSkip = () => {
    setResult(null); // Bỏ qua bài viết hiện tại
    fetchPosts(); // Fetch bài post mới sau khi bỏ qua
  };

  return (
    <div className="flex flex-col w-full h-full space-y-4">
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500 animate-pulse">Loading...</p>
        </div>
      ) : result ? (
        <div className="grid grid-cols-1 gap-4 p-4 border rounded-md shadow-md bg-white">
          {/* Hiển thị thông tin report */}
          <div className="flex justify-between items-start p-4 border-b bg-red-100 rounded-t-md">
            <div>
              <p className="text-lg font-semibold text-red-600">
                🛑 Bài viết có {result.nReport} báo cáo
              </p>
              <p className="text-sm text-gray-700">
                Tỷ lệ vi phạm: {(result.reportRate * 100).toFixed(1)}%
              </p>
              <p className="text-sm text-gray-500">
                Ngày tạo: {new Date(result.createdAt).toLocaleString()}
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              {/* Nút xóa */}
              <button
                onClick={handleDelete}
                className="flex items-center justify-center w-10 h-10 text-white bg-red-500 rounded-full hover:bg-red-600 sm:w-[120px] sm:h-auto sm:px-4 sm:py-2 sm:rounded-md sm:text-sm sm:font-medium"
              >
                <img src={TrashIcon} alt="delete" className="w-6 h-6 sm:hidden" />
                <span className="hidden sm:block">Xóa bài viết</span>
              </button>
              {/* Nút bỏ qua */}
              <button
                onClick={handleSkip}
                className="flex items-center justify-center w-10 h-10 text-white bg-emerald-500 rounded-full hover:bg-emerald-600 sm:w-[120px] sm:h-auto sm:px-4 sm:py-2 sm:rounded-md sm:text-sm sm:font-medium"
              >
                <img src={IgnoreIcon} alt="ignore" className="w-6 h-6 sm:hidden" />
                <span className="hidden sm:block">Bỏ qua</span>
              </button>
            </div>
          </div>

          {/* Hiển thị bài viết */}
          <Post post={result.post} />
        </div>
      ) : (
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">Không có bài viết chờ duyệt</p>
        </div>
      )}
    </div>
  );
}

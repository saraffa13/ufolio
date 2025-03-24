import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();

  // Fetch the blog post using the id
  // This is a placeholder; replace with actual data fetching logic
  const post = {
    id,
    title: `Blog Post ${id}`,
    content: `This is the content of blog post ${id}.`,
    author: 'Author Name',
    date: 'October 15, 2023'
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-8 text-gray-800">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.content}</p>
        <div className="flex justify-between items-center text-gray-500">
          <span>By {post.author}</span>
          <span>{post.date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
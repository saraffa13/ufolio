import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
    const [posts, setPosts] = useState([
        {
          id: 1,
          title: 'Mastering React: Tips and Best Practices',
          content: 'Explore advanced techniques and best practices for building robust React applications.',
          author: 'Alice Johnson',
          date: 'October 10, 2023'
        },
        {
          id: 2,
          title: 'JavaScript Closures Explained: A Deep Dive',
          content: 'Understand the power of closures in JavaScript and how they can be used effectively.',
          author: 'Bob Smith',
          date: 'October 12, 2023'
        }
      ]);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="bg-gradient-to-r from-blue-200 to-purple-200 min-h-screen py-24">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">My Blogs</h2>

                <motion.div
                    className="grid gap-12 md:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {posts.map(post => (
                        <Link to={`/blog/${post.id}`} key={post.id}>
                            <motion.div
                                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col justify-between h-full"
                                variants={itemVariants}
                            >
                                <div>
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">{post.title}</h3>
                                    <p className="text-gray-600 mb-6">{post.content.substring(0, 100)}...</p>
                                </div>
                                <div className="flex justify-between items-center text-gray-500">
                                    <span>By {post.author}</span>
                                    <span>{post.date}</span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default BlogList;
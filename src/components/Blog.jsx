import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Label Design Tips for 2025",
    summary: "Learn the latest trends in label design that will help your brand stand out.",
    image: "/Blog-1.png",
    slug: "label-design-tips-2025"
  },
  {
    id: 2,
    title: "Woven vs Printed Labels: Which One is Right for You?",
    summary: "We break down the pros and cons of woven and printed labels.",
    image: "/Blog-2.png",
    slug: "woven-vs-printed-labels"
  },
  {
    id: 2,
    title: "Woven vs Printed Labels: Which One is Right for You?",
    summary: "We break down the pros and cons of woven and printed labels.",
    image: "/Blog-2.png",
    slug: "woven-vs-printed-labels"
  },
  {
    id: 2,
    title: "Woven vs Printed Labels: Which One is Right for You?",
    summary: "We break down the pros and cons of woven and printed labels.",
    image: "/Blog-1.png",
    slug: "woven-vs-printed-labels"
  },
];

const BlogHome = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 m-auto mt-50 mb-20 ">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 text-center">
  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
  Our Blog
  </span>
</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-20">
        {blogPosts.map((post) => (
          <Link key={post.id} to={`/blog/${post.slug}`} className="border-b-2 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm">{post.summary}</p>
            </div>
          </Link>
        ))}
      </div>  
    </div>
  );
};

export default BlogHome;

 
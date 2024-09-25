import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import fs from "fs";
import matter from 'gray-matter';

const dirContent = fs.readdirSync("content", "utf-8");
const blog = dirContent.map(file => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
})



export const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Welcome to Our Blog</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">Explore the latest articles and insights from our team</p>
      </div>

      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blog.map((post, index) => (
          <div key={post.id || index} className="bg-white dark:bg-black rounded-lg shadow-md overflow-hidden">

            <Link href={`/blogposts/${post.slug}`} prefetch={false}>
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: '600/400', objectFit: 'cover' }}
              />
            </Link>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString()} {/* Format the date */}
                </div>

                <span className="mx-2 text-gray-400">·</span>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{post.author}</div>
              </div>
              <Link href={`/blogposts/${post.slug}`} prefetch={false}>
                <h2 className="text-xl font-bold mb-2 hover:text-primary dark:hover:text-primary-light transition-colors dark:text-white">{post.title}</h2>
              </Link>
              <p className="text-gray-500 dark:text-gray-300 mb-4">{post.description}</p>
              <Link
                href={`/blogposts/${post.slug}`}
                className="inline-block bg-primary text-white dark:text-black px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
                prefetch={false}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

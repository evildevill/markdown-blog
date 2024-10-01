import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';

export function OtherPosts({ currentSlug }) {
  const dirContent = fs.readdirSync('public/content', 'utf-8');
  const blog = dirContent.map((file) => {
    const fileContent = fs.readFileSync(`public/content/${file}`, 'utf-8');
    const { data } = matter(fileContent);
    return data;
  }).sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date (newest first)

  const otherPosts = blog.filter((post) => post.slug !== currentSlug).slice(0, 6); // Get other posts

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Other Posts You Might Like</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {otherPosts.length > 0 ? (
          otherPosts.map((post, index) => (
            <div key={post.id || index} className="bg-white dark:bg-black rounded-lg shadow-md overflow-hidden">
              {/* <Link href={`/blogposts/${post.slug}`} prefetch={false}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: '600/400', objectFit: 'cover' }}
                  priority
                />
              </Link> */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <span className="mx-2 text-gray-400">·</span>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{post.author}</div>
                </div>
                <Link href={`/blogposts/${post.slug}`} prefetch={false}>
                  <h3 className="text-xl font-bold mb-2 hover:text-primary dark:hover:text-primary-light transition-colors dark:text-white">{post.title}</h3>
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
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-300">No other posts available at the moment.</p>
        )}
      </div>
    </div>
  );
}

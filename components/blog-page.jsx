"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SkeletonCard = () => (
  <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden animate-pulse">
    <div className="w-full h-48 bg-gray-300 dark:bg-slate-900"></div>
    <div className="p-6">
      <div className="h-4 bg-gray-300 dark:bg-slate-900 mb-4"></div>
      <div className="h-4 bg-gray-300 dark:bg-slate-900 mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-slate-900 mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-slate-900 mb-2"></div>
      <div className="h-8 bg-gray-300 dark:bg-slate-900 mt-4"></div>
    </div>
  </div>
);

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInitialPosts = async () => {
      setLoading(true);
      const res = await fetch(`/api/posts?page=1&limit=6`);
      const { posts: initialPosts, hasMore: initialHasMore } = await res.json();
      setPosts(initialPosts);
      setHasMore(initialHasMore);
      setLoading(false);
    };

    fetchInitialPosts();
  }, []);

  const loadMorePosts = async () => {
    const nextPage = page + 1;
    const res = await fetch(`/api/posts?page=${nextPage}&limit=6`);
    const { posts: newPosts, hasMore: newHasMore } = await res.json();

    setPosts([...posts, ...newPosts]);
    setHasMore(newHasMore);
    setPage(nextPage);
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Welcome to my Blog</h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm">Explore the latest articles and insights</p>
      </div>

      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
        ) : (
          posts.map((post, index) => (
            <div key={post.id || index} className="bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden">
              <Link href={`/blogposts/${post.slug}`} prefetch={false}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: '600/400', objectFit: 'cover' }}
                  priority={index === 0 ? true : false} // Set priority for the first image
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString()}
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
          ))
        )}
      </div>
      {hasMore && !loading && (
        <div className="text-center mt-8">
          <button
            onClick={loadMorePosts}
            className="bg-primary text-white dark:text-black px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
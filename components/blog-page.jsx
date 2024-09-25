import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Mastering React Hooks: A Comprehensive Guide',
      description: 'Dive into the world of React Hooks and learn how to leverage them to build powerful and efficient applications.',
      slug: 'mastering-react-hooks',
      date: '2023-05-15',
      author: 'John Doe',
      image: '/placeholder.svg',
    },
    {
      id: 2,
      title: 'Exploring the Potential of Serverless Computing',
      description: 'Discover the benefits of serverless architecture and how it can revolutionize your software development process.',
      slug: 'serverless-computing',
      date: '2023-04-20',
      author: 'Jane Smith',
      image: '/placeholder.svg',
    },
    {
      id: 3,
      title: 'The Future of Web Development: Trends and Innovations',
      description: 'Stay ahead of the curve and learn about the latest trends and innovations shaping the future of web development.',
      slug: 'web-development-trends',
      date: '2023-03-01',
      author: 'Michael Johnson',
      image: '/placeholder.svg',
    },
    {
      id: 4,
      title: 'Optimizing Performance: Strategies for Faster Websites',
      description: 'Improve the performance of your website and provide a better user experience with these proven optimization techniques.',
      slug: 'website-performance-optimization',
      date: '2023-02-10',
      author: 'Sarah Lee',
      image: '/placeholder.svg',
    },
    {
      id: 5,
      title: 'Accessibility in Web Design: Inclusive Practices for All',
      description: 'Discover how to create accessible web experiences that cater to users with diverse needs and abilities.',
      slug: 'web-design-accessibility',
      date: '2023-01-25',
      author: 'David Kim',
      image: '/placeholder.svg',
    },
    {
      id: 6,
      title: 'Accessibility in Web Design: Inclusive Practices for All',
      description: 'Discover how to create accessible web experiences that cater to users with diverse needs and abilities.',
      slug: 'web-design-accessibility-6',
      date: '2023-01-25',
      author: 'David Kim',
      image: '/placeholder.svg',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Welcome to Our Blog</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">Explore the latest articles and insights from our team</p>
      </div>

      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white dark:bg-black rounded-lg shadow-md overflow-hidden">
            <Link href={`/blog/${post.slug}`} prefetch={false}>
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
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{post.date}</div>
                <span className="mx-2 text-gray-400">·</span>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{post.author}</div>
              </div>
              <Link href={`/blog/${post.slug}`} prefetch={false}>
                <h2 className="text-xl font-bold mb-2 hover:text-primary dark:hover:text-primary-light transition-colors dark:text-white">{post.title}</h2>
              </Link>
              <p className="text-gray-500 dark:text-gray-300 mb-4">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
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

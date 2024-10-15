/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: "/posts/:slug*",
        destination: "/blogposts/:slug*",
        permanent: true,
      },
      {
        source: "/product",
        destination:
          "/blogposts/how-hackers-target-instagram-accounts-protect-yourself-2024",
        permanent: true, 
      },
      {
        source: "/resources",
        destination: "/blogposts/resources",
        permanent: true, 
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'microphone=(), camera=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

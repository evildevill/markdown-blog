/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: "/product",
        destination:
          "/blogposts/how-hackers-target-instagram-accounts-protect-yourself-2024",
        permanent: true,
      },
      {
        source: "/posts/malware-development-how-to-call-windows-api-from-go",
        destination:
          "/blogposts/malware-development-how-to-call-windows-api-from-go",
        permanent: true,
      },
      {
        source:
          "/posts/malware-development-create-remote-thread-shellcode-injection-golang",
        destination:
          "/blogposts/malware-development-create-remote-thread-shellcode-injection-golang",
        permanent: true,
      },
      {
        source: "/posts/bugbounty-resources",
        destination: "/blogposts/bugbounty-resources-2024",
        permanent: true,
      },
      {
        source: "/posts/boom-bashed/",
        destination: "/blogposts/boom-bashed/",
        permanent: true,
      },
      {
        source: "/posts/steganography-beginners",
        destination: "/blogposts/steganography-beginners",
        permanent: true,
      },
      {
        source: "/resources",
        destination: "/blogposts/resources",
        permanent: true,
      },
      {
        source: "/posts",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "microphone=(), camera=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

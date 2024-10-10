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
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/posts/malware-development-how-to-call-windows-api-from-go",
        destination:
          "/blogposts/malware-development-how-to-call-windows-api-from-go",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source:
          "/posts/malware-development-create-remote-thread-shellcode-injection-golang",
        destination:
          "/blogposts/malware-development-create-remote-thread-shellcode-injection-golang",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/posts/bugbounty-resources",
        destination: "/blogposts/bugbounty-resources-2024",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/posts/boom-bashed/",
        destination: "/blogposts/boom-bashed/",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/posts/steganography-beginners",
        destination: "/blogposts/steganography-beginners",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/resources",
        destination: "/blogposts/resources",
        permanent: true, // This indicates a 301 permanent redirect
      },
    ];
  },
};

export default nextConfig;

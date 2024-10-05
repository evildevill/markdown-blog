/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/product',
            destination: '/blogposts/how-hackers-target-instagram-accounts-protect-yourself-2024',
            permanent: true, // This indicates a 301 permanent redirect
          },
        ];
      },
};

export default nextConfig;

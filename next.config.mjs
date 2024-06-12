/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          // This header applies to all pages
          source: '/(.*)',
          headers: [
            {
              key: 'X-Robots-Tag',
              value: 'index, follow',  // Ensures all pages can be indexed and followed
            },
          ],
        },
      ];
    },
    trailingSlash: true,  // Optional: Adds a trailing slash to URLs
  };
  
  export default nextConfig;
  
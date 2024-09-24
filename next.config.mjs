/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          { key: "Content-Security-Policy", value: "img-src 'self' data: *;" },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://replikstore.shop",
          },
          // { key: 'Access-Control-Allow-Origin', value: 'https://sexgirl.kz/api' },
          //{ key: 'Access-Control-Allow-Origin', value: 'http://78.155.194.209:8001' }, // Замените на ваш домен
          // { key: 'Access-Control-Allow-Origin', value: 'http://localhost:3000' }, // Замените на ваш домен
        ],
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */

require('dotenv').config();

const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  },
  images: {
    domains: ['www.worldometers.info', 't3.ftcdn.net', 't4.ftcdn.net'],
  },
}

module.exports = nextConfig, withPWA({
  
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development"
  },
}); 

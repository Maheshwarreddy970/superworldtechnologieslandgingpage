/** next.config.js **/
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  serverActions: {
    bodySizeLimit: "1mb",
  },
  // Only enable standalone when DISABLE_STANDALONE is not set.
  ...(process.env.DISABLE_STANDALONE ? {} : { output: "standalone" }),
};

export default nextConfig;

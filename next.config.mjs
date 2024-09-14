/** @type {import('next').NextConfig} */
const nextConfig = {
  
  output: 'export',
  experimental: {
    styledComponents: true,
  },
  
  tailwindcss: {
    mode: 'jit',
  },
};

export default nextConfig;
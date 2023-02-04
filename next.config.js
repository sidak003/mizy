/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env : {
    clientApii : 'https://fun73dugyb.execute-api.ap-south-1.amazonaws.com/dev',
    phone1 : '8318765361',
    phone2 : '9120610600',
    email : 'mizyindia@gmail.com',
    instagramHandle : 'https://www.instagram.com/mizyindia/',
  },
  reactStrictMode: true,
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env : {
    clientApii : 'https://fun73dugyb.execute-api.ap-south-1.amazonaws.com/gen',
    phone : '+91 6381784458',
    email : 'mizyindia@gmail.com',
    instagramLink : 'https://www.instagram.com/mizyindia',
    facebookLink : 'https://www.facebook.com/mizyindia',
  },
  reactStrictMode: true,
}

module.exports = nextConfig

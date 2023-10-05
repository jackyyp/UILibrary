/** @type {import('next').NextConfig} */

// allow image from external URL
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/*',
            },
        ],
    },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'tailus.io'
            }
        ],
        domains: ['tailus.io']
    }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets-global.website-files.com',
                port: '',
                pathname: '/',
            },
        ],
    },
};

export default nextConfig;

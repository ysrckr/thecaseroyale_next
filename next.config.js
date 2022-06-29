/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [process.env.NEXT_PUBLIC_IMAGE_URL, 'secure.gravatar.com'],
	},
}

module.exports = nextConfig

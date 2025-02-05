import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			oneOf: [
				{
					issuer: /\.[jt]sx?$/,
					resourceQuery: /component/, // імпорт як компонент (example.svg?component)
					use: ['@svgr/webpack'],
				},
				{
					type: 'asset', // імпорт як src для <Image/>
				},
			],
		});
		return config;
	},
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: "/auth/:path*", // Rota no frontend
                destination: "http://localhost:3001/auth/:path*", // Proxy para o backend
            },
            {
                source: "/postagen/:path*", 
                destination: "http://localhost:3001/postagen/:path*",
            },
        ];
    },
};

export default nextConfig;

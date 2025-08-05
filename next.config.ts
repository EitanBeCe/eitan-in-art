/** @type {import('next').NextConfig} */

const nextConfig = {
    // FIXME
    // output: "export",
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    }
}

module.exports = nextConfig
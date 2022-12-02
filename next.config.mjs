/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/naming-convention */
/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN,
  },
};

export default nextConfig;

import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
   typescript:{
     ignoreBuildErrors: true,
   },
   eslint: {
     ignoreDuringBuilds: true,
   },
  /* config options here */
};

export default withNextIntl(nextConfig);
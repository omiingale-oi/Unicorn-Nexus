import type { NextConfig } from "next";
import { locationPages } from "./data/location-pages";

const nextConfig: NextConfig = {
  async redirects() {
    return locationPages.map((page) => ({
      source: `/${page.slug}`,
      destination: `/services/${page.slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;

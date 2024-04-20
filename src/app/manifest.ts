import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maclabs",
    short_name: "Maclabs",
    icons: [
      {
        src: "/images/logo-ml.webp",
        sizes: "32x32",
        type: "image/webp",
        purpose: "any",
      },
      {
        src: "/images/logo-ml.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
    ],
    start_url: "https://maclabs.co.id/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    description:
      "Maclabs.co.id. Tempat terpercaya untuk perbaikan perangkat Mac Anda",
  };
}

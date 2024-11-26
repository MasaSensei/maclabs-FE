import Cores from "@/components/core";
import Layouts from "@/components/layouts";
import VideoFetchingData from "./fetchingData";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maclabs.co.id/"),
  title:
    "Video Gallery Service MacBook, Mac Mini, iMac, dan Mac Pro - Maclabs.co.id",
  description:
    "Explore a collection of video tutorials on Apple device repairs, from MacBook LCD replacement to charging issues and more. Watch and learn the most common repairs.",
  keywords:
    "Apple repairs, MacBook tutorial, video repair gallery, tech tutorials, DIY repairs, servis macbook, servis mac mini, servis imac, servis mac pro, perbaikan macbook, perawatan macbook, layanan mac apple, jakarta, depok, tangerang, bekasi, maclabs.co.id",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/images/cropped-logo-ml.webp",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/images/cropped-logo-ml.webp",
    },
  ],
  openGraph: {
    title:
      "Video Gallery Service MacBook, Mac Mini, iMac, dan Mac Pro - Maclabs.co.id",
    description:
      "Explore a collection of video tutorials on Apple device repairs, from MacBook LCD replacement to charging issues and more. Watch and learn the most common repairs.",
    url: "https://maclabs.co.id/videos/",
    type: "website",
    images: [
      {
        url: "https://maclabs.co.id/images/cropped-logo-ml.webp",
        width: 1200,
        height: 630,
        alt: "Maclabs",
      },
    ],
    siteName: "Maclabs Service Mac Devices",
    locale: "id-ID",
  },
  alternates: {
    canonical: `https://maclabs.co.id/videos/`,
    languages: {
      "id-ID": "https://maclabs.co.id/videos/",
    },
  },
};

const VideosPage = () => {
  return (
    <Layouts.Section variant={"secondary"}>
      <Cores.Title
        title="MacLabs - Solusi Lengkap untuk Perangkat Apple Anda"
        content="Jelajahi solusi lengkap untuk memperbaiki perangkat Apple Anda."
      />
      <VideoFetchingData />
    </Layouts.Section>
  );
};

export default VideosPage;

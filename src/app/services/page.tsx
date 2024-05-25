import Cores from "@/components/core";
import Layouts from "@/components/layouts";
import FetchData from "./fetchData";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maclabs.co.id/"),
  manifest: "https://maclabs.co.id/manifest.webmanifest",
  title:
    "Layanan Service Profesional MacBook, Mac Mini, iMac, dan Mac Pro - Maclabs.co.id - Maclabs.co.id",
  description:
    "Dapatkan layanan service profesional untuk MacBook, Mac Mini, iMac, dan Mac Pro di Jakarta, Depok, Tangerang, dan Bekasi. Kami menawarkan perbaikan dan perawatan berkualitas untuk semua perangkat Apple Anda. Kunjungi Maclabs.co.id untuk informasi lebih lanjut.",
  keywords:
    "layanan service macbook, service mac mini, service imac, service mac pro, perbaikan macbook, perawatan macbook, layanan mac apple, jakarta, depok, tangerang, bekasi, maclabs.co.id",
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
      "Layanan Service Profesional MacBook, Mac Mini, iMac, dan Mac Pro - Maclabs.co.id - Maclabs.co.id",
    description:
      "Dapatkan layanan service profesional untuk MacBook, Mac Mini, iMac, dan Mac Pro di Jakarta, Depok, Tangerang, dan Bekasi. Kami menawarkan perbaikan dan perawatan berkualitas untuk semua perangkat Apple Anda. Kunjungi Maclabs.co.id untuk informasi lebih lanjut.",
    url: "https://maclabs.co.id/services/",
    images: ["/images/cropped-logo-ml.webp"],
    type: "website",
    siteName: "Maclabs Service Mac Devices",
    locale: "id-ID",
  },
  alternates: {
    canonical: `https://maclabs.co.id/services/`,
    languages: {
      "id-ID": "https://maclabs.co.id/services/",
    },
  },
};

const ServicesPage = () => {
  return (
    <Layouts.Section variant={"secondary"}>
      <Cores.Title title="Services" content="Our Services" />
      <FetchData />
    </Layouts.Section>
  );
};

export default ServicesPage;

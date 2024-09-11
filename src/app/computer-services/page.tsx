import Cores from "@/components/core";
import Layouts from "@/components/layouts";
import FetchData from "./fetchData";
import { Metadata } from "next";
import Autocomplete from "@/components/fragments/Autocomplete";

export const metadata: Metadata = {
  metadataBase: new URL("https://maclabs.co.id/"),
  title:
    "Layanan Service Profesional MacBook, Mac Mini, iMac, dan Mac Pro - Maclabs.co.id",
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
      "Layanan Service Profesional MacBook, Mac Mini, iMac, dan Mac Pro - Maclabs.co.id",
    description:
      "Dapatkan layanan service profesional untuk MacBook, Mac Mini, iMac, dan Mac Pro di Jakarta, Depok, Tangerang, dan Bekasi. Kami menawarkan perbaikan dan perawatan berkualitas untuk semua perangkat Apple Anda. Kunjungi Maclabs.co.id untuk informasi lebih lanjut.",
    url: "https://maclabs.co.id/computer-services/",
    siteName: "Maclabs Service Mac Devices",
    type: "website",
    images: [
      {
        url: "https://maclabs.co.id/images/cropped-logo-ml.webp",
        width: 800,
        height: 600,
      },
    ],
    locale: "id-ID",
  },
  alternates: {
    canonical: `https://maclabs.co.id/computer-services/`,
    languages: {
      "id-ID": "https://maclabs.co.id/computer-services/",
    },
  },
};

const ServicesPage = () => {
  return (
    <Layouts.Section variant={"secondary"}>
      <Autocomplete variant="default" className="lg:flex hidden" />
      <Cores.Title title="Services" content="Our Services" />
      <Autocomplete variant="default" className="lg:hidden" />
      <FetchData />
    </Layouts.Section>
  );
};

export default ServicesPage;

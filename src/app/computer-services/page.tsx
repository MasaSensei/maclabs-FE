import Cores from "@/components/core";
import Layouts from "@/components/layouts";
import FetchData from "./fetchData";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maclabs.co.id/"),
  title: "Services Mac-Devices - Maclabs.co.id",
  description:
    "Service perangkat Macbook, Mac Mini, Mac Pro. Segala jenis kerusakan. Macbook mati total. Service Mac not charging. Bergaransi....",
  keywords:
    "service, service mac, service imac, service macbook, service mac-devices, service macbook jakarta",
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
    title: "Services Mac-Devices - Maclabs.co.id",
    description:
      "Service perangkat Macbook, Mac Mini, Mac Pro. Segalaenis kerusakan. Macbook mati total. Service Mac not charging. Bergaransi....",
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
    locale: "en_US",
  },
  alternates: {
    canonical: `https://maclabs.co.id/computer-services/`,
    languages: {
      "en-US": "https://maclabs.co.id/computer-services/",
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

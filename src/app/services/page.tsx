import Cores from "@/components/core";
import Layouts from "@/components/layouts";
import FetchData from "./fetchData";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maclabs.co.id/"),
  manifest: "https://maclabs.co.id/manifest.webmanifest",
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
    url: "https://maclabs.co.id/services/",
    images: ["/images/cropped-logo-ml.webp"],
    type: "website",
    siteName: "Maclabs Service Mac Devices",
    locale: "id_ID",
  },
  alternates: {
    canonical: `https://maclabs.co.id/services/`,
    languages: {
      "en-US": "https://maclabs.co.id/services/",
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

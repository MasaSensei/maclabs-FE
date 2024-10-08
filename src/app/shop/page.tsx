import Layouts from "@/components/layouts";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("@/components/core/Card"), { ssr: false });
const Title = dynamic(() => import("@/components/core/Title"), { ssr: false });

export const metadata: Metadata = {
  metadataBase: new URL("https://maclabs.co.id/"),
  title: "Sparepart & Service Mac Device di Jadetabek - Maclabs.co.id",
  description:
    "MacLabs.co.id menyediakan sparepart dan juga jasa service terbaik untuk Mac Device seperti MacBook, iMac, Mac Mini, dan Mac Pro di Jakarta, Depok, Tangerang, Bekasi. Kunjungi Maclabs.co.id sekarang!",
  keywords:
    "sparepart Mac Device, peralatan reparasi MacBook, komponen iMac, Jakarta, Depok, Tangerang, Bekasi",
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
    title: "Sparepart & Service Mac Device di Jadetabek - Maclabs.co.id",
    description:
      "MacLabs.co.id menyediakan sparepart dan jasa service terbaik untuk Mac Device seperti MacBook, iMac, Mac Mini, dan Mac Pro di Jakarta, Depok, Tangerang, Bekasi. Kunjungi Maclabs.co.id sekarang!",
    url: "https://maclabs.co.id/shop/",
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
    canonical: `https://maclabs.co.id/shop/`,
    languages: {
      "id-ID": "https://maclabs.co.id/shop/",
    },
  },
};

const ShopPage = () => {
  const devices = [
    {
      image: "/images/devices/Macbook.png",
      name: "Macbook",
    },
    {
      image: "/images/devices/Untitled-2.png",
      name: "iMac",
    },
    {
      image: "/images/devices/Untitled-2 2.png",
      name: "Mac-Mini",
    },
    {
      image: "/images/mac-pro-tabung.webp",
      name: "Mac-Pro",
    },
  ];

  return (
    <Layouts.Section variant={"secondary"}>
      <Title title="Replacement Parts" content="Pilih Device Yang Anda Butuh" />
      <div className="mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {devices.map((device, index) => {
          const link =
            device?.name.toLowerCase() !== "mac-pro"
              ? `/shop/${device?.name.toLowerCase()}`
              : "https://wa.me/62818850509";
          return (
            <Card
              key={index}
              images={device?.image}
              name={device?.name}
              link={link}
              caseType="blog"
            />
          );
        })}
      </div>
    </Layouts.Section>
  );
};

export default ShopPage;

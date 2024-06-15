import Cores from "@/components/core";
import Layouts from "@/components/layouts";
import { Metadata } from "next";

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
      image: "/images/MACBOOK-A1534-2016.webp",
      name: "Macbook",
    },
    {
      image: "/images/image-removebg-preview-6-300x300-1.webp",
      name: "iMac",
    },
    {
      image: "/images/mac-mini-3.webp",
      name: "Mac-Mini",
    },
    {
      image: "/images/mac-pro-tabung.webp",
      name: "Mac-Pro",
    },
  ];

  return (
    <Layouts.Section variant={"secondary"}>
      <Cores.Title title="Shop" content="Our Services" />
      <div className="mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {devices.map((device, index) => (
          <Cores.Card
            caseType="blog"
            key={index}
            name={device?.name}
            images={device?.image}
            link={`/shop/${device?.name.toLowerCase()}`}
          />
        ))}
      </div>
    </Layouts.Section>
  );
};

export default ShopPage;

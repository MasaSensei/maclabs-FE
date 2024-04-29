import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://maclabs.co.id/"),
  title: "Spesialis Service Macbook | iMac | Mac Mini - Maclabs.co.id",
  description:
    "Service All Mac Devices Jakarta seperti Macbook, iMac, Mac Mini dan Mac Pro. Menerima pergantian Part yang bergaransi dan berkualitas",
  keywords: "service mac, service macbook, service imac, macbook mati total",
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
  alternates: {
    canonical: "https://maclabs.co.id/",
    languages: {
      "en-US": "https://maclabs.co.id/",
    },
  },
};
const NotFound = () => {
  return (
    <div className="bg-white my-10">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 mt-12">
          <Image
            src="/images/Oppss!!404.png"
            width={500}
            height={500}
            alt="404"
            className="mx-auto"
          />
        </div>
        <div className="grid grid-rows-2 text-center">
          <p className="text-2xl mt-4 ">Halaman Tidak Ditemukan</p>
          <button className="btn btn-primary text-blue-500 hover:underline mt-4">
            <Link href={"/"}>Silahkan ke halaman sebelumnya</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

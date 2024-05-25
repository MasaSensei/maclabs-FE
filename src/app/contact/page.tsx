import Cores from "@/components/core";
import Layouts from "@/components/layouts";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import ContactForm from "./contactForm";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maclabs.co.id/"),
  title:
    "Kontak Layanan Service MacBook, Mac Mini, iMac, dan Mac Pro - Maclabs.co.id",
  description:
    "Hubungi kami untuk layanan servis MacBook, Mac Mini, iMac, dan Mac Pro di Jakarta, Depok, Tangerang, dan Bekasi. Dapatkan informasi lebih lanjut dan konsultasi gratis. Kunjungi MacLabs.co.id untuk detail kontak.",
  keywords:
    "hubungi kami, kontak layanan servis mac, servis macbook, servis mac mini, servis imac, servis mac pro, perbaikan macbook, perawatan macbook, layanan mac apple, jakarta, depok, tangerang, bekasi, maclabs.co.id",
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
      "Kontak Layanan Service MacBook, Mac Mini, iMac, dan Mac Pro - Maclabs.co.id",
    description:
      "Hubungi kami untuk layanan servis MacBook, Mac Mini, iMac, dan Mac Pro di Jakarta, Depok, Tangerang, dan Bekasi. Dapatkan informasi lebih lanjut dan konsultasi gratis. Kunjungi MacLabs.co.id untuk detail kontak.",
    url: "https://maclabs.co.id/contact/",
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
    canonical: `https://maclabs.co.id/contact/`,
    languages: {
      "id-ID": "https://maclabs.co.id/contact/",
    },
  },
};

const ContactPage = () => {
  return (
    <Layouts.Section variant={"secondary"}>
      <Cores.Title title="Contact Us" content="Get in touch with us" />
      <div className="grid lg:grid-cols-4 grid-cols-1 mt-8">
        <div className="lg:col-span-1 p-0">
          <div className="w-full px-4">
            <div className="flex items-center flex-col justify-center gap-8">
              <Link
                href="https://wa.me/62818850509/"
                target="_blank"
                className="flex group hover:bg-green-500 hover:text-white p-5 rounded-lg transition ease-in-out duration-300  items-center gap-5 justify-center"
              >
                <span className="text-4xl text-green-500 group-hover:text-white transition ease-in-out duration-300">
                  <FaWhatsapp />
                </span>
                <span className="text-2xl text-green-500 group-hover:text-white transition ease-in-out duration-300">
                  Whatsapp
                </span>
              </Link>
              <Link
                href="https://www.instagram.com/maclabs.co.id/"
                target="_blank"
                className="flex group hover:bg-violet-700 hover:text-white p-5 rounded-lg transition ease-in-out duration-300  items-center gap-5 justify-center"
              >
                <span className="text-4xl text-violet-700 group-hover:text-white transition ease-in-out duration-300">
                  <FaInstagram />
                </span>
                <span className="text-2xl text-violet-700 group-hover:text-white transition ease-in-out duration-300">
                  Instagram
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 p-5 bg-white rounded-lg">
          <ContactForm />
        </div>
      </div>
    </Layouts.Section>
  );
};

export default ContactPage;

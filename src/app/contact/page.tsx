import Cores from "@/components/core";
import Layouts from "@/components/layouts";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import ContactForm from "./contactForm";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami Sekarang! | Contact Us - Maclabs.co.id",
  description:
    "Service All Mac Devices Jakarta seperti Macbook, iMac, Mac Mini dan Mac Pro. Menerima pergantian Part yang bergaransi dan berkualitas",
  keywords:
    "Punya permasalahan Macbook? Hubungi kontak kami sekarang untuk konsultasi permasalahan Macbook Anda secara gratis segera! Bergaransi dan....",
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
                href="/"
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

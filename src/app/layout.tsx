"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Layouts from "@/components/layouts";
import Cores from "@/components/core";
import { usePathname } from "next/navigation";
import Fragments from "@/components/fragments";
import BenefitLists from "@/data/benefits";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Layouts.Navbar />
        {pathname !== "/" && <Fragments.Jumbotron />}
        {children}
        <Layouts.Section variant={"default"}>
          <Cores.Title
            title="Our Testimonials"
            content="See what our customers are saying about us"
          />
          <div className="mx-auto flex items-center justify-center">
            <Link
              href={"https://maps.app.goo.gl/p1BFVtKkv1d3oVDLA"}
              target="_blank"
            >
              <Image
                src={"/images/google_review.webp"}
                alt="Google Review"
                width={500}
                height={500}
              />
            </Link>
          </div>
        </Layouts.Section>
        <Layouts.Section variant={"default"}>
          <Cores.Title title="Teknisi Kami Siap Memperbaiki Perangkat Anda!" />
          <div className="lg:text-center text-justify lg:mt-12">
            <p className="mb-6 leading-6">
              MacLabs menerima segala jenis kerusakan pada perangkat Mac Anda
              dari kerusakan ringan hingga berat yang dapat diselesaikan dengan
              waktu yang cepat, diagnosa yang akurat, dan part yang berkualitas!
              Service Macbook menjadi mudah dengan lokasi kami yang strategis di
              Jakarta Pusat, karena Anda bisa mengunjungi alamat kami yang
              berlokasi di Senayan Trade Center. Sibuk untuk visit store? Kami
              menyediakan kurir khusus untuk menjangkau area lainnya seperti
              Sudirman, Kuningan, Ambassador, dan sekitarnya.
            </p>

            <h3 className="lg:text-5xl text-2xl text-red-500">
              <Link
                href="tel:+62818850509"
                className="flex items-center justify-center"
              >
                <span className="relative py-0 pl-0 pr-2">
                  <FaWhatsapp />
                </span>
                <span className="mb-0">+62-818-850-509</span>
              </Link>
            </h3>
          </div>
          <div className="px-0 w-full relative">
            <div className="pt-8 grid lg:grid-cols-3 grid-cols-1 gap-8">
              {BenefitLists.map((benefit) => (
                <Cores.Card
                  key={benefit.id}
                  caseType={"default"}
                  icon={benefit.icon}
                  name={benefit.name}
                  content={benefit.content}
                />
              ))}
            </div>
          </div>
        </Layouts.Section>
        <Cores.WhatsappPopup />
        <Layouts.Footer />
      </body>
    </html>
  );
}

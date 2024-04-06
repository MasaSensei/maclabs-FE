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
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [hasAnimated, setHasAnimated] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        },
        {
          threshold: 0.5,
        }
      );
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isInView]);

  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-KRM4XB7" />
      <GoogleAnalytics gaId="AW-459096540" />
      <body className={inter.className}>
        <Layouts.Navbar />
        {pathname !== "/" && <Fragments.Jumbotron />}
        {children}
        <Layouts.Section variant={"default"}>
          <Cores.Title
            title="Our Testimonials"
            content="See what our customers are saying about us"
          />
          <div ref={ref}>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: hasAnimated ? 0 : 100,
                opacity: hasAnimated ? 1 : 0,
              }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mx-auto flex items-center justify-center"
            >
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
            </motion.div>
          </div>
        </Layouts.Section>
        <Layouts.Section variant={"default"}>
          <Cores.Title title="Teknisi Kami Siap Memperbaiki Perangkat Anda!" />
          <div ref={ref} className="lg:text-center text-justify lg:mt-12">
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: hasAnimated ? 0 : 100,
                opacity: hasAnimated ? 1 : 0,
              }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-6 leading-6"
            >
              MacLabs menerima segala jenis kerusakan pada perangkat Mac Anda
              dari kerusakan ringan hingga berat yang dapat diselesaikan dengan
              waktu yang cepat, diagnosa yang akurat, dan part yang berkualitas!
              Service Macbook menjadi mudah dengan lokasi kami yang strategis di
              Jakarta Pusat, karena Anda bisa mengunjungi alamat kami yang
              berlokasi di Senayan Trade Center. Sibuk untuk visit store? Kami
              menyediakan kurir khusus untuk menjangkau area lainnya seperti
              Sudirman, Kuningan, Ambassador, dan sekitarnya.
            </motion.p>

            <motion.h3
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: hasAnimated ? 0 : 100,
                opacity: hasAnimated ? 1 : 0,
              }}
              transition={{ duration: 1, delay: 0.7 }}
              className="lg:text-5xl text-2xl text-red-500"
            >
              <Link
                href="https://wa.me/62818850509"
                target="_blank"
                className="flex items-center justify-center"
              >
                <span className="relative py-0 pl-0 pr-2">
                  <FaWhatsapp />
                </span>
                <span className="mb-0">+62-818-850-509</span>
              </Link>
            </motion.h3>
          </div>
          <div ref={ref} className="px-0 w-full relative">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: hasAnimated ? 0 : 100,
                opacity: hasAnimated ? 1 : 0,
              }}
              transition={{ duration: 1, delay: 0.9 }}
              className="pt-8 grid lg:grid-cols-3 grid-cols-1 gap-8"
            >
              {BenefitLists.map((benefit) => (
                <Cores.Card
                  key={benefit.id}
                  caseType={"default"}
                  icon={benefit.icon}
                  name={benefit.name}
                  content={benefit.content}
                />
              ))}
            </motion.div>
          </div>
        </Layouts.Section>
        <Cores.WhatsappPopup />
        {pathname === "/" && <Cores.Popup />}
        <Layouts.Footer />
      </body>
    </html>
  );
}

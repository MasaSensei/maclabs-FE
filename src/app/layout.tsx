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
import Galleries from "@/data/gallery.json";
import MyCard from "@/components/core/Card";

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

  const disableJumbotron = [
    "/",
    "/alt-ads-1/",
    "/alt-ads-2/",
    "/alt-ads-3/",
    "/alt-ads-4/",
    "/alt-ads-5/",
  ];

  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-KRM4XB7" />
      <GoogleAnalytics gaId="AW-459096540" />
      <body className={inter.className}>
        <Layouts.Navbar />
        {!disableJumbotron.includes(pathname) && <Fragments.Jumbotron />}
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
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/images/google_review.webp"
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
              className="mb-6 leading-6 text-slate-800"
            >
              MacLabs menerima segala jenis kerusakan pada perangkat Mac Anda
              dari kerusakan ringan hingga berat yang dapat diselesaikan dengan
              waktu yang cepat, diagnosa yang akurat, dan part yang berkualitas!
              Service Macbook menjadi mudah dengan lokasi kami yang strategis di
              Jakarta Pusat, karena Anda bisa mengunjungi alamat kami yang
              berlokasi di <b>Senayan Trade Center</b>. Sibuk untuk visit store?
              Kami menyediakan kurir khusus untuk menjangkau area lainnya
              seperti
              <b> Sudirman</b>, <b>Kuningan</b>, <b>Ambassador</b>, dan
              sekitarnya.
            </motion.p>

            <motion.h3
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: hasAnimated ? 0 : 100,
                opacity: hasAnimated ? 1 : 0,
              }}
              transition={{ duration: 1, delay: 0.7 }}
              className="lg:text-5xl text-2xl text-green-500 hover:text-green-700 transition-color duration-300"
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
                <MyCard
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
        <Layouts.Section variant={"secondary"}>
          <Cores.Title title="Gallery" content="Maclabs Gallery" />
          <div className="m-1 flex flex-wrap md:m-2">
            {Galleries.slice(0, 6).map((gallery, index) => (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{
                  y: hasAnimated ? 0 : 100,
                  opacity: hasAnimated ? 1 : 0,
                }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                className="flex w-1/3 flex-wrap"
                key={index}
              >
                <div className="w-full p-1 md:p-2">
                  <Image
                    src={gallery.image}
                    alt={gallery.title}
                    width={500}
                    className="block h-96 w-full rounded-lg object-cover object-center"
                    height={500}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={gallery.image}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Layouts.Section>
        <Cores.WhatsappPopup />
        {disableJumbotron.includes(pathname) && <Cores.Popup />}
        <Layouts.Footer />
      </body>
    </html>
  );
}

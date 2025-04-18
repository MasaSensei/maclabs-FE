"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Layouts from "@/components/layouts";
import Cores from "@/components/core";
import { usePathname } from "next/navigation";
import Fragments from "@/components/fragments";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { SearchProvider } from "@/context/SearchContext";

// Memuat font secara efisien
const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Path yang menonaktifkan jumbotron
  const disableJumbotron = [
    "/",
    "/alt-ads-1/",
    "/alt-ads-2/",
    "/alt-ads-5/",
    "/alt-ads-6/",
    "/alt-ads-7/",
    "/alt-ads-8/",
    "/alt-ads-9/",
    "/alt-ads-10/",
    "/alt-ads-11/",
    "/alt-ads-12/",
    "/alt-ads-13/",
  ];

  const devicesSeo = [
    { name: "Macbook" },
    { name: "iMac" },
    { name: "Mac Mini" },
    { name: "Mac Pro" },
  ];

  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-KRM4XB7" />
      <GoogleAnalytics gaId="G-1QDMKN9GJ3" />
      <GoogleAnalytics gaId="AW-459096540" />
      <body className={inter.className}>
        <SearchProvider>
          <Layouts.Navbar />
          {!disableJumbotron.includes(pathname) && <Fragments.Jumbotron />}
          {children}
          <Layouts.Section variant="default">
            <Cores.Title title="Teknisi Kami Siap Memperbaiki Perangkat Anda!" />
            <div className="lg:text-center text-justify lg:mt-12">
              <p className="mb-6 leading-6 text-slate-800">
                MacLabs menerima segala jenis kerusakan pada perangkat Mac Anda
                dari kerusakan ringan hingga berat yang dapat diselesaikan
                dengan waktu yang cepat seperti Macbook M2 dan M3 Anda yang
                terkena air, not charging, mati total, baterai not charging,
                dll.
                <br />
                <br />
                Dengan diagnosa yang akurat, dan part yang berkualitas! Service
                Macbook menjadi mudah dengan lokasi kami yang strategis di
                Jakarta Pusat, karena Anda bisa mengunjungi alamat kami yang
                berlokasi di <b>Senayan Trade Center</b>. Sibuk untuk visit
                store? Kami menyediakan kurir khusus untuk menjangkau area
                lainnya seperti
                <b> Sudirman</b>, <b>Kuningan</b>, <b>Ambassador</b>, dan
                sekitarnya.
              </p>
              {/* <div>
                <h3 className="lg:text-5xl text-2xl text-slate-800 hover:text-green-500 transition-colors duration-300">
                  <Link
                    href="https://wa.me/62818850509"
                    target="_blank"
                    className="flex items-center justify-center"
                  >
                    <span className="relative py-0 pl-0 pr-2"></span>
                    <span className="mb-0">+62-818-850-509</span>
                  </Link>
                </h3>
              </div> */}
            </div>
          </Layouts.Section>
          {/* <Layouts.Section variant="secondary">
            <Cores.Title title="Gallery" content="Maclabs Gallery" />
            <div className="m-1 flex flex-wrap md:m-2">
              {Galleries.slice(0, 3).map((gallery, index) => (
                <div key={index} className="flex w-1/3 flex-wrap">
                  <div className="inline-flex justify-center items-center p-1 md:p-2">
                    <Image
                      src={gallery.image}
                      alt={gallery.title}
                      width={500}
                      height={500}
                      className="rounded-lg"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={gallery.image}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Layouts.Section> */}
          <Cores.WhatsappPopup />
          <Layouts.Footer />
        </SearchProvider>
      </body>
    </html>
  );
}

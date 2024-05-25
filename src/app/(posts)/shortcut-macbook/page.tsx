import Layouts from "@/components/layouts";
import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Image from "next/image";
import { Metadata } from "next";
import shortcuts_macbook from "@/data/shorcut_macbook.json";
import shortcuts_finder from "@/data/finder_shortcuts_macbook.json";

export const metadata: Metadata = {
  metadataBase: new URL("https://maclabs.co.id/"),
  manifest: "https://maclabs.co.id/manifest.webmanifest",
  title: "Shortcut MacBook: Panduan Lengkap - Maclabs.co.id",
  description:
    "Temukan panduan lengkap tentang shortcut pada MacBook untuk meningkatkan produktivitas Anda. Pelajari berbagai shortcut yang dapat mempercepat tugas sehari-hari Anda di MacBook. Kunjungi Maclabs.co.id untuk informasi lebih lanjut.",
  keywords:
    "shortcut macbook, panduan lengkap shortcut, shortcut produktivitas, shortcut keyboard macbook, panduan penggunaan shortcut, meningkatkan produktivitas, maclabs.co.id",
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
    title: "Shortcut MacBook: Panduan Lengkap - Maclabs.co.id",
    type: "article",
    siteName: "Maclabs Service Mac Devices",
    publishedTime: `${new Date().toISOString()}`,
    authors: "MacLabs.co.id",
    description:
      "Temukan panduan lengkap tentang shortcut pada MacBook untuk meningkatkan produktivitas Anda. Pelajari berbagai shortcut yang dapat mempercepat tugas sehari-hari Anda di MacBook. Kunjungi Maclabs.co.id untuk informasi lebih lanjut.",
    url: "https://maclabs.co.id/shortcut-macbook/",
    images: [
      {
        url: "https://maclabs.co.id/images/cropped-logo-ml.webp",
        width: 1200,
        height: 630,
        alt: "Maclabs",
      },
    ],
    section: "MacBook",
    locale: "id-ID",
    tags: ["MacBook", "shortcut"],
  },
  alternates: {
    canonical: `https://maclabs.co.id/shortcut-macbook/`,
    languages: {
      "id-ID": "https://maclabs.co.id/shortcut-macbook/",
    },
  },
};

const ShortcutMacbookPage = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Shortcut MacBook: Panduan Lengkap - Maclabs.co.id",
    description:
      "Temukan panduan lengkap tentang shortcut pada MacBook untuk meningkatkan produktivitas Anda. Pelajari berbagai shortcut yang dapat mempercepat tugas sehari-hari Anda di MacBook. Kunjungi Maclabs.co.id untuk informasi lebih lanjut.",
    image: "https://maclabs.co.id/images/cropped-logo-ml.webp",
    datePublished: `${new Date().toISOString()}`,
    dateModified: `${new Date().toISOString()}`,
    author: {
      "@type": "Organization",
      name: "Maclabs",
      url: "https://maclabs.co.id/",
      logo: {
        "@type": "ImageObject",
        url: "https://maclabs.co.id/images/cropped-logo-ml.webp",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://maclabs.co.id/shortcut-macbook/",
      },
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <Layouts.Section variant={"secondary"}>
        <div className="relative">
          <div className="grid lg:grid-cols-5 lg:gap-5 gap-8">
            <div className="mx-auto w-full lg:col-span-1 col-span-2 order-2 lg:order-1">
              <div className="w-full bg-white mb-5 rounded-lg shadow-lg border mt-5">
                <div className="py-8 px-6">
                  <div className="mt-0 mb-5 relative flex gap-2 lg:justify-between items-center">
                    <span className="text-red-600 lg:text-2xl">
                      <FaPhoneAlt />
                    </span>
                    <div className="uppercase">
                      <h6 className="text-lg font-bold">Contact Phone</h6>
                      <p className="text-sm text-slate-500">+62 818 850 509</p>
                    </div>
                  </div>
                  <div className="mt-0 mb-5 relative flex gap-2 lg:justify-between items-center">
                    <span className="text-red-600 lg:text-2xl">
                      <FaMapMarkerAlt />
                    </span>
                    <div className="uppercase">
                      <h6 className="text-lg font-bold">Office Address</h6>
                      <p className="text-sm text-slate-500">
                        Senayan Trade Center (STC) Lt.1 No. 111-112-114 Jalan
                        Asia Afrika Jakarta Pusat
                      </p>
                    </div>
                  </div>
                  <div className="mt-0 mb-5 relative flex gap-2 lg:justify-between items-center">
                    <span className="text-red-600 lg:text-2xl">
                      <FaClock />
                    </span>
                    <div className="uppercase">
                      <h6 className="text-lg font-bold">OFFICE HOURS</h6>
                      <p className="text-sm text-slate-500">
                        11:00-19:00 Wib. Senin-Sabtu (Tanggal merah libur).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full lg:col-span-4 col-span-2 order-1 lg:order-2">
              <div className="text-sm max-w-full">
                <article className="mb-1.5 p-6 rounded-lg bg-white shadow">
                  <h1 className="text-2xl text-center uppercase font-extrabold mb-2">
                    Shortcut MacBook
                  </h1>
                  <div className="w-full flex justify-center my-3">
                    <Image
                      src="/images/services/servis-keyboard-macbook.webp"
                      width={500}
                      height={300}
                      alt="shortcut macbook"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="text-lg pt-3 text-slate-800">
                    <p className="my-5">
                      Apakah Anda tahu hanya dengan menekan kombinasi pada
                      tombol tertentu, dapat melakukan aktivitas yang biasanya
                      dilakukan harus memakai trackpad atau mouse?
                    </p>
                    <p className="my-5 italic">
                      &quot;Shortcut adalah jalan pintas/cara cepat untuk
                      menjalakan suatu pada komputer dengan menekan beberapa
                      tombol pada keyboard. Caranya dengan menekan beberapa
                      tombol yang telah terprogram untuk menjadi tombol
                      pintasan. Biasanya kombinasi pada MacBook menggunakan
                      beberapa tombol yang biasanya ditandai dengan lambang
                      seperti berikut:&quot;
                    </p>
                    <ul className="list-disc my-5 list-inside">
                      <li>Command (atau Cmd) ⌘</li>
                      <li>Option (atau Alt) ⌥</li>
                      <li>Control (atau Ctrl) ⌃</li>
                      <li>Caps Lock ⇪</li>
                      <li>Fn</li>
                    </ul>
                    <h3 className="font-bold text-xl">
                      Pintasan Dasar MacBook
                    </h3>
                    <ul className="list-disc list-inside">
                      {shortcuts_macbook.map((shortcut, index) => (
                        <li key={index} className="my-2">
                          <span className="font-bold">{shortcut.name}</span>{" "}
                          {shortcut.description}
                        </li>
                      ))}
                    </ul>
                    <h3 className="font-bold text-xl my-5">
                      Shortcut Pada Finder MacBook
                    </h3>
                    <ul className="list-disc list-inside">
                      {shortcuts_finder.map((shortcut, index) => (
                        <li key={index} className="my-2">
                          <span className="font-bold">{shortcut.name}</span>{" "}
                          {shortcut.description}
                        </li>
                      ))}
                    </ul>
                    <p className="my-5">
                      Demikian shortcut pada MacBook yang dapat{" "}
                      <Link
                        href="/"
                        className="text-red-500 uppercase font-bold"
                      >
                        Maclabs.co.id
                      </Link>{" "}
                      jelaskan kepada Pengguna MacBook. Terimakasih
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </Layouts.Section>
    </>
  );
};

export default ShortcutMacbookPage;

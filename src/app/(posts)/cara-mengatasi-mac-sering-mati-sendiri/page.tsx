import Layouts from "@/components/layouts";
import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maclabs.co.id/"),
  manifest: "https://maclabs.co.id/manifest.webmanifest",
  title: "Solusi Praktis untuk Masalah MacBook Mati Sendiri - Maclabs.co.id",
  description:
    "Temukan cara mengatasi masalah MacBook yang sering mati sendiri di Jakarta, Tangerang, Bekasi, dan Depok. Dapatkan tips praktis untuk mendiagnosis dan memperbaiki perangkat Anda agar tetap stabil dan andal. Kunjungi Maclabs.co.id untuk informasi lebih lanjut.",
  keywords:
    "cara mengatasi macbook mati sendiri, solusi macbook mati sendiri, masalah macbook mati sendiri, tips memperbaiki macbook, macbook sering mati, troubleshooting macbook, jakarta, tangerang, bekasi, depok, maclabs.co.id",
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
    title: "Solusi Praktis untuk Masalah MacBook Mati Sendiri - Maclabs.co.id",
    type: "article",
    siteName: "Maclabs Service Mac Devices",
    publishedTime: `${new Date().toISOString()}`,
    authors: "MacLabs.co.id",
    description:
      "Temukan cara mengatasi masalah MacBook yang sering mati sendiri di Jakarta, Tangerang, Bekasi, dan Depok. Dapatkan tips praktis untuk mendiagnosis dan memperbaiki perangkat Anda agar tetap stabil dan andal. Kunjungi Maclabs.co.id untuk informasi lebih lanjut.",
    url: "https://maclabs.co.id/cara-mengatasi-mac-sering-mati-sendiri/",
    images: [
      {
        url: "https://maclabs.co.id/images/services/no-display.webp",
        width: 1200,
        height: 630,
        alt: "Maclabs",
      },
    ],
    section: "Blog",
    locale: "id-ID",
    tags: [
      "Macbook",
      "Apple Device",
      "Macbook Pro",
      "Macbook Air",
      "Mati Sendiri",
    ],
  },
  alternates: {
    canonical: `https://maclabs.co.id/cara-mengatasi-mac-sering-mati-sendiri/`,
    languages: {
      "id-ID": "https://maclabs.co.id/cara-mengatasi-mac-sering-mati-sendiri/",
    },
  },
};

const CaraMengatasiMacSeringMatiSendiriPage = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Solusi Praktis untuk Masalah MacBook Mati Sendiri - Maclabs.co.id",
    description:
      "Temukan cara mengatasi masalah MacBook yang sering mati sendiri di Jakarta, Tangerang, Bekasi, dan Depok. Dapatkan tips praktis untuk mendiagnosis dan memperbaiki perangkat Anda agar tetap stabil dan andal. Kunjungi Maclabs.co.id untuk informasi lebih lanjut.",
    image: "https://maclabs.co.id/images/services/no-display.webp",
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
        "@id": "https://maclabs.co.id/cara-mengatasi-mac-sering-mati-sendiri/",
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
                    Solusi Praktis untuk Masalah MacBook Mati Sendiri
                  </h1>
                  <div className="w-full flex justify-center my-3">
                    <Image
                      src="/images/services/no-display.webp"
                      width={500}
                      height={300}
                      alt="cara-mengatasi-mac-sering-mati-sendiri"
                      className="w-full"
                    />
                  </div>
                  <div className="text-lg pt-3 text-slate-800">
                    <p className="my-5">
                      Sering mengalami Mac mati sendiri? dan bagaimana cara
                      mengatasinya? Mac dan MacBook kadang mengalami masalah
                      seperti sering mati mendadak dengan sendirinya. Kadang
                      perlu beberapa waktu sebelum bisa dinyalakan lagi karena
                      masih belum mau menyala. Apakah masalah ini merupakan
                      kerusakan yang serius.Belum tentu, bisa jadi masalah Mac
                      atau MacBook sering mati mendadak ini hanya karena masalah
                      software ringan yang bisa diperbaiki dengan mudah. Kamu
                      masih bisa memperbaiki masalah ini sendiri.
                    </p>
                    <p className="my-5">
                      Namun jika sudah termasuk kerusakan hardware, mau tidak
                      mau kamu harus membawanya ke tempat reparasi untuk
                      mendapatkan perbaikan, atau bahkan penggantian komponen di
                      Mac atau MacBook kamu. Kamu bisa coba beberapa tips dan
                      tutorial berikut ini untuk mencoba memperbaiki sendiri
                      masalah Mac atau MacBook yang sering mati mendadak.
                    </p>
                    <h3 className="font-bold text-xl my-5">
                      Coba Jalankan Safe Mode
                    </h3>
                    <p className="my-5">
                      Jika Mac atau MacBook sering mati mendadak ketika sedang
                      menjalankan boot normal, coba jalankan OS X atau macOS ke
                      safe mode. Booting ke Safe Mode bisa mengisolasi semua
                      masalah software yang bisa menyebabkan Mac mati sendiri.
                    </p>
                    <div className="w-full flex justify-center my-3">
                      <Image
                        src="/images/safe-mode-600x461.webp"
                        width={300}
                        height={200}
                        alt="cara-mengatasi-mac-sering-mati-sendiri"
                        className="w-1/2"
                      />
                    </div>
                    <p className="my-5">
                      Proses booting ke Safe Mode bisa lama karena Mac OS X atau
                      macOS melakukan berbagai aktivitas seperti memverifikasi
                      disk dan lain sebagainya. Jika sudah berhasil booting dan
                      kamu ingin keluar dari Safe Mode, cukup restart Mac dan
                      jangan tekan tombol apapun.
                    </p>
                    <p className="my-5">
                      Jika Mac tidak mati sendiri ketika kamu masuk ke Safe
                      Mode, berarti memang ada kerusakan di software tertentu.
                      Namun jika masih sering mati sendiri, bisa jadi ada
                      kerusakan hardware.
                    </p>
                    <h3 className="font-bold text-xl my-5">
                      Perbaiki Disk di Recovery Mode
                    </h3>
                    <p className="my-5">
                      Cara lain yang bisa kamu coba adalah melakukan perbaikan
                      disk melalui Recovery Mode. Mungkin saja memang ada
                      kesalahan di startup disk yang menyebabkan Mac sering mati
                      sendiri.
                    </p>
                    <div className="w-full flex justify-center my-3">
                      <Image
                        src="/images/utility-600x402.webp"
                        width={300}
                        height={200}
                        alt="cara-mengatasi-mac-sering-mati-sendiri"
                        className="w-1/2"
                      />
                    </div>
                    <h3 className="font-bold text-xl my-5">
                      Jalankan Apple Diagnostics atau Hardware Test
                    </h3>
                    <p className="my-5">
                      Apple Hardware Test atau Apple Diagnostics adalah metode
                      Apple untuk mendeteksi apakah ada kerusakan hardware di
                      perangkat komputer Apple. Jika ada kerusakan, kamu bisa
                      langsung mengetahuinya
                    </p>
                    <h3 className="font-bold text-xl my-5">
                      Install Ulang Mac
                    </h3>
                    <p className="my-5">
                      Cara paling mudah untuk bisa memperbaiki masalah di Mac
                      dan MacBook adalah dengan melakukan install ulang macOS
                      dari awal. Sama seperti PC atau laptop Windows, setelah
                      install ulang pasti akan terasa lebih segar dan cepat.
                      Jika Anda tidak bisa untuk menginstall ulang perangkat
                      Mac, Anda bisa datang ke Macexpert untuk melakukan install
                      ulang
                    </p>
                    <h3 className="font-bold text-xl my-5">
                      Bawa ke{" "}
                      <Link
                        href="/"
                        className="text-red-500 uppercase font-bold"
                      >
                        Maclabs.co.id
                      </Link>
                    </h3>
                    <p className="my-5">
                      Jika semua cara di atas masih belum bisa mengatasi masalah
                      Mac atau MacBook yang sering mati mendadak, berarti memang
                      ada masalah di bagian hardware. Kamu bisa bawa ke
                      <Link
                        href="/"
                        className="text-red-500 uppercase font-bold"
                      >
                        Maclabs.co.id
                      </Link>{" "}
                      dan melakukan konsultasi secara gratis dan pengecekan
                      gratis.
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

export default CaraMengatasiMacSeringMatiSendiriPage;

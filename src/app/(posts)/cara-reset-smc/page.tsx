import Layouts from "@/components/layouts";
import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maclabs.co.id/"),
  manifest: "https://maclabs.co.id/manifest.webmanifest",
  title: "Cara Melakukan Reset SMC Pada Mac - Maclabs.co.id",
  description:
    "Untuk mereset SMC (System Management Controller) pada MacBook, langkah pertama adalah mematikan MacBook Anda sepenuhnya. Setelah itu, tahan tombol Shift, Control, Option, dan tombol daya secara bersamaan selama beberapa detik. Kemudian, lepaskan semua tombol secara bersamaan dan nyalakan kembali MacBook Anda. Tindakan ini membantu memperbaiki masalah seperti kinerja baterai yang buruk, kipas yang berjalan terus-menerus, atau masalah koneksi perangkat keras lainnya.",
  keywords:
    "service, service mac, service imac, service macbook, service mac-devices, service macbook jakarta, reset smc, reset smc macbook, smc macbook, smc mac",
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
    title: "Cara Melakukan Reset SMC Pada Mac - Maclabs.co.id",
    type: "article",
    siteName: "Maclabs Service Mac Devices",
    publishedTime: `${new Date().toISOString()}`,
    authors: "MacLabs.co.id",
    description:
      "Untuk mereset SMC (System Management Controller) pada MacBook, langkah pertama adalah mematikan MacBook Anda sepenuhnya. Setelah itu, tahan tombol Shift, Control, Option, dan tombol daya secara bersamaan selama beberapa detik. Kemudian, lepaskan semua tombol secara bersamaan dan nyalakan kembali MacBook Anda. Tindakan ini membantu memperbaiki masalah seperti kinerja baterai yang buruk, kipas yang berjalan terus-menerus, atau masalah koneksi perangkat keras lainnya.",
    url: "https://maclabs.co.id/cara-reset-smc/",
    images: [
      {
        url: "https://maclabs.co.id/images/cropped-logo-ml.webp",
        width: 1200,
        height: 630,
        alt: "Maclabs",
      },
    ],
    section: "MacBook",
    locale: "en-US",
    tags: ["MacBook", "Apple Device", "SMC", "IC SMC"],
  },
  alternates: {
    canonical: `https://maclabs.co.id/cara-reset-smc/`,
    languages: {
      "en-US": "https://maclabs.co.id/cara-reset-smc/",
    },
  },
};

const ResetSMCPage = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Cara Melakukan Reset SMC Pada Mac - Maclabs.co.id",
    description:
      "Untuk mereset SMC (System Management Controller) pada MacBook, langkah pertama adalah mematikan MacBook Anda sepenuhnya. Setelah itu, tahan tombol Shift, Control, Option, dan tombol daya secara bersamaan selama beberapa detik. Kemudian, lepaskan semua tombol secara bersamaan dan nyalakan kembali MacBook Anda. Tindakan ini membantu memperbaiki masalah seperti kinerja baterai yang buruk, kipas yang berjalan terus-menerus, atau masalah koneksi perangkat keras lainnya.",
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
        "@id": "https://maclabs.co.id/cara-reset-smc/",
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
                    Cara Reset SMC
                  </h1>
                  <div className="w-full flex justify-center my-3">
                    <Image
                      src="/images/reset-smc.webp"
                      width={500}
                      height={300}
                      alt="cara-reset-smc"
                      className="w-full"
                    />
                  </div>
                  <div className="text-lg pt-3 text-slate-800">
                    <p className="my-5">
                      Mac dan MacBook sudah dilengkapi dengan OS X atau macOS
                      yang terkenal memiliki sistem yang stabil dan jarang
                      mengalami masalah. Ada kalanya Mac dan MacBook mengalami
                      masalah sehingga harus diperbaiki   Memperbaiki Mac
                      sendiri memang masih bisa dilakukan sendiri dalam beberapa
                      kasus. Salah satunya adalah dengan melakukan reset SMC
                      Mac. Melakukan reset SMC ini bisa kamu coba untuk
                      menyelesaikan masalah Mac yang tidak bisa diselesaikan
                      dengan cara biasa.
                    </p>
                    <p className="my-5">
                      SMC? Apa itu? SMC merupakan singkatan System Management
                      Controller yang bertugas menangani beberapa fungsi tingkat
                      rendah di Mac dengan prosesor Intel. Jika merujuk pada
                      dokumen support Apple, SMC bertanggung jawab pada fungsi
                      pengelolaan panas, baterai, sensor gerakan, hingga lampu
                      indikator baterai.
                    </p>
                    <p className="my-5">
                      Apple juga menjelaskan beberapa gejala Mac yang perlu
                      direset SMC-nya. Beberapa diantaranya seperti: Mac tidak
                      responsive atau segera menyala ketika dibuka, kipas di Mac
                      berputar kencang padahal tidak menjalankan tugas berat,
                      Mac tidak merespon ketika tombol power ditekan hingga
                      random shuts down.
                    </p>
                    <h3 className="font-bold text-xl">
                      Langkah-langkah sebelum reset SMC di Macbook
                    </h3>
                    <p className="my-5">
                      Beda tipe Macbook, beda pula cara reset SMCnya. Pastikan
                      kamu mengetahui tipe komputer Mac kamu.
                    </p>
                    <h4 className="font-bold text-lg">
                      Reset SMC di Macbook dengan baterai yang dapat dilepas
                    </h4>
                    <p className="my-5">
                      Kalau kamu menggunakan Macbook dengan baterai yang dapat
                      dilepas, cara reset SMC-nya sebagai berikut:
                    </p>
                    <ul className="list-decimal list-inside">
                      <li>
                        Matikan Mac terlebih dahulu lewat logo Apple di pojok
                        kiri atas lalu Shut Down
                      </li>
                      <li>Lepas baterai Mac</li>
                      <li>Tekan dan tahan tombol power selama 5 detik</li>
                      <li>Pasang kembali baterai lalu nyalakan Mac.</li>
                    </ul>
                    <h3 className="font-bold text-xl my-5">
                      Reset SMC di Mac dengan baterai yang tidak dapat dilepas
                    </h3>
                    <p className="my-5">
                      Kebanyakan laptop Macbook saat ini memiliki baterai yang
                      tidak dapat dilepas. Seperti MacBook Pro, MacBook 12 inci
                      atau MacBook Air. Untuk itu langkah-langkah reset SMC-nya
                      sebagai berikut:
                    </p>
                    <ul className="list-decimal list-inside">
                      <li>
                        Matikan laptop lewat logo Apple di pojok kiri atas lalu
                        pilih Shut Down
                      </li>
                      <li>
                        Setelah Mac mati, tekan Shift-Control-Option pada
                        keyboard sebelah kiri lalu tekan tombol Power.
                      </li>
                      <li>
                        Tahan selama 10 detik. Untuk laptop Mac dengan Touch ID,
                        tombol Touch ID juga berperan sebagai tombol power ya.
                      </li>
                      <li>
                        Setelah 10 detik, lepas lalu nyalakan Mac dengan menekan
                        tombol Power.
                      </li>
                    </ul>
                    <h3 className="font-bold text-xl my-5">
                      CARA RESET SMC PERANGKAT MAC DESKTOP (iMac, Mac Pro, Mac
                      Mini)
                    </h3>
                    <ul className="list-decimal list-inside">
                      <li>Shut down perangkat Mac Desktop.</li>
                      <li>
                        Lepaskan kabel power yang terhubung ke Mac Desktop.
                      </li>
                      <li>Tunggu selama kurang lebih 15 detik.</li>
                      <li>
                        Sambungkan kembali ke kabel Power dan tunggu beberapa
                        saat.
                      </li>
                      <li>Nyalakan kembali perangkat Mac Desktop Anda.</li>
                      <li>
                        Biarkan perangkat Mac Desktop Anda selama beberapa menit
                        sebelum digunakan untuk menyelesaikan proses reset SMC.
                      </li>
                    </ul>
                    <p className="my-5">
                      Begitulah beberapa cara untuk mereset SMC atau System
                      Management Controller pada perangkat Mac. Jika Macbook
                      kalian mengalami masalah, kalian dapat berkonsultasi
                      secara gratis ke{" "}
                      <Link
                        href="/"
                        className="text-red-500 uppercase font-bold"
                      >
                        Maclabs.co.id
                      </Link>{" "}
                      tanpa perlu khawatir dan menjadi sehat seperti semula.
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

export default ResetSMCPage;

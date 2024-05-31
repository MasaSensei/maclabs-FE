import Layouts from "@/components/layouts";
import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maclabs.co.id/"),
  manifest: "https://maclabs.co.id/manifest.webmanifest",
  title: "Penjelasan Fitur Terbaru MacOS Ventura - Maclabs.co.id",
  description:
    "Temukan panduan lengkap tentang fitur terbaru MacOS Ventura. Pelajari semua fitur baru dan peningkatan yang ditawarkan oleh MacOS Ventura, sistem operasi terbaru dari Apple. Kunjungi Maclabs.co.id untuk informasi lebih lanjut.",
  keywords:
    "fitur macos ventura, panduan lengkap macos ventura, penjelasan fitur baru macos, sistem operasi terbaru apple, macos terbaru, pembaruan sistem operasi, maclabs.co.id",
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
    title: "Penjelasan Fitur Terbaru MacOS Ventura - Maclabs.co.id",
    type: "article",
    siteName: "Maclabs Service Mac Devices",
    publishedTime: `${new Date().toISOString()}`,
    authors: "MacLabs.co.id",
    description:
      "Temukan panduan lengkap tentang fitur terbaru MacOS Ventura. Pelajari semua fitur baru dan peningkatan yang ditawarkan oleh MacOS Ventura, sistem operasi terbaru dari Apple. Kunjungi Maclabs.co.id untuk informasi lebih lanjut.",
    url: "https://maclabs.co.id/fitur-macos-ventura/",
    images: [
      {
        url: "https://maclabs.co.id/images/Stage-Manager-MacOS-Ventura-1024x579-1-600x339.webp",
        width: 1200,
        height: 630,
        alt: "Maclabs",
      },
    ],
    section: "MacBook",
    locale: "id-ID",
    tags: ["MacBook", "ventura", "mac-os"],
  },
  alternates: {
    canonical: `https://maclabs.co.id/fitur-macos-ventura/`,
    languages: {
      "id-ID": "https://maclabs.co.id/fitur-macos-ventura/",
    },
  },
};

const FiturMacOSVenturaPage = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Penjelasan Fitur Terbaru MacOS Ventura - Maclabs.co.id",
    description:
      "Temukan panduan lengkap tentang fitur terbaru MacOS Ventura. Pelajari semua fitur baru dan peningkatan yang ditawarkan oleh MacOS Ventura, sistem operasi terbaru dari Apple. Kunjungi Maclabs.co.id untuk informasi lebih lanjut.",
    image:
      "https://maclabs.co.id/images//Stage-Manager-MacOS-Ventura-1024x579-1-600x339.webp",
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
        "@id": "https://maclabs.co.id/fitur-macos-ventura/",
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
                    Penjelasan Fitur Terbaru MacOS Ventura
                  </h1>
                  <div className="w-full flex justify-center my-3">
                    <Image
                      src="/images/Stage-Manager-MacOS-Ventura-1024x579-1-600x339.webp"
                      width={500}
                      height={300}
                      alt="fitur-macos-ventura"
                      className="w-full"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="/images/Stage-Manager-MacOS-Ventura-1024x579-1-600x339.webp"
                    />
                  </div>
                  <div className="text-lg pt-3 text-slate-800">
                    <p className="my-5">
                      Pada ajang Worldwide Developers Conference (WWDC) 2022
                      yang diselenggalarakan di Cupertino, California, Amerika
                      Serikat, Apple secara resmi mengumumkan sistem operasi
                      komputer MacOS terbaru yang ke 13 bernama MacOS Ventura.
                      Berbagai fitur baru yang hadir ini memang memperkuat
                      ekosistem Apple. Baik untuk aplikasi bawaan maupun
                      penggunaannya dengan perangkat Apple lain. Nah
                      Maclabs.co.id akan memberikan fitur baru apa saja yang
                      pada MacOS Ventura ini, yuk langsung kita lihat!
                    </p>
                    <h3 className="font-bold text-xl my-5">Stage Manager</h3>
                    <p className="my-5">
                      MacOS memang sudah memiliki Mission Control untuk
                      multitasking dan berpindah antar aplikasi. Namun Stage
                      Manager membawa multitasking lebih mudah lagi. Ketika
                      fitur ini berjalan, semua aplikasi akan bergeser ke
                      samping, meninggalkan aplikasi aktif duduk di layar, atau
                      di panggung. Pengguna bisa mengatur aplikasi dalam
                      kelompok-kelompok dan memanggilnya bergantian untuk
                      tampil. Cukup dengan klik jendela kecil aplikasi di
                      samping.
                    </p>
                    <h3 className="font-bold text-xl my-5">
                      Continuity Camera
                    </h3>
                    <p className="my-5">
                      Salah satu fitur terbaru MacOS Ventura yang cukup
                      diunggulkan adalah Continuity Camera. Fitur tersebut
                      memungkinkan pengguna memakai kamera iPhone buat jadi
                      webcam Macbook. Untuk mengganti input webcam Macbook ke
                      kamera iPhone, pengguna nantinya tak perlu memakai
                      sambungan kabel. Kedua perangkat tersebut dapat
                      dihubungkan secara nirkabel. Hebatnya lagi, pengguna juga
                      bisa memakai fitur kamera iPhone — seperti Center Stage,
                      Portrait mode, dan Studio Light — langsung dari komputer
                      Mac. DItambah lagi, kamera ultra-wide di iPhone bisa
                      memberikan pandangan ke bawah (misalnya ke keyboard)
                      secara khusus lewat mode Desk View.
                    </p>
                    <h3 className="font-bold text-xl my-5">
                      Share Tab Group Safari
                    </h3>
                    <p className="my-5">
                      Shared Tab Group memungkinkan pengguna membagi sebuah tab
                      di Safari dengan keluarga atau teman. Jadi pengguna bisa
                      melihat website bersama, termasuk juga bekerja secara
                      kolaborasi. Selain itu, pengguna juga bisa berbagi
                      kumpulan website yang sudah di Bookmark atau Favorite, dan
                      orang lain bisa menambahkan website ke sana. Fitur berbagi
                      Tab ini juga bisa kamu sebar melalui aplikasi Pesan dan
                      bisa dilakukan sambil melakukan FaceTime.
                    </p>
                    <h3 className="font-bold text-xl my-5">Spotlight</h3>
                    <p className="my-5">
                      Spotlight adalah fitur pencarian pada Apple yang poweful.
                      Namun kini pencarian itu lebih hebat lagi. Pengguna bisa
                      mendapatkan hasil pencarian sekaligus tampilannya langsung
                      di Spotlight. Seperti mencari foto, mencari lagu dan
                      artis, mencari film, atau tim olahraga. Bahkan, kini
                      pengguna juga bisa melakukan beberapa tindakan langsung
                      dari Spotlight. Misalnya menyetel alarm, membuat dokumen
                      baru, atau mengeksekusi shortcut.
                    </p>
                    <h3 className="font-bold text-xl my-5">
                      Mengirim Email Terjadwal
                    </h3>
                    <p className="my-5">
                      Aplikasi e-mail bawaan Apple di Macbook juga mendapat
                      pembaruan fitur pada MacOS Ventura. Salah satu fitur
                      terbaru yang diusung di aplikasi e-mail Apple adalah
                      pengiriman terjadwal, layaknya Gmail. Dengan fitur
                      tersebut, pengguna dapat mengatur jadwal pengiriman e-mail
                      terlebih dahulu, sekaligus membatalkannya bila nanti
                      terdapat kesalahan yang perlu diperbaiki. Selain pada
                      Mail, Pesan pun mendapatkan fitur undo.
                    </p>
                    <h3 className="font-bold text-xl my-5">Passkey</h3>
                    <p className="my-5">
                      Fitur Passkeys pada MacOS Ventura memudahkan pengguna
                      untuk menggunakan Face ID atau Touch ID saat hendak login
                      atau mengautentikasi akun pada sebuah situs web, alih-alih
                      menggunakan password yang mungkin lebih mudah dibobol.
                    </p>
                    <h3 className="font-bold text-xl my-5">Live Text</h3>
                    <p className="my-5">
                      Fitur Live Text yang diperbarui memungkinkan pengguna
                      untuk menyalin teks pada sebuah video yang dijeda. Tidak
                      hanya menyalin, tapi teks atau data yang terdeteksi di
                      video itu juga dapat untuk ditindaklanjuti dalam beberapa
                      perintah, misalnya penerjemahan bahasa.
                    </p>
                    <p className="my-5">
                      Menarik bukan? Itulah informasi seputar tujuh fitur
                      terbaru MacOS Ventura. Dengan MacOS Venturan dan beberapa
                      fitur terbarunya telah diumumkan Apple, tapi bukan berarti
                      pengguna bisa langsung mendapatkan pembaruan sistem
                      operasi tersebut untuk saat ini. Apple bakal melakukan
                      serangkaian uji coba dulu yang bekerja sama dengan para
                      pengembang. Terimakasih
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

export default FiturMacOSVenturaPage;

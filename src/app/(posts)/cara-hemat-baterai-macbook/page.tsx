import Layouts from "@/components/layouts";
import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maclabs.co.id/"),
  manifest: "https://maclabs.co.id/manifest.webmanifest",
  title: "Cara Hemat Baterai Macbook - Maclabs.co.id",
  description:
    "daya baterai pada Macbook sering kali cepat habis ketika digunakan. Anda juga harus tahu berapa lama waktu normal daya tahan baterai Mac.",
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
    title: "Cara Hemat Baterai Macbook - Maclabs.co.id",
    type: "article",
    publishedTime: `${new Date().toISOString()}`,
    siteName: "Maclabs Service Mac Devices",
    authors: "MacLabs.co.id",
    description:
      "Untuk mereset SMC (System Management Controller) pada MacBook, langkah pertama adalah mematikan MacBook Anda sepenuhnya. Setelah itu, tahan tombol Shift, Control, Option, dan tombol daya secara bersamaan selama beberapa detik. Kemudian, lepaskan semua tombol secara bersamaan dan nyalakan kembali MacBook Anda. Tindakan ini membantu memperbaiki masalah seperti kinerja baterai yang buruk, kipas yang berjalan terus-menerus, atau masalah koneksi perangkat keras lainnya.",
    url: "https://maclabs.co.id/cara-hemat-baterai-macbook/",
    images: [
      {
        url: "https://maclabs.co.id/images/cropped-logo-ml.webp",
        width: 1200,
        height: 630,
        alt: "Maclabs",
      },
    ],
    tags: ["MacBook", "Apple Device", "Battery", "Charger"],
    section: "Blog",
    locale: "en-US",
  },
  alternates: {
    canonical: `https://maclabs.co.id/cara-hemat-baterai-macbook/`,
    languages: {
      "en-US": "https://maclabs.co.id/cara-hemat-baterai-macbook/",
    },
  },
};

const CaraHematBateraiMacbookPage = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Cara Hemat Baterai Macbook - Maclabs.co.id",
    description:
      "daya baterai pada Macbook sering kali cepat habis ketika digunakan. Anda juga harus tahu berapa lama waktu normal daya tahan baterai Mac.",
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
        "@id": "https://maclabs.co.id/cara-hemat-baterai-macbook/",
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
                    Cara Hemat Daya Baterai Macbook
                  </h1>
                  <div className="w-full flex justify-center my-3">
                    <Image
                      src="/images/services/ganti-baterai.webp"
                      width={500}
                      height={300}
                      alt="cara-hemat-baterai-macbook"
                      className="w-full"
                    />
                  </div>
                  <div className="text-lg pt-3 text-slate-800">
                    <p className="my-5">
                      Terkadang mungkin Anda merasa perlu untuk{" "}
                      <b>meningkatkan daya baterai Macbook</b>. Hal ini terutama
                      jika memang daya baterai pada Macbook sering kali cepat
                      habis ketika digunakan. Hal ini bisa mengganggu. Namun,
                      Anda juga harus tahu berapa lama waktu normal daya tahan
                      baterai berdasarkan versi Mac.
                    </p>
                    <p className="my-5">
                      Misalnya saja Macboook Air yang memiliki ketahanan sekitar
                      12-13 jam. Kemudian Macbook Pro 15 Inchi yang memiliki
                      ketahanan baterai selama 10 jam. Di lain sisi, Macbook Pro
                      dengan ukuran 16 Inchi memiliki daya tahan baterai hingga
                      11 jam lamanya. Jadi, kebanyakan memang berbeda daya
                      tahannya.
                    </p>
                    <p className="my-5">
                      Jika memang daya baterai Macbook Anda terasa tidak normal,
                      maka <b>meningkatkan daya baterai Macbook</b> adalah hal
                      wajib. Apakah Anda harus membawanya ke orang yang ahli?
                      Sebenarnya tidak harus. Ketahui dulu beberapa tipsnya di
                      bawah ini. Jika Anda bisa melakukannya sendiri, maka akan
                      lebih baik.
                    </p>
                    <h3 className="font-bold text-xl">
                      Cari Tahu Apa yang paling Banyak Menghabiskan Baterai
                    </h3>
                    <p className="my-5">
                      Hal pertama yang harus dilakukan untuk{" "}
                      <b>meningkatkan daya baterai Macbook</b> adalah berhenti
                      menggunakan aplikasi apa pun yang haus daya. Apple
                      memperkenalkan fitur praktis di OS X 10.9 Mavericks. Fitur
                      ini memilik kemampuan untuk melihat aplikasi apa yang
                      menggunakan baterai Anda. Tentu ini akan sangat berguna
                      untuk baterai.
                    </p>
                    <p className="my-5">
                      Selama menjalankan Mavericks, atau versi MacOS yang lebih
                      baru, Anda dapat melihat daftar aplikasi yang menggunakan
                      energi signifikan dengan mengikuti langkah-langkah
                      berikut. Klik ikon baterai di bilah menu (di sebelah jam).
                      Lihat di bagian bawah untuk melihat penyebabnya atau
                      aplikasi yang menghabiskan baterai.
                    </p>
                    <p className="my-5">
                      Jika tidak ada aplikasi yang menggunakan energi
                      signifikan, Anda akan melihat pesan ‘Tidak Ada Aplikasi
                      Menggunakan Energi Signifikan’. Itu tidak selalu berarti
                      bahwa ada sesuatu yang salah dengan aplikasi. Hanya saja
                      aplikasi hanya menggunakan sedikit daya baterai. Jika
                      ingin, Anda bisa me-restart aplikasi guna memperbaiki
                      masalah.
                    </p>
                    <h4 className="font-bold text-lg">
                      Menggunakan Mode Gelap
                    </h4>
                    <p className="my-5">
                      Cara <b>meningkatkan daya baterai Macbook</b> selanjutnya
                      adalah dengan menggunakan dark mode atau model gelap.
                      Aktifkan Mode Gelap karena membutuhkan lebih sedikit
                      baterai untuk menampilkan piksel hitam daripada piksel
                      putih. Biasanya, fitur ini tersedia untuk Macbook Mojave
                      dan Catalina. Bagaimana jika itu bukan versi Anda?
                    </p>
                    <p className="my-5">
                      Jika Anda tidak memiliki Mojave (yang memperkenalkan Mode
                      Gelap) atau Catalina (yang meningkatkannya), ada cara
                      lain. Anda bisa Membalikkan Warna untuk menghemat masa
                      pakai baterai. Untuk mengaktifkan Mode Gelap di Mojave
                      atau Catalina ikuti langkah-langkah ini. Buka System
                      Preferences, Klik Umum, dan pilih menu dark/Gelap.
                    </p>
                    <p className="my-5">
                      Untuk Membalikkan Warna, ikuti langkah-langkah ini. Buka
                      System Preferences. Lalu klik pada Aksesibilitas. Klik
                      Tampilan dan centang kotak di sebelah Balikkan warna
                      (invert the colors). Jika Anda masih belum terlalu paham,
                      sebaiknya cari banyak referensi terlebih dahulu tentang
                      mode gelap untuk Macbook.
                    </p>
                    <h4 className="font-bold text-xl my-5">
                      Lakukan Pengecekan Apakah Macbook Anda Termasuk yang
                      Ditarik dari Pasar
                    </h4>
                    <p className="my-5">
                      Periksa apakah MacBook Anda sedang ditarik. Langkah ini
                      juga penting untuk{" "}
                      <b>meningkatkan daya baterai Macbook.</b>
                      Mungkin ada masalah mendasar dengan baterai Anda.
                      Misalnya, Apple mengumumkan penarikan kembali model
                      MacBook Pro yang dibeli antara September 2015 dan Februari
                      2017 (Retina, 15-inci, Pertengahan 2015).
                    </p>
                    <p className="my-5">
                      Hal ini dilakukan karena masalah di mana baterai bisa
                      menjadi terlalu panas pada model-model itu. Dalam siaran
                      pers perusahaan menyatakan beberapa hal. Salah satunya
                      adalah karena keamanan pelanggan adalah prioritas utama,
                      Apple meminta pelanggan untuk berhenti menggunakan unit
                      MacBook Pro 15 inci yang terpengaruh.
                    </p>
                    <p className="my-5">
                      Untuk mengetahui apakah laptop Anda terpengaruh, kunjungi
                      situs web Apple. Cari tahu apakah macbook Anda memenuhi
                      syarat penggantian baterai. Masukkan nomor seri komputer
                      Anda pada halaman program. Jika iya, maka Anda bisa
                      menukar dengan gratis. Cara meningkatkan daya baterai
                      Macbook ini secara tak langsung akan membantu.
                    </p>
                    <p className="my-5">
                      Begitulah beberapa cara untuk menghemat baterai pada
                      perangkat Macbook. Jika Macbook kalian mengalami masalah,
                      kalian dapat berkonsultasi secara gratis ke{" "}
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

export default CaraHematBateraiMacbookPage;

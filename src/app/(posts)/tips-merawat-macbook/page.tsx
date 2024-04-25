import Layouts from "@/components/layouts";
import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maclabs.co.id/"),
  manifest: "https://maclabs.co.id/manifest.webmanifest",
  title: "Tips Merawat MacBook - Maclabs.co.id",
  description:
    "Kali ini Maclabs.id akan memberikan tips untuk merawat MacBook menjadi lebih awet dan tidak cepat rusak dengan beberapa cara berikut",
  keywords:
    "service, service mac, service imac, service macbook, service mac-devices, service macbook jakarta, cara merawat macbook, tips merawat macbook, tips merawat mac",
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
    title: "Tips Merawat MacBook - Maclabs.co.id",
    type: "article",
    publishedTime: `${new Date().toISOString()}`,
    authors: ["https://maclabs.co.id/"],
    description:
      "Kali ini Maclabs.id akan memberikan tips untuk merawat MacBook menjadi lebih awet dan tidak cepat rusak dengan beberapa cara berikut",
    url: "https://maclabs.co.id/tips-merawat-macbook/",
    images: [
      {
        url: "https://maclabs.co.id/images/cropped-logo-ml.webp",
        width: 1200,
        height: 630,
        alt: "Maclabs",
      },
    ],
  },
  alternates: {
    canonical: `https://maclabs.co.id/tips-merawat-macbook/`,
    languages: {
      "en-US": "https://maclabs.co.id/tips-merawat-macbook/",
    },
  },
};

const TipsMerawatMacbookPage = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Tips Merawat MacBook - Maclabs.co.id",
    description:
      "Kali ini Maclabs.id akan memberikan tips untuk merawat MacBook menjadi lebih awet dan tidak cepat rusak dengan beberapa cara berikut",
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
        "@id": "https://maclabs.co.id/tips-merawat-macbook/",
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
                    Tips Merawat MacBook
                  </h1>
                  <div className="w-full flex justify-center my-3">
                    <Image
                      src="/images/blog-post-img-03-3-1.webp"
                      width={500}
                      height={300}
                      alt="tips-merawat-macbook"
                      className="w-full"
                    />
                  </div>
                  <div className="text-lg pt-3 text-slate-800">
                    <p className="my-5">
                      Kalau membahas tentang Laptop, pastilah MacBook menjadi
                      sebuah pilihan terutama ketika digunakan untuk pekerjaan
                      berat sehari-hari seperti Photoshop, editing video atau
                      menjadi programming. Macbook memang dikatakan punya banyak
                      nilai lebih daripada perangkat serupa dengan sistem
                      operasi Windows. Dengan adanya nilai kelebihan itu, harga
                      MacBook menjadi lebih tinggi sehingga para pengguna harus
                      lebih memperhatikan dan merawat MacBooknya. Oleh karena
                      itu, berikut Maclabs.id akan memberikan tips untuk merawat
                      MacBook menjadi lebih awet dan tidak cepat rusak.
                    </p>
                    <h3 className="font-bold text-xl">
                      Bersihkan MacBook Secara Rutin
                    </h3>
                    <p className="my-5">
                      Layaknya manusia yang harus mandi secara rutin, MacBook
                      juga harus dibersihkan secara rutin karena komponen yang
                      kotor dapat mempengaruhi kinerja MacBook. Bagian yang
                      perlu dibersihkan salah satunya adalah bagian luar yang
                      mudah dibersihkan menggunakan kuas, kain fiber atau
                      handblower untuk menghilangkan kotoroan dan debu yang
                      berada di sekitar keyboard, layar ataun casing MacBook.
                    </p>
                    <p className="my-5">
                      Selain bagian luar yang harus dibersihkan, bagian dalam
                      juga perlu dilakukan secara rutin minimal 6 bulan sekali
                      karena jika ada banyak kotoran pada komponen logic bisa
                      menyebabkan MacBook menjadi overheating atau bahkan lemot.
                      Takut untuk membuka MacBook? Tenang saja,{" "}
                      <Link
                        href="/"
                        className="text-red-500 uppercase font-bold"
                      >
                        Maclabs.co.id
                      </Link>{" "}
                      hadir dengan menyediakan jasa untuk cleaning dan juga
                      mengganti thermal paste pada MacBook.
                    </p>
                    <h4 className="font-bold text-lg">
                      Pastikan Penyimpanan Tidak Penuh dan Update MacOS
                    </h4>
                    <p className="my-5">
                      MacBook memang memiliki penyimpanan yang lebih besar
                      tetapi jangan lupa untuk secara rutin memperhatikan data
                      penyimpanan pada MacBook karena dengan semakin banyaknya
                      penyimpanan akan mempengaruhi kinerja MacBook. Untuk
                      mengecek penyimpanan seperti pada gambar, Anda dapat meng
                      klik icon Apple pada pojok kiri atas dan pilih About This
                      Mac. Selain itu, pengguna harus mengecek aplikasi yang
                      berjalan di layar belakang yang biasanya terlupakan oleh
                      beberapa pengguna.
                    </p>
                    <p className="my-5">
                      Update dari Operasi Sistem juga bisa berpengaruh pada
                      kinerja MacBook Anda karena kemungkinan ada beberapa
                      aplikasi yang meminta Operasi Sistem yang lebih tinggi.
                      Jika Anda ingin mengupgrade MacOs MacBook, Anda dapat
                      menyerahkannya kepada{" "}
                      <Link
                        href="/"
                        className="text-red-500 uppercase font-bold"
                      >
                        Maclabs.co.id
                      </Link>{" "}
                      karena kami juga menyediakan jasa update MacOS dan juga
                      penginstallan aplikasi yang Anda inginkan tanpa
                      menghilangkan data data pribadi pengguna.
                    </p>
                    <h3 className="font-bold text-xl my-5">
                      Pastikan Kondisi Baterai
                    </h3>
                    <p className="my-5">
                      Baterai merupakan sumber daya dari sebuah perangkat
                      elektronik agar tetap dapat menyala dengan baik dan dapat
                      digunakan sesuai performa seharusnya. Pastikan status
                      Baterai Anda masih baik baik saja dan belum kembung.
                      Baterai yang kembung biasanya dapat mengganggu penggunaan
                      keyboard dan trackpad. Agar Baterai tidak mengalami
                      masalah dapat dilakukan dengan cara berikut:
                    </p>
                    <ul className="list-decimal list-inside">
                      <li>
                        Jika baterai sudah penuh lepaskan charge dari MacBook.
                        Jangan biarkan charger terus mencolok ke MacBook.
                      </li>
                      <li>
                        Pastikan mematikan MacBook setelah tidak digunakan.
                      </li>
                      <li>Jaga MacBook pada suhu yang tepat.</li>
                      <li>
                        Rutin cek aplikasi yang bekerja di layar belakang agar
                        baterai tidak boros.
                      </li>
                    </ul>
                    <p className="my-5">
                      Jika Baterai MacBook Anda sudah rusak dan harus diganti
                      atau bahkan jika Magsafe Anda rusak, jangan khawatir
                      karena{" "}
                      <Link
                        href="/"
                        className="text-red-500 uppercase font-bold"
                      >
                        Maclabs.co.id
                      </Link>{" "}
                      dapat mengganti Baterai MacBook Anda dan menyediakan
                      Magsafe sesuai MacBook yang dibutuhkan.
                    </p>
                    <h3 className="font-bold text-xl my-5">
                      Jauhkan Dari Makanan dan Minuman
                    </h3>
                    <p className="my-5">
                      Musuh dari segala perangkat elektronik adalah air atau
                      cairan tidak terkecuali Macbook. Cairan yang masuk ke
                      MacBook dapat menyebabkan berbagai masalah seperti
                      komponen korosi, trackpad tidak berfungsi, ghost touch,
                      atau bahkan mati total. Ketika MacBook terkena air atau
                      cairan, jangan langsung mencolok charge ke MacBook Anda
                      karena itu dapat memperparah kerusakan. Usahakan untuk
                      langsung mengeringkan dengan lap fiber pada bagian yang
                      terkena cairan dan usahakan agar langsung mengecek
                      komponen Mac dengan membawa ke tempat service seperti{" "}
                      <Link
                        href="/"
                        className="text-red-500 uppercase font-bold"
                      >
                        Maclabs.co.id
                      </Link>{" "}
                      karena kami menyediakan layanan gratis untuk pengecekan
                      kerusakan MacBook Anda.
                    </p>
                    <h3 className="font-bold text-xl my-5">
                      Memakai Aksesoris Tambahan
                    </h3>
                    <p className="my-5">
                      Anda takut dengan beberapa kendala yang terjadi? Aksesoris
                      bisa menjadi penolong pertama pada MacBook Anda ketika
                      terjadi benturan, terkena air dan kejadian tidak terduga
                      lainnya. Biasanya pemasangan aksesoris pada MacBook
                      dipasang pada bagian casing agar terhindar dari kejadian
                      diatas dan Anda pun bisa lebih berhati hati dalam memakai
                      MacBook Anda dimanapun.
                    </p>
                    <p className="my-5">
                      Tetapi aksesoris tidak sepenuhnya melindungi kerusakan
                      ketika kendala yang terjadi dikarenakan penggunaan yang
                      buruk seperti tetap mencolok charge ketika sudah penuh dan
                      tidak memperhatikan kinerja MacBook. Oleh karena itu jika
                      Anda mengalami segala kerusakan yang terjadi walaupun
                      sudah mencoba untuk merawat MacBook, Anda dapat
                      menyerahkannya ke{" "}
                      <Link
                        href="/"
                        className="text-red-500 uppercase font-bold"
                      >
                        Maclabs.co.id
                      </Link>{" "}
                      yang menyediakan layanan pick up daerah Jadetabek dan
                      pelayanan pengecekan tanpa biaya untuk mengetahui
                      kerusakan MacBook Anda.
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

export default TipsMerawatMacbookPage;

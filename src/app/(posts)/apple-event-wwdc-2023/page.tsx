import Layouts from "@/components/layouts";
import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maclabs.co.id/"),
  manifest: "https://maclabs.co.id/manifest.webmanifest",
  title: "Apple Event WWDC 2023 - Maclabs.co.id",
  description:
    "Ikuti acara Apple WWDC 2023 dengan Maclabs.co.id. Dapatkan berita terbaru, pengumuman, dan inovasi dari acara tahunan pengembang Apple di Jakarta, Depok, Tangerang, dan Bekasi.",
  keywords:
    "Apple Event, WWDC 2023, berita Apple, pengumuman WWDC, inovasi Apple, pengembang Apple, WWDC Jakarta, WWDC Depok, WWDC Tangerang, WWDC Bekasi, maclabs.co.id",
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
    title: "Apple Event WWDC 2023 - Maclabs.co.id",
    type: "article",
    publishedTime: `${new Date().toISOString()}`,
    authors: "MacLabs.co.id",
    siteName: "Maclabs Service Mac Devices",
    description:
      "Ikuti acara Apple WWDC 2023 dengan Maclabs.co.id. Dapatkan berita terbaru, pengumuman, dan inovasi dari acara tahunan pengembang Apple di Jakarta, Depok, Tangerang, dan Bekasi.",
    url: "https://maclabs.co.id/apple-event-wwdc-2023/",
    section: "Blog",
    locale: "id-ID",
    tags: ["apple device", "wwdc", "iphone 15 pro", "headset ar vr"],
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
    canonical: `https://maclabs.co.id/apple-event-wwdc-2023/`,
    languages: {
      "id-ID": "https://maclabs.co.id/apple-event-wwdc-2023/",
    },
  },
};

const AppleEvent2023Page = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Apple Event WWDC 2023 - Maclabs.co.id",
    description:
      "Ikuti acara Apple WWDC 2023 dengan Maclabs.co.id. Dapatkan berita terbaru, pengumuman, dan inovasi dari acara tahunan pengembang Apple di Jakarta, Depok, Tangerang, dan Bekasi.",
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
        "@id": "https://maclabs.co.id/apple-event-wwdc-2023/",
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
                    Apple Event WWDC 2023
                  </h1>
                  <div className="w-full flex justify-center my-3">
                    <Image
                      src="/images/reset-smc.webp"
                      width={500}
                      height={300}
                      alt="cara-reset-smc"
                      className="w-full"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="/images/reset-smc.webp"
                    />
                  </div>
                  <div className="text-lg pt-3 text-slate-800">
                    <p className="my-5">
                      Apple Event WWDC 2023 akan kembali diselenggarakan pada
                      Bulan Juni mendatang. WWDC adalah kesempatan bagi Apple
                      untuk mengungkap iterasi berikutnya dari perangkat
                      lunaknya untuk iPhone, iPad, Mac, Apple Watch, dan
                      seterusnya. Diharapkan Event WWDC 2023 kali ini dapat
                      berlangsung secara tatap muka yang berbeda dari WWDC tahun
                      tahun sebelumnya yang dilakukan secara digital dikarenakan
                      Pandemi Covid-19. Banyak rumor produk terbaru yang
                      diharapkan muncul pada Event WWDC 2023 ini seperti iPhone
                      15 dan Headset AR/VR. Selain dua produk tersebut, ada
                      beberapa produk lainnya yang dirumorkan akan rilis pada
                      tahun ini. Berikut rumor produk yang akan muncul pada WWDC
                      2023
                    </p>
                    <h3 className="font-bold text-xl">iPhone 15</h3>
                    <p className="my-5">
                      Setelah sebelumnya hadir iPhone 14 pada Event WWDC 2022,
                      iPhone 15 akan hadir pada event tahun ini. iPhone 15 akan
                      hadir dalam beberapa versi seperti iPhone 14 yaitu iPhone
                      15 Pro, iPhone 15 Pro Max bahkan iPhone 15 Ultra. Tentunya
                      iPhone 15 ini akan hadir dengan spesifikasi dan design
                      yang lebih memukau seperti memakai Chipset A17 Bionic dan
                      memakai lensa kamera teleskop.
                    </p>
                    <h3 className="font-bold text-xl">
                      Macbook Air M2 15 inch
                    </h3>
                    <p className="my-5">
                      Kemungkinan, Apple akan mengeluarkan Macbook Air dengan
                      Chipset M2 dengan ukuran 15inch yang tentunya menjadikan
                      Macbook ini lebih baik dan lebih cocok digunakan untuk
                      bekerja dari versi sebelumnya. Macbook Air ini akan
                      menjadi laptop yang paling tipis dan dengan layar paling
                      besar yang akan di rilis
                    </p>
                    <h3 className="font-bold text-xl">Apple Watch 9 Series</h3>
                    <p className="my-5">
                      Setelah sebelumnya merilis Apple Watch 8 Series dan Apple
                      Watch Ultra pada WWDC 2022, kemungkinan Apple juga akan
                      merilis series terbaru dari Apple Watch yaitu Apple Watch
                      Series 9. Kabarnya Apple Wactch Series 9 ini akan hadir
                      dengan membawakan WatchOS 10 dan dengan chipset terbaru
                      yaitu S9 SiP
                    </p>
                    <h4 className="font-bold text-lg">Apple VR Headset</h4>
                    <p className="my-5">
                      Headset AR/VR Apple dilaporkan akan menawarkan pengalaman
                      realitas campuran, konferensi video, video 4K, desain
                      ringan dengan material premium, dan banyak lagi. Menurut
                      rumor dan laporan, ini akan mencakup penekanan besar pada
                      konferensi video dan pendidikan dan integrasi untuk App
                      Store iOS Apple, yang berarti Anda akan dapat menjalankan
                      semua aplikasi dan game iPhone terbaik Apple sebagai
                      jendela 2D. Game dianggap kurang fokus, yang tampaknya
                      aneh mengingat hal ini tampaknya menjadi kasus penggunaan
                      favorit bagi pengguna headset VR.
                    </p>
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

export default AppleEvent2023Page;

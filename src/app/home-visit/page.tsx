import Cores from "@/components/core";
import Layouts from "@/components/layouts";
import HomeVisitForm from "./formHomeVisit";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maclabs.co.id/"),
  title:
    "Service panggilan: Service MacBook, Mac Mini, iMac, dan Mac Pro di Rumah Anda - Maclabs.co.id",
  description:
    "Dapatkan layanan service panggilan untuk service MacBook, Mac Mini, iMac, dan Mac Pro di Jakarta, Depok, Tangerang, dan Bekasi. Kami datang ke rumah Anda untuk perbaikan dan perawatan perangkat Apple. Kunjungi Maclabs.co.id untuk informasi lebih lanjut.",
  keywords:
    "service panggilan service macbook, layanan service panggilan mac, service mac mini, service imac, service mac pro, perbaikan mac di rumah, perawatan mac di rumah, layanan mac apple, jakarta, depok, tangerang, bekasi, maclabs.co.id",
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
    title:
      "Service Panggilan: Service MacBook, Mac Mini, iMac, dan Mac Pro di Rumah Anda - Maclabs.co.id",
    description:
      "Dapatkan layanan service panggilan untuk service MacBook, Mac Mini, iMac, dan Mac Pro di Jakarta, Depok, Tangerang, dan Bekasi. Kami datang ke rumah Anda untuk perbaikan dan perawatan perangkat Apple. Kunjungi Maclabs.co.id untuk informasi lebih lanjut.",
    url: "https://maclabs.co.id/home-visit/",
    type: "website",
    images: [
      {
        url: "https://maclabs.co.id/images/cropped-logo-ml.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id-ID",
    siteName: "Maclabs Service Mac Devices",
  },
  alternates: {
    canonical: `https://maclabs.co.id/home-visit/`,
    languages: {
      "id-ID": "https://maclabs.co.id/home-visit/",
    },
  },
};

const HomevisitPage = () => {
  return (
    <>
      <Layouts.Section variant={"default"}>
        <Cores.Title
          title="Benefits Untuk Anda"
          content="Apa keuntungan yang Anda dapat jika melakukan service perangkat Apple anda di Maclabs.id?"
        />
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-2">
          <div className="relative min-w-full lg:min-w-72 lg:mt-14">
            <div className="flex lg:text-right lg:flex-row-reverse mb-2">
              <div>
                <div className="bg-red-500 md:mr-0 bg-red-600 rounded-full text-white w-14 h-14 my-0 lg:mx-4 mr-4 text-xl text-center flex items-center justify-center">
                  01
                </div>
              </div>
              <div className="min-h-48 pt-4 text-xl">
                <h5 className="font-bold text-2xl capitalize mb-0 text-slate-800">
                  Berkualitas
                </h5>
                <p className="mt-2.5 mb-0 text-sm">
                  Kami mengutamakan kualitas. Setiap perangkat yang sudah
                  selesai, selalu dilakukan running test dan Quality Control.
                </p>
              </div>
            </div>
            <div className="flex lg:text-right lg:flex-row-reverse mb-2">
              <div>
                <div className="bg-red-500 md:mr-0 bg-red-600 rounded-full text-white w-14 h-14 my-0 lg:mx-4 mr-4 text-xl text-center flex items-center justify-center">
                  02
                </div>
              </div>
              <div className="min-h-48 pt-4 text-xl">
                <h5 className="font-bold text-2xl capitalize mb-0 text-slate-800">
                  Tepat Waktu
                </h5>
                <p className="mt-2.5 mb-0 text-sm">
                  Kami sangat menghargai waktu Anda. Untuk penggantian part bisa
                  di tunggu, kecuali perbaikan Logic Board estimasi 2-3 hari.
                </p>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:inline-block min-w-72 min-w-full w-full lg:mt-14">
            <YouTubeEmbed videoid="9LbWheup1Q0" />
          </div>
          <div className="relative min-w-full lg:min-w-72 lg:mt-14">
            <div className="flex lg:text-left lg:flex-row mb-2">
              <div>
                <div className="bg-red-500 md:ml-0 bg-red-600 rounded-full text-white w-14 h-14 my-0 lg:mx-4 mr-4 text-xl text-center flex items-center justify-center">
                  03
                </div>
              </div>
              <div className="min-h-48 pt-4 text-xl">
                <h5 className="font-bold text-2xl capitalize mb-0 text-slate-800">
                  Harga Kompetitif & Transparan
                </h5>
                <p className="mt-2.5 mb-0 text-sm">
                  Harga yang kami tawarkan sangat beralasan. Anda bisa mengecek
                  terlebih dahulu harga sparepart yang akan diganti sebelum
                  memutuskan untuk melakukan penggantian.
                </p>
              </div>
            </div>
            <div className="flex lg:text-left lg:flex-row mb-2">
              <div>
                <div className="bg-red-500 md:ml-0 bg-red-600 rounded-full text-white w-14 h-14 my-0 lg:mx-4 mr-4 text-xl text-center flex items-center justify-center">
                  04
                </div>
              </div>
              <div className="min-h-48 pt-4 text-xl">
                <h5 className="font-bold text-2xl capitalize mb-0 text-slate-800">
                  Bergaransi
                </h5>
                <p className="mt-2.5 mb-0 text-sm">
                  Layanan garansi selama 90 Hari sampai dengan 1 Tahun. Anda
                  dapat mengklaim kembali device tersebut tanpa adanya biaya
                  tambahan dalam masa garansi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layouts.Section>
      <Layouts.Section variant={"secondary"}>
        <Cores.Title
          title={"Service Panggilan"}
          content="Isi Form Di Bawah Ini Untuk Reservasi Service Panggil Maclabs"
        />
        <div className="bg-white p-5 rounded-lg">
          <div className="container">
            <HomeVisitForm />
          </div>
        </div>
      </Layouts.Section>
    </>
  );
};

export default HomevisitPage;

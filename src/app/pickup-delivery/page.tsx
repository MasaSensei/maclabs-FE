import Cores from "@/components/core";
import Layouts from "@/components/layouts";
import PickupDeliveryForm from "./formPickupDelivery";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pickup Delivery Mac-Devices - Maclabs.co.id",
  description:
    "Service All Mac Devices Jakarta seperti Macbook, iMac, Mac Mini dan Mac Pro. Menerima pergantian Part yang bergaransi dan berkualitas",
  keywords: "Pickup Delivery, Pickup & Delivery, MacLabs Pickup & Delivery",
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
};

const PickupDeliveryPage = () => {
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
          title={"Pickup & Delivery"}
          content="Isi Form Di Bawah Ini Untuk Reservasi Pickup & Delivery"
        />
        <div className="bg-white p-5 rounded-lg">
          <div className="container">
            <PickupDeliveryForm />
          </div>
        </div>
      </Layouts.Section>
    </>
  );
};

export default PickupDeliveryPage;

import Cores from "@/components/core";
import Layouts from "@/components/layouts";
import Link from "next/link";
import Steps from "@/data/steps";
import Devices from "@/data/device_list.json";
import { YouTubeEmbed } from "@next/third-parties/google";
import { FaCheckCircle } from "react-icons/fa";
import { RiArrowRightSFill } from "react-icons/ri";
import Experiences from "@/data/experiences.json";
import Motion from "./motion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spesialis Service Macbook | iMac | Mac Mini - Maclabs.co.id",
  description:
    "Service All Mac Devices Jakarta seperti Macbook, iMac, Mac Mini dan Mac Pro. Menerima pergantian Part yang bergaransi dan berkualitas",
  keywords: "service mac, service macbook, service imac, macbook mati total",
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

export default function AltAds4() {
  return (
    <>
      <section className="min-h-screen bg-center bg-black bg-[url('/images/ML-FOTO-05.webp')] bg-cover">
        <div className="px-4 mx-auto flex items-center max-w-screen h-screen max-w-screen-xl text-center">
          <div className="container relative">
            <Motion />
          </div>
        </div>
      </section>
      <Layouts.Section variant={"secondary"}>
        <Cores.Title
          title="For All Mac Devices, All Problems"
          content="Apapun permasalahan perangkat Apple Anda, Service Mac? Maclabs.co.id Solusinya!"
        />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {Devices.map((device) => (
            <Cores.Card
              caseType="blog"
              key={device.id}
              images={device.image}
              name={device.name}
              content={device.content}
              link={device.link}
            />
          ))}
        </div>
      </Layouts.Section>

      <Layouts.Section variant={"default"}>
        <Cores.Title
          title="Bagaimana Cara Kami Bekerja"
          content="Dapatkan tiga langkah mudah hanya di Maclabs.co.id"
        />
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center overflow-hidden gap-4">
          {Steps.map((step) => (
            <div
              className={`relative group flex items-center justify-center flex-col text-center`}
              key={step.id}
            >
              <div
                className={`${
                  step.id === 1 && "border-2 border-red-500"
                } p-6 rounded-full flex items-center group-hover:border-red-500 group-hover:border-2 transition-color duration-300 justify-center w-32 h-32 shadow-lg
            `}
              >
                <span className="text-black">{step.icon}</span>
              </div>
              <h4 className="text-2xl w-3/4 mb-0 mt-6">
                <span className="font-bold">Step {step.id}.</span> {step.title}
              </h4>
              <p className="mt-2.5 mx-auto w-72">{step.description}</p>
            </div>
          ))}
        </div>
      </Layouts.Section>
      <Layouts.Section variant={"secondary"}>
        <Cores.Title
          title="Benefits Untuk Anda"
          content="Apa keuntungan yang akan Kalian dapatkan di Maclabs.id?"
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
    </>
  );
}

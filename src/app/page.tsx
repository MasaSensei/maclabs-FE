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
  metadataBase: new URL("https://maclabs.co.id/"),
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
  alternates: {
    canonical: "https://maclabs.co.id/",
  },
};

export default function Home() {
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
            <YouTubeEmbed videoid="fA2GqKMNfKY" />
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
      <Layouts.Section variant={"default"}>
        <Cores.Title
          title="Pengalaman Kami"
          content="We are proud of our victories and achievements!"
        />
        <div className="grid lg:grid-cols-4 lg:pt-10 pt-5 md:grid-cols-2 grid-cols-1 gap-8">
          {Experiences.map((experience) => (
            <div
              className="relative min-h-1 px-4 text-center"
              key={experience.id}
            >
              <div
                className={`${
                  experience.id === 2 && "border-red-600"
                } lg:w-52 lg:h-52 mt-0 w-56 h-56 mt-0 mx-auto rounded-full flex flex-col justify-center items-center bg-white border-2 border-transparent shadow-xl border-solid transition-color hover:border-red-600 duration-300`}
              >
                <h5 className="lg:text-4xl text-3xl mb-0">
                  {experience.title}
                </h5>
                <p className="mt-2 text-sm">{experience.content}</p>
              </div>
            </div>
          ))}
        </div>
      </Layouts.Section>
      <Layouts.Section variant={"secondary"}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="relative min-w-1/2">
            <YouTubeEmbed videoid="_s-rk06tOxk" />
          </div>
          <div className="relative w-full">
            <Cores.Title
              title="Buy, Sell, Trade"
              content="Anda bosan dengan perangkat Apple lama dan berencana untuk menukar dengan perangkat Apple yang baru?"
            />
            <p className="mt-6 text-slate-800">
              Berencana upgrade perangkat Apple? MACLABS.ID menyediakan tukar
              tambah dan jual beli produk terbaru
            </p>
            <ul className="mt-0 flex flex-col items-start gap-2 justify-start mx-0 mb-3 pt-2.5 px-0 pb-0 list-none">
              <li className="flex justify-center items-center">
                <FaCheckCircle className="text-red-600" />
                <span className="ml-3">
                  {" "}
                  Kami akan membayar sesuai perangkat Apple Anda!
                </span>
              </li>
              <li className="flex justify-center items-center">
                <FaCheckCircle className="text-red-600" />
                <span className="ml-3"> Perangkat baru yang terjamin!</span>
              </li>
              <li className="flex justify-center items-center">
                <FaCheckCircle className="text-red-600" />
                <span className="ml-3">
                  {" "}
                  Nikmati perangkat baru yang kami berikan!
                </span>
              </li>
            </ul>
            <div className="grid lg:grid-cols-2 mt-9 gap-8 grid-cols-1">
              <Cores.Button variant={"default"} className="w-1/2">
                <Link href="https://wa.me/62818850509" target="_blank">
                  Jual Perangkat{" "}
                  <span className="ml-2">
                    <RiArrowRightSFill />
                  </span>
                </Link>
              </Cores.Button>
              <Cores.Button variant={"secondary"} className="w-1/2">
                <Link href="https://wa.me/62818850509" target="_blank">
                  Beli Baru{" "}
                  <span className="ml-2">
                    <RiArrowRightSFill />
                  </span>
                </Link>
              </Cores.Button>
            </div>
          </div>
        </div>
      </Layouts.Section>
    </>
  );
}

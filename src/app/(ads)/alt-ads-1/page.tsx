import Cores from "@/components/core";
import Layouts from "@/components/layouts";
import { Metadata } from "next";
import ServicesList from "@/data/services";
import Image from "next/image";
import Link from "next/link";

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
};

export default function AltAds() {
  return (
    <>
      <section className="min-h-screen bg-center bg-black bg-[url('/images/ML-FOTO-05.webp')] bg-cover">
        <div className="px-4 mx-auto flex items-center max-w-screen h-screen max-w-screen-xl text-center">
          <div className="container relative">
            <div className="flex flex-col items-center justify-center grid-cols-1 mt-12 lg:mt-0 gap-[30px]">
              <div>
                <Image
                  src="/images/DESIGN-MAC-RUSAK.webp"
                  alt="macbook"
                  width={500}
                  height={500}
                  className="text-center flex items-center justify-center"
                />
              </div>
              <h1 className="text-white font-bold uppercase drop-shadow-2xl lg:text-7xl text-4xl leading-normal relative">
                Sehari Selesai!!
              </h1>
              <p className="text-white italic text-2xl">Pengecekan Gratis!!</p>
              <div className="lg:px-96 flex items-center justify-center">
                <Cores.Button variant={"default"} className="w-full">
                  <Link href={"https://wa.me/62818850509"} target="_blank">
                    Contact Us
                  </Link>
                </Cores.Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Layouts.Section className="bg-zinc-900">
        <div className="flex flex-wrap lg:flex-col justify-center items-center">
          <Image
            src="/images/LOGIC-BOARD RUSAK-DESIGN-MACLABS.webp"
            alt="macbook"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </Layouts.Section>
      <Layouts.Section variant={"secondary"}>
        <Cores.Title title="Layanan Kami!!" />
        <div className="px-0 w-full relative">
          <div className="pt-8 grid lg:grid-cols-3 grid-cols-1 gap-8">
            {ServicesList.map((benefit) => (
              <Cores.Card
                key={benefit.id}
                caseType={"default"}
                icon={benefit.icon}
                name={benefit.name}
                link={benefit.link}
              />
            ))}
          </div>
        </div>
      </Layouts.Section>
    </>
  );
}

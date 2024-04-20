import Cores from "@/components/core";
import Layouts from "@/components/layouts";
import Motion from "./motion";
import { Metadata } from "next";
import ServicesList from "@/data/services";
import Image from "next/image";

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
            <Motion />
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

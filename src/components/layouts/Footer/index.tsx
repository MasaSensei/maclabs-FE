import Image from "next/image";
import { IoStorefront } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="relative max-w-full w-full ">
      <div className="relative overflow-hidden grid lg:grid-cols-2 grid-cols-1 pb-6 bg-gray-200">
        <div className="flex flex-row flex-wrap items-center justify-center">
          <div className="px-0 relative pt-9 flex justify-center gap-5 items-center mx-auto my-0 w-full">
            <div className="before:absolute before:inset-0 before:top-14 before:h-[4px] before:left-8 before:w-1/4 before:bg-gray-900 after:absolute after:top-14 after:h-[4px] after:right-8 after:w-1/4 after:bg-gray-900">
              <span className="lg:text-5xl text-4xl">
                <IoStorefront />
              </span>
            </div>
            <h4 className="pl-0 m-0 text-lg font-bold">Our Store</h4>
          </div>
          <div className="text-center">
            <figure className="inline-block m-0 mt-6 max-w-full">
              <div className="p-1.5 border border-gray-300 rounded-lg inline-block max-w-full">
                <Image
                  src="/images/mlsenayan.webp"
                  alt="store"
                  width={300}
                  height={300}
                />
              </div>
            </figure>
          </div>
          <div className="mb-0 pb-0 mx-2.5 bg-gray-100">
            <div className="text-center mt-0 mx-0 mb-6 max-w-full p-6">
              <div className="flex flex-col items-center gap-2">
                <address>
                  <span className="font-bold">Address: </span> Senayan Trade
                  Center (STC) Lt.1 No. 111-112-114 Jalan Asia Afrika Jakarta
                  Pusat
                </address>
                <address>
                  <span className="font-bold">Whatsapp: </span> 62818850509
                </address>
                <address>
                  <span className="font-bold">Jam Operasional: </span>{" "}
                  11:00-19:00 Wib. Senin-Sabtu (Tanggal merah libur).
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="m-4">
          <iframe
            className="mb-4 mb-lg-0"
            src="https://www.google.com/maps/embed/v1/place?q=Maclabs.id,+Jalan+Asia+Afrika,+Gelora,+Central+Jakarta+City,+Jakarta,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            frameBorder={0}
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="bg-zinc-400 text-center py-5">
        <h4 className="text-gray-900 font-semibold">
          <span className="font-bold text-red-500">MACNESIA.REPAIR.GROUP </span>
          - POWERED BY PT.MACNESIA INTI TEKNOLOGI Copyright© 2021. MacLabs.co.id
        </h4>
      </div>
    </footer>
  );
};

export default Footer;

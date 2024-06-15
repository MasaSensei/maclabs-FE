"use client";

import Cores from "@/components/core";
import { FaCheck } from "react-icons/fa";
import usePartList from "@/hooks/partlist";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { formatIDR } from "@/utils/FormatIDR";
import { Skeleton } from "@/components/ui/skeleton";

const StoreSection = () => {
  const pathname = usePathname();
  const url = pathname.split("/").filter(Boolean);
  const { data, isLoading } = usePartList({
    device: url[1],
    category: url[2],
    slug: url[3],
  });

  const whatsappMessage = `Halo, Saya Ingin Bertanya tentang produk ${data?.data?.data?.[0]?.name} ini.`;
  const encodedMessage = encodeURIComponent(whatsappMessage);

  if (isLoading) {
    return (
      <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="lg:col-span-5">
          <div className="grid md:grid-cols-12 gap-3">
            <div className="md:col-span-12">
              <Skeleton className="w-full h-96" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="sticky top-20">
            <Skeleton className="w-full h-20" />
            <div className="mt-2">
              <Skeleton className="w-[200px] h-4" />
            </div>
            <div className="mt-4">
              <Skeleton className="w-full h-36" />
              <ul className="list-none text-slate-600 mt-4">
                <li className="mb-3 flex ms-0">
                  <Skeleton className="w-[200px] h-4" />
                </li>
                <li className="mb-3 flex ms-0">
                  <Skeleton className="w-[200px] h-4" />
                </li>
                <li className="mb-3 flex ms-0">
                  <Skeleton className="w-[200px] h-4" />
                </li>
              </ul>
            </div>
            <div className="mt-4 space-x-1">
              <Cores.Button
                variant={"default"}
                className="w-1/4 bg-lime-600 hover:bg-lime-700"
              >
                <Link
                  href={`https://wa.me/62818850509?text=${encodedMessage}`}
                  target="_blank"
                >
                  Contact Us
                </Link>
              </Cores.Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6">
      <div className="lg:col-span-5">
        <div className="grid md:grid-cols-12 gap-3">
          <div className="md:col-span-12">
            <Image
              src={
                "https://server.maclabs.co.id/public/" + data?.data?.[0]?.image
              }
              alt={data?.data?.[0]?.name}
              width={200}
              height={200}
              className="w-full object-cover border-2 border-slate-500 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="lg:col-span-7">
        <div className="sticky top-20">
          <h5 className="font-semibold lg:text-3xl text-xl">
            {data?.data?.[0]?.name}
          </h5>
          {/* <div className="mt-2">
            <span className="text-slate-900 font-semibold lg:text-2xl text-lg me-5">
              {formatIDR(data?.data?.[0]?.price)}
            </span>
          </div> */}
          <div className="mt-4">
            <h5 className="text-lg font-semibold">Deskripsi: </h5>
            <p className="text-slate-600 mt-2">
              {data?.data?.[0]?.name} tersedia di MacLabs.co.id. Kami menawarkan
              kualitas terbaik dengan garansi{" "}
              {data?.data?.[0]?.name.toLowerCase().includes("lcd") ? "1" : "3"}{" "}
              Bulan dan harga kompetitif. Plus, kami memberikan layanan
              pemasangan gratis untuk memastikan perangkat Anda berfungsi dengan
              optimal.
            </p>
            <ul className="list-none text-slate-600 mt-4">
              <li className="mb-3 flex ms-0">
                <FaCheck className="text-red-600 text-2xl mr-3" />
                Original Replacement Part
              </li>
              <li className="mb-3 flex ms-0">
                <FaCheck className="text-red-600 text-2xl mr-3" />
                Garansi{" "}
                {data?.data?.[0]?.name.toLowerCase().includes("lcd")
                  ? "1"
                  : "3"}{" "}
                Bulan
              </li>
              <li className="mb-3 flex ms-0">
                <FaCheck className="text-red-600 text-2xl mr-3" />
                Harga Sudah Termasuk Biaya Pemasangan
              </li>
            </ul>
          </div>
          <div className="mt-4 space-x-1">
            <Cores.Button
              variant={"default"}
              className="w-1/4 bg-lime-600 hover:bg-lime-700"
            >
              <Link
                href={`https://wa.me/62818850509?text=${encodedMessage}`}
                target="_blank"
              >
                Contact Us
              </Link>
            </Cores.Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSection;

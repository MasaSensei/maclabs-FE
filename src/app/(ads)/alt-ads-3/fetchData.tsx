"use client";

import Cores from "@/components/core";
import { detailServices } from "@/services/detailServices";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  const devices = [
    {
      image: "/images/MACBOOK-A1534-2016.webp",
      name: "Macbook",
    },
    {
      image: "/images/image-removebg-preview-6-300x300-1.webp",
      name: "iMac",
    },
    {
      image: "/images/mac-mini-3.webp",
      name: "Mac-Mini",
    },
    {
      image: "/images/mac-pro-tabung.webp",
      name: "Mac-Pro",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const res = await detailServices();
      setData(res?.data);
    };
    fetchData();
  }, []);
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 py-8 gap-5">
      {data
        ?.filter((item: any) => item.category === "macbook")
        .map((item: any) => {
          // Membagi nama item menjadi array kata
          const words = item.name.split(" ");
          // Mencari indeks kata "service"
          const serviceIndex = words.findIndex(
            (word: any) => word.toLowerCase() === "service"
          );
          // Menggabungkan kembali kata-kata setelah "service"
          const nameWithoutService = words.slice(serviceIndex + 1).join(" ");
          return (
            <div className="text-center" key={item?.id}>
              <Cores.Button variant={"default"} className="flex mx-2 uppercase">
                <Link href={`/services/${item?.category}/${item?.url}`}>
                  {nameWithoutService}
                </Link>
              </Cores.Button>
            </div>
          );
        })}
      {/* {!data ||
        (data.filter(
          (item: any) => item.category === device?.name?.toLowerCase()
        ).length === 0 && (
          <div className="text-center col-span-3">
            <Cores.Button variant={"default"} className="flex mx-2">
              <h2 className="cursor-pointer">Service {device?.name}</h2>
            </Cores.Button>
          </div>
        ))} */}
    </div>
  );
};

export default FetchData;

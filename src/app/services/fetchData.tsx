"use client";

import Cores from "@/components/core";
import { detailServices } from "@/services/detailServices";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoadingSkeleton from "../loading";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="mx-auto">
      {devices.map((device, index) => (
        <div className="w-full bg-gray-500 rounded-lg my-2" key={index}>
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <>
              <h1 className="text-3xl bg-zinc-800 rounded-lg text-center text-white py-5">
                Services {device?.name}
              </h1>
              <div className="grid lg:grid-cols-3 grid-cols-1">
                <div className="flex col-span-3 items-center justify-center">
                  <Image
                    src={device?.image}
                    width={400}
                    height={400}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={device?.image}
                    alt={device?.name.toLowerCase()}
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-3 grid-cols-1 pb-8 gap-5">
                {data
                  ?.filter(
                    (item: any) => item.category === device?.name?.toLowerCase()
                  )
                  .map((item: any) => (
                    <div className="text-center" key={item?.id}>
                      <Cores.Button variant={"default"} className="flex mx-2">
                        <Link
                          href={`/computer-services/${item?.url}`}
                          target="_blank"
                        >
                          {item?.name}
                        </Link>
                      </Cores.Button>
                    </div>
                  ))}
                {!data ||
                  (data.filter(
                    (item: any) => item.category === device?.name?.toLowerCase()
                  ).length === 0 && (
                    <div className="text-center col-span-3">
                      <Cores.Button variant={"default"} className="flex mx-2">
                        <h2 className="cursor-pointer">
                          Service {device?.name}
                        </h2>
                      </Cores.Button>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default FetchData;

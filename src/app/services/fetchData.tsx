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
      name: "macbook",
    },
    {
      image: "/images/image-removebg-preview-6-300x300-1.webp",
      name: "imac",
    },
    {
      image: "/images/mac-mini-3.webp",
      name: "mac-mini",
    },
    {
      image: "/images/mac-pro-tabung.webp",
      name: "mac-pro",
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

  console.log(data);

  return (
    <div className="mx-auto">
      {devices.map((device, index) => {
        const filteredData = data.filter(
          (item) => item?.device?.name === device?.name?.toLowerCase()
        );

        return (
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
                  {filteredData.length > 0 ? (
                    filteredData.map((item) => (
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
                    ))
                  ) : (
                    <div className="text-center col-span-3">
                      <Cores.Button variant={"default"} className="flex mx-2">
                        <h2 className="cursor-pointer">
                          Service {device?.name}
                        </h2>
                      </Cores.Button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FetchData;

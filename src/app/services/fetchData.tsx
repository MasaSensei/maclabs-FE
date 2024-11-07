"use client";

import Cores from "@/components/core";
import { detailServices } from "@/services/detailServices";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoadingSkeleton from "../loading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

interface ServiceItem {
  id: number;
  name: string;
  image: string;
  meta_keyword: string;
  meta_description: string;
  url: string;
  device: {
    id_devices: number;
    name: string;
    slug: string;
  };
}

interface Device {
  image: string;
  name: string;
}

const FetchData = () => {
  const [data, setData] = useState<ServiceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);

  const devices: Device[] = [
    { image: "/images/MACBOOK-A1534-2016.webp", name: "MacBook" },
    { image: "/images/image-removebg-preview-6-300x300-1.webp", name: "iMac" },
    { image: "/images/mac-mini-3.webp", name: "Mac-Mini" },
    { image: "/images/mac-pro-tabung.webp", name: "Mac-Pro" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await detailServices();
        setData(res?.data || []);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(6);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(2);
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  return (
    <div className="mx-auto">
      {devices.map((device, index) => {
        const filteredData = data.filter(
          (item) => item?.device?.slug === device?.name?.toLowerCase()
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
                <div className="flex items-center justify-center">
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
                <Swiper
                  slidesPerView={filteredData.length > 0 ? itemsPerPage : 1}
                  spaceBetween={20}
                  modules={[Autoplay, Pagination]}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    minHeight: "100px",
                    paddingBottom: "2rem",
                  }}
                >
                  {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                      <SwiperSlide
                        key={item.id}
                        className="flex min-h-full items-center"
                      >
                        <div className="text-center flex flex-col justify-center justify-center h-full">
                          <Cores.Button
                            variant={"default"}
                            className="flex mx-2 py-3 whitespace-normal"
                          >
                            <Link
                              href={`/computer-services/${item.url}`}
                              target="_blank"
                              className="py-3 max-h-full h-full"
                            >
                              {item.name}
                            </Link>
                          </Cores.Button>
                        </div>
                      </SwiperSlide>
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
                </Swiper>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FetchData;

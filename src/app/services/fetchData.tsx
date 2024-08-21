"use client";

import Cores from "@/components/core";
import { detailServices } from "@/services/detailServices";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoadingSkeleton from "../loading";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);
  const [devicePages, setDevicePages] = useState<{
    [key: string]: { currentPage: number; totalPages: number };
  }>({});

  const devices: Device[] = [
    {
      image: "/images/MACBOOK-A1534-2016.webp",
      name: "MacBook",
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

  const handlePageChange = (deviceSlug: string, newPage: number) => {
    setDevicePages((prevPages) => ({
      ...prevPages,
      [deviceSlug]: {
        ...prevPages[deviceSlug],
        currentPage: newPage,
      },
    }));
  };

  const paginatedData = (filteredData: ServiceItem[], deviceSlug: string) => {
    const currentPage = devicePages[deviceSlug]?.currentPage || 1;
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className="mx-auto">
      {devices.map((device, index) => {
        const filteredData = data.filter(
          (item: any) => item?.device?.slug === device?.name?.toLowerCase()
        );
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);

        if (!devicePages[device?.name?.toLowerCase()]) {
          setDevicePages((prevPages) => ({
            ...prevPages,
            [device?.name?.toLowerCase()]: {
              currentPage: 1,
              totalPages,
            },
          }));
        }
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
                    paginatedData(
                      filteredData,
                      device?.name?.toLowerCase()
                    ).map((item: any) => (
                      <div className="text-center" key={item?.id}>
                        <Cores.Button
                          variant={"default"}
                          className="flex mx-2 py-3 whitespace-normal"
                        >
                          <Link
                            href={`/computer-services/${item?.url}`}
                            target="_blank"
                            className="py-3 max-h-full h-full"
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
                {filteredData.length > itemsPerPage && (
                  <Pagination className="mt-6 pb-6">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() =>
                            handlePageChange(
                              device.name.toLowerCase(),
                              (devicePages[device.name.toLowerCase()]
                                ?.currentPage || 1) - 1
                            )
                          }
                          className={`cursor-pointer text-white ${
                            devicePages[device.name.toLowerCase()]
                              ?.currentPage === 1
                              ? "pointer-events-none opacity-50"
                              : ""
                          }`}
                        />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext
                          onClick={() =>
                            handlePageChange(
                              device.name.toLowerCase(),
                              (devicePages[device.name.toLowerCase()]
                                ?.currentPage || 1) + 1
                            )
                          }
                          className={`cursor-pointer text-white ${
                            devicePages[device.name.toLowerCase()]
                              ?.currentPage === totalPages
                              ? "pointer-events-none opacity-50"
                              : ""
                          }`}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FetchData;

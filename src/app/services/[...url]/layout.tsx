"use client";

import Layouts from "@/components/layouts";
import { detailServices } from "@/services/detailServices";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Cores from "@/components/core";
import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

const ServicesLayout = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const pathname = usePathname();
  const url = pathname?.split("/").filter(Boolean);

  useEffect(() => {
    const fetchData = async () => {
      const res = await detailServices();
      setData(res?.data);
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(
    data?.filter((item: any) => item.category === url[1]).length / 4
  );

  const goToNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const goToPreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  return (
    <Layouts.Section variant={"secondary"}>
      <div className="relative">
        <div className="grid lg:grid-cols-5 lg:gap-5 gap-8">
          <div className="mx-auto w-full lg:col-span-1 col-span-2 order-2 lg:order-1">
            <ul className="p-1.5 w-full text-center bg-neutral-300 rounded-sm">
              {data
                ?.filter((item: any) => item.category === url[1])
                .slice(page * 4, (page + 1) * 4)
                .map((item: any) => (
                  <li className="relative" key={item?.id}>
                    <Link
                      className={`relative ${
                        pathname.includes(item?.url)
                          ? "bg-white text-black"
                          : "text-red-500 bg-transparent transition duration-300 ease-in-out hover:bg-slate-200 hover:text-black"
                      } block rounded-sm p-5 mt-0 mx-0 mb-2 font-bold uppercase text-lg`}
                      href={`/services/${item?.category}/${item?.url}`}
                    >
                      {item?.name}
                    </Link>
                  </li>
                ))}
            </ul>
            <div className="md:col-span-12 mt-5 text-center">
              <Pagination className="inline-flex items-center -space-x-px">
                <PaginationContent>
                  <PaginationItem
                    className="cursor-pointer"
                    onClick={goToPreviousPage}
                  >
                    <PaginationPrevious />
                  </PaginationItem>
                  <PaginationItem
                    className="cursor-pointer"
                    onClick={goToNextPage}
                  >
                    <PaginationNext />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
            <div className="w-full bg-white mb-5 rounded-lg shadow-lg border mt-5">
              <div className="py-8 px-6">
                <div className="mt-0 mb-5 relative flex gap-2 lg:justify-between items-center">
                  <span className="text-red-600 lg:text-2xl">
                    <FaPhoneAlt />
                  </span>
                  <div className="uppercase">
                    <h6 className="text-lg font-bold">Contact Phone</h6>
                    <p className="text-sm text-slate-500">+62 818 850 509</p>
                  </div>
                </div>
                <div className="mt-0 mb-5 relative flex gap-2 lg:justify-between items-center">
                  <span className="text-red-600 lg:text-2xl">
                    <FaMapMarkerAlt />
                  </span>
                  <div className="uppercase">
                    <h6 className="text-lg font-bold">Office Address</h6>
                    <p className="text-sm text-slate-500">
                      Senayan Trade Center (STC) Lt.1 No. 111-112-114 Jalan Asia
                      Afrika Jakarta Pusat
                    </p>
                  </div>
                </div>
                <div className="mt-0 mb-5 relative flex gap-2 lg:justify-between items-center">
                  <span className="text-red-600 lg:text-2xl">
                    <FaClock />
                  </span>
                  <div className="uppercase">
                    <h6 className="text-lg font-bold">OFFICE HOURS</h6>
                    <p className="text-sm text-slate-500">
                      11:00-19:00 Wib. Senin-Sabtu (Tanggal merah libur).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full lg:col-span-4 col-span-2 order-1 lg:order-2">
            {children}
          </div>
        </div>
      </div>
    </Layouts.Section>
  );
};

export default ServicesLayout;

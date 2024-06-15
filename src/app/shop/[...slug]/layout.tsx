"use client";

import Cores from "@/components/core";
import Layouts from "@/components/layouts";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import usePartList from "@/hooks/partlist";
import { usePathname } from "next/navigation";
import { formatIDR } from "@/utils/FormatIDR";
import Card from "@/components/core/Card";
import { useSearch } from "@/context/SearchContext";
import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Fragments from "@/components/fragments";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

const extractYearFromName = (name: string): number | null => {
  const year = name.match(/\d{4}/);
  return year ? parseInt(year[0], 10) : null;
};

const ShopLayout = ({ children }: any) => {
  const pathname = usePathname();
  const url = pathname.split("/").filter(Boolean);
  const { data } = usePartList({
    device: url[1],
    category: url[2],
  });

  const { searchTerm, setSearchTerm } = useSearch();
  const [sortCriteria, setSortCriteria] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortCriteria(value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Ensure data is defined and not null before accessing data.data
  const filteredData = data?.data?.filter((item: any) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort and filter data only when it is available
  const sortedAndFilteredData = filteredData?.sort((a: any, b: any) => {
    switch (sortCriteria) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "year-asc":
        return (
          (extractYearFromName(a.name) || 0) -
            (extractYearFromName(b.name) || 0) || 0
        );
      case "year-desc":
        return (
          (extractYearFromName(b.name) || 0) -
            (extractYearFromName(a.name) || 0) || 0
        );
      case "default":
        return 0;
      default:
        return 0;
    }
  });

  const paginatedData = sortedAndFilteredData?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(
    (sortedAndFilteredData?.length || 0) / itemsPerPage
  );

  if (filteredData && filteredData.length > 0 && currentPage > totalPages) {
    setCurrentPage(1);
  }

  return (
    <Layouts.Section variant={"secondary"}>
      <Cores.Title
        title={`${
          url.length === 2
            ? `Shop - Device ${url[1].charAt(0).toUpperCase()}${url[1].slice(
                1
              )}`
            : url.length === 3
            ? `Shop - Category ${data?.data?.[0]?.category?.name}`
            : `Shop - ${data?.data?.[0]?.name}`
        }`}
        content="Our Store"
      />
      {url.length !== 4 && (
        <>
          <div className="md:flex justify-between items-center mb-6">
            <span className="font-semibold">
              Showing {filteredData?.length || 0} results
            </span>
            <div className="md:flex items-center">
              <Label className="font-semibold md:me-2">Search: </Label>
              <Input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by name"
                className="w-full bg-white md:w-72 md:mt-0 mt-1 py-2 px-3 h-10 rounded outline-none border border-gray-300 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            {url.length === 3 && (
              <div className="md:flex items-center">
                <Label className="font-semibold md:me-2">Sort by: </Label>
                <Select onValueChange={handleSortChange}>
                  <SelectTrigger className="bg-white md:w-36 w-full md:mt-0 mt-1 py-2 px-3 h-10 rounded outline-none border border-gray-300 focus:ring-1 focus:ring-blue-500">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="name-asc">Name A to Z</SelectItem>
                    <SelectItem value="name-desc">Name Z to A</SelectItem>
                    <SelectItem value="price-asc">Price Low to High</SelectItem>
                    <SelectItem value="price-desc">
                      Price High to Low
                    </SelectItem>
                    <SelectItem value="year-asc">Year Old to New</SelectItem>
                    <SelectItem value="year-desc">Year New to Old</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
          {paginatedData?.length === 0 ? (
            <Fragments.EmptyState />
          ) : (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
              {paginatedData ? (
                paginatedData.map((item: any) => {
                  return url[1] === item?.device?.name && url.length === 2 ? (
                    <Card
                      caseType="blog"
                      key={item.id}
                      images={
                        "https://server.maclabs.co.id/public/" + item?.image
                      }
                      name={item?.category?.name}
                      link={`/shop/${item?.device?.name}/${item?.category?.slug}`}
                    />
                  ) : (
                    url[2] === item?.category?.slug && (
                      <Card
                        caseType="blog"
                        className="text-center font-semibold"
                        key={item.id}
                        images={`https://server.maclabs.co.id/public/${item?.image}`}
                        name={item?.name}
                        link={`/shop/${item?.device?.name}/${item?.category?.slug}/${item?.slug}`}
                        // content={formatIDR(item?.price)}
                      />
                    )
                  );
                })
              ) : (
                <Skeleton className="w-full h-72 col-span-full" />
              )}
            </div>
          )}
          {totalPages > 1 && (
            <Pagination className="mt-6">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={`cursor-pointer ${
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
                    }`}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      onClick={() => handlePageChange(index + 1)}
                      isActive={currentPage === index + 1}
                      className="cursor-pointer"
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={`cursor-pointer ${
                      currentPage === totalPages
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
      {children}
    </Layouts.Section>
  );
};

export default ShopLayout;

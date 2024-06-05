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

const ShopLayout = ({ children }: any) => {
  const pathname = usePathname();
  const url = pathname.split("/").filter(Boolean);
  console.log(url);
  const data: any = usePartList({
    device: url[1],
    category: url[2],
  });
  console.log(data);
  return (
    <Layouts.Section variant={"secondary"}>
      <Cores.Title
        title={`${
          url[2] === data?.data?.[0]?.category?.slug
            ? `Shop - Category ${url[2].charAt(0).toUpperCase()}${url[2].slice(
                1
              )}`
            : url[1] === data?.data?.[0]?.device?.slug
            ? `Shop - Device ${url[1].charAt(0).toUpperCase()}${url[1].slice(
                1
              )}`
            : `Shop - ${data?.[0]?.name}`
        }`}
        content="Our Store"
      />
      {url.length !== 4 && (
        <>
          <div className="md:flex justify-between items-center mb-6">
            <span className="font-semibold">Showing all 4 results</span>
            <div className="md:flex items-center">
              <Label className="font-semibold md:me-2">Search: </Label>
              <Input
                type="text"
                placeholder="Search by name"
                className="w-full bg-white md:w-72 md:mt-0 mt-1 py-2 px-3 h-10 rounded outline-none border border-gray-300 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="md:flex items-center">
              <Label className="font-semibold md:me-2">Sort by: </Label>
              <Select>
                <SelectTrigger className="bg-white md:w-36 w-full md:mt-0 mt-1 py-2 px-3 h-10 rounded outline-none border border-gray-300 focus:ring-1 focus:ring-blue-500">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            {data?.map((item: any) => {
              return url[1] === item?.device?.name && url.length === 2 ? (
                <Card
                  caseType="blog"
                  key={item.id}
                  images={item?.image}
                  name={item?.category?.name}
                  link={`/shop/${item?.device?.name}/${item?.category?.slug}`}
                />
              ) : (
                url[2] === item?.category?.slug && (
                  <Card
                    caseType="blog"
                    className="text-center font-semibold"
                    key={item.id}
                    images={item?.image}
                    name={item?.name}
                    link={`/shop/${item?.device?.name}/${item?.category?.slug}/${item?.slug}`}
                    content={formatIDR(item?.price)}
                  />
                )
              );
            })}
          </div>
        </>
      )}
      {children}
    </Layouts.Section>
  );
};

export default ShopLayout;

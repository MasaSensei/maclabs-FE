"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

const Jumbotron = () => {
  const pathname = usePathname();
  const splitPathname = pathname?.split("/").filter((item) => item !== "");
  const data = splitPathname[splitPathname.length - 1].replaceAll("-", " ");

  return (
    <section className="py-36 max-w-full w-full h-full max-h-full relative bg-[url('/images/ML-FOTO-05.webp')] bg-cover rounded-none table bg-center bg-no-repeat">
      <div className="container relative mx-auto">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="md:text-4xl uppercase text-3xl font-medium leading-normal tracking-wide text-white">
            {data}
          </h3>
        </div>
      </div>
      <div className="bg-sky-800 bg-opacity-70 absolute bottom-0 w-full">
        <Breadcrumb className="container text-white py-5 uppercase font-bold">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="lg:text-2xl text-base" href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            {splitPathname?.map((item, index) => {
              const breadcrumbPath = splitPathname
                .slice(0, index + 1)
                .join("/");
              return (
                <div className="flex items-center gap-2" key={index}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem key={index}>
                    <BreadcrumbLink
                      className="lg:text-2xl text-base"
                      href={`/${breadcrumbPath}`}
                    >
                      {item.replaceAll("-", " ")}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
};

export default Jumbotron;

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
import Image from "next/image";

const Jumbotron = () => {
  const pathname = usePathname();
  const splitPathname = pathname?.split("/").filter((item) => item !== "");
  const data = splitPathname[splitPathname.length - 1].replaceAll("-", " ");

  return (
    <section className="py-36 relative bg-cover bg-center bg-no-repeat">
      <Image
        src="/images/ML-FOTO-05.webp"
        alt="Deskripsi"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="container relative mx-auto">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="md:text-4xl uppercase text-3xl font-medium leading-normal tracking-wide text-white">
            {data === "shop" ? "replacement parts" : data}
          </h3>
        </div>
      </div>
      <div className="bg-zinc-800 bg-opacity-70 absolute bottom-0 w-full">
        <Breadcrumb className="container py-5 uppercase font-bold">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="lg:text-2xl hover:text-white duration-300 transition ease-in-out text-base"
                href="/"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            {splitPathname?.map((item, index) => {
              const breadcrumbPath = splitPathname
                .slice(0, index + 1)
                .join("/");

              return (
                <ul className="flex items-center gap-2" key={index}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem key={index}>
                    <BreadcrumbLink
                      className="lg:text-2xl hover:text-white duration-300 transition ease-in-out text-base"
                      href={`/${breadcrumbPath}`}
                    >
                      {item === "shop"
                        ? "replacement parts"
                        : item.replaceAll("-", " ")}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </ul>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
};

export default Jumbotron;

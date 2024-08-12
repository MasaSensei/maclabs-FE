"use client";

import LoadingSkeleton from "@/app/loading";
import { getDetailServicesByUrl } from "@/services/detailServices";
import type { DetailServices } from "@/types/detailServices";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./detailServices.module.css";

type idByPathname = {
  [key: string]: number;
};

const DetailServices = () => {
  const [data, setData] = useState<DetailServices | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const pathname = usePathname();
  const url = pathname.split("/").filter(Boolean)[1]; // Assuming /detail_services/:url format

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDetailServicesByUrl(url);
        if (res && res.data?.length > 0) {
          setData(res);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const cleanHtml = (html: string) => {
    return html.replace(/\\n/g, "");
  };

  return (
    <div className="text-sm max-w-full">
      <article className="mb-1.5 p-6 rounded-lg bg-white shadow">
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <>
            <h1 className="text-2xl text-center uppercase font-extrabold mb-2">
              {data?.data[0]?.name}
            </h1>
            <div className="w-full flex justify-center my-3">
              <Image
                src={
                  `https://server.maclabs.co.id/public/${data?.data[0]?.image}` ||
                  ""
                }
                width={400}
                height={400}
                alt={data?.data[0]?.name.toLowerCase() || ""}
                loading="lazy"
                placeholder="blur"
                blurDataURL={
                  `https://server.maclabs.co.id/public/${data?.data[0]?.image}` ||
                  ""
                }
              />
            </div>
            <div className="text-lg pt-3 text-slate-800">
              <div
                className={`${styles.contentContainer} px-5`}
                dangerouslySetInnerHTML={{
                  __html: cleanHtml(data?.data[0]?.content || ""),
                }}
              />
            </div>
          </>
        )}
      </article>
    </div>
  );
};

export default DetailServices;

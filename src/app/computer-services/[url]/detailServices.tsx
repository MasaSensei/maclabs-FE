"use client";

import { getDetailServicesByUrl } from "@/services/detailServices";
import type { DetailServices } from "@/types/detailServices";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type idByPathname = {
  [key: string]: number;
};

const DetailServices = () => {
  const [data, setData] = useState<DetailServices>();

  const pathname = usePathname();
  const url = pathname.split("/").filter(Boolean);

  useEffect(() => {
    const fetchData = async () => {
      const res: DetailServices | undefined = await getDetailServicesByUrl(
        url[1]
      );
      if (res && res?.data?.length > 0) {
        setData(res);
      }
    };

    fetchData();
  }, []);

  const convertDescriptionToHTML = (description: string) => {
    return { __html: description };
  };

  return (
    <div className="text-sm max-w-full ">
      <article className="mb-1.5 p-6 rounded-lg bg-white shadow">
        <h1 className="text-2xl text-center uppercase font-extrabold mb-2">
          {data?.data[0]?.name}
        </h1>
        <div className="w-full flex justify-center my-3">
          <Image
            src={`/images/services/${data?.data[0]?.image}` || ""}
            width={400}
            height={400}
            alt={data?.data[0]?.name.toLowerCase() || ""}
          />
        </div>
        <div className="text-lg pt-3 text-slate-800">
          <div
            dangerouslySetInnerHTML={convertDescriptionToHTML(
              data?.data[0]?.content || ""
            )}
            className="px-5"
          />
        </div>
      </article>
    </div>
  );
};

export default DetailServices;

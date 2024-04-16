"use client";

import Cores from "@/components/core";
import Link from "next/link";
import data from "@/data/services_macbook.json";

const FetchData = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 py-8 gap-5">
      {data.map((item: any, index: number) => (
        <div className="text-center" key={index}>
          <Cores.Button variant={"default"} className="flex mx-2 uppercase">
            <Link href={`/services/`}>{item.name}</Link>
          </Cores.Button>
        </div>
      ))}
    </div>
  );
};

export default FetchData;

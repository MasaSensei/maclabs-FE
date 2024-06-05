"use client";

import Cores from "@/components/core";
import Layouts from "@/components/layouts";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatIDR } from "@/utils/FormatIDR";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import usePartList from "@/hooks/partlist";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const StoreSection = () => {
  const pathname = usePathname();
  const url = pathname.split("/").filter(Boolean);
  const data: any = usePartList({
    device: url[1],
    category: url[2],
    slug: url[3],
  });
  console.log(data);
  return (
    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6">
      <div className="lg:col-span-5">
        <div className="grid md:grid-cols-12 gap-3">
          <div className="md:col-span-12">
            <Image
              src={data?.[0]?.image}
              alt={data?.[0]?.name}
              width={200}
              height={200}
              className="w-full object-cover border-2 border-slate-500 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="lg:col-span-7">
        <div className="sticky top-20">
          <h5 className="font-semibold text-3xl">{data?.[0]?.name}</h5>
          <div className="mt-2">
            {/* <span className="text-slate-900 font-semibold text-2xl me-5">
              {formatIDR(data?.[0]?.price)}
            </span> */}
          </div>
          <div className="mt-4">
            <h5 className="text-lg font-semibold">Deskripsi: </h5>
            <p className="text-slate-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              quos.
            </p>
          </div>
          <div className="mt-4 space-x-1">
            <Cores.Button variant={"default"} className="w-1/4">
              <Link href={"https://wa.me/62818850509"} target="_blank">
                Contact Us
              </Link>
            </Cores.Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSection;

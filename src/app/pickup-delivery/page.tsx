import Cores from "@/components/core";
import Layouts from "@/components/layouts";
import PickupDeliveryForm from "./formPickupDelivery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pickup Delivery Mac-Devices - Maclabs.co.id",
  description:
    "Service All Mac Devices Jakarta seperti Macbook, iMac, Mac Mini dan Mac Pro. Menerima pergantian Part yang bergaransi dan berkualitas",
  keywords: "Pickup Delivery, Pickup & Delivery, MacLabs Pickup & Delivery",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/images/cropped-logo-ml.webp",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/images/cropped-logo-ml.webp",
    },
  ],
};

const PickupDeliveryPage = () => {
  return (
    <Layouts.Section variant={"secondary"}>
      <Cores.Title
        title={"Pickup & Delivery"}
        content="Isi Form Di Bawah Ini Untuk Reservasi Pickup & Delivery"
      />
      <div className="bg-white p-5 rounded-lg">
        <div className="container">
          <PickupDeliveryForm />
        </div>
      </div>
    </Layouts.Section>
  );
};

export default PickupDeliveryPage;

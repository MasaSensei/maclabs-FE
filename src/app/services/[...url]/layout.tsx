import Layouts from "@/components/layouts";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ServicesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layouts.Section variant={"secondary"}>
      <div className="relative">
        <div className="grid lg:grid-cols-5 lg:gap-5 gap-8">
          <div className="mx-auto w-full lg:col-span-1 col-span-2 order-2 lg:order-1">
            <div className="md:col-span-12 mt-5 text-center"></div>
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

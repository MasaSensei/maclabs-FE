import Cores from "@/components/core";
import Layouts from "@/components/layouts";
import { FaInstagram } from "react-icons/fa";
import ContactForm from "./contactForm";
import Link from "next/link";

const ContactPage = () => {
  return (
    <Layouts.Section variant={"secondary"}>
      <Cores.Title title="Contact Us" content="Get in touch with us" />
      <div className="grid lg:grid-cols-4 grid-cols-1 mt-8">
        <div className="lg:col-span-1 p-0">
          <div className="w-full px-4">
            <div className="flex items-center flex-col justify-center gap-8">
              <Link href="/" className="flex items-center gap-5 justify-center">
                <span className="text-4xl">
                  <FaInstagram />
                </span>
                <span className="text-2xl">Instagram</span>
              </Link>
              <div className="flex items-center gap-5 justify-center">
                <span className="text-4xl">
                  <FaInstagram />
                </span>
                <span className="text-2xl">Instagram</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 p-5 bg-white rounded-lg">
          <ContactForm />
        </div>
      </div>
    </Layouts.Section>
  );
};

export default ContactPage;

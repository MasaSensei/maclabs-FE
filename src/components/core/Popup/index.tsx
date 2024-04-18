"use client";

import { useState } from "react";
import { Modal } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal show={isOpen} onClose={closeModal} className="relative">
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        onClick={closeModal}
      >
        <div className="bg-transparent p-4 mx-5 rounded-md text-center">
          <div className="space-y-6">
            <Link href={"https://wa.me/62818850509"} target="_blank">
              <Image
                src={"/images/maclabs-free-pickup-delivery.webp"}
                alt="popup"
                width={600}
                height={600}
                layout="absolute"
                sizes="100vw"
                quality={10}
              />
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Popup;

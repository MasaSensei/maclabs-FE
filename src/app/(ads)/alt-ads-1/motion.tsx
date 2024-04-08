"use client";

import { motion, useInView } from "framer-motion";
import Cores from "@/components/core";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Motion = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        },
        {
          threshold: 0.5,
        }
      );
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isInView]);
  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center grid-cols-1 mt-12 lg:mt-0 gap-[30px]"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: hasAnimated ? 0 : 100, opacity: hasAnimated ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Image
          src="/images/DESIGN-MAC-RUSAK.webp"
          alt="macbook"
          width={500}
          height={500}
          className="text-center flex items-center justify-center"
        />
      </motion.div>
      <motion.h1
        className="text-white font-bold uppercase drop-shadow-2xl lg:text-7xl text-4xl leading-normal relative"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: hasAnimated ? 0 : 100, opacity: hasAnimated ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Sehari Selesai!!
      </motion.h1>
      <motion.p
        className="text-white italic text-2xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: hasAnimated ? 0 : 100, opacity: hasAnimated ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        Pengecekan Gratis!!
      </motion.p>
      <motion.div
        className="lg:px-96 flex items-center justify-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: hasAnimated ? 0 : 100, opacity: hasAnimated ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <Cores.Button variant={"default"} className="w-full">
          <Link href={"https://wa.me/62818850509"} target="_blank">
            Contact Us
          </Link>
        </Cores.Button>
      </motion.div>
    </div>
  );
};

export default Motion;

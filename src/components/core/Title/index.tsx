"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useState, useEffect } from "react";

interface TitleProps {
  title: string;
  content?: string;
}

const Title: React.FC<TitleProps> = (props) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { title, content } = props;

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
    <div className="mb-0" ref={ref}>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: hasAnimated ? 0 : 100, opacity: hasAnimated ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center font-bold lg:text-4xl text-2xl text-zinc-900"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: hasAnimated ? 0 : 100, opacity: hasAnimated ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="text-center max-w-full mx-auto mt-2.5 text-lg mb-5 italic"
      >
        {content}
      </motion.p>
    </div>
  );
};

export default Title;

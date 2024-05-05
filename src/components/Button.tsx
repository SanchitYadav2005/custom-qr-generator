"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const Button = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="flex justify-center">
      <div
        onClick={() => setToggle(!toggle)}
        className={`flex items-center justify-${
          toggle ? "end" : "start"
        } h-6 w-12 cursor-pointer rounded-full p-[1px] border border-black ${
          toggle ? "bg-white" : "bg-black"
        }`}
      >
        <motion.div
          className={`h-5 w-5 rounded-full ${toggle ? "bg-black" : "bg-white"}`}
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </div>
    </div>
  );
};

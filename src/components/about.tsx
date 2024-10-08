"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating from highschool, I decided to pursue my passion for
        programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-bold">full-stack web development</span>. My
        favorite part of programming is the feeling of finally figuring out a
        solution to a problem. Right now my tech stack is{" "}
        <span className="font-bold">
          Typescript, React, Next.js, Drizzle, PostgreSQL and ShadCN
        </span>
        . I am always looking to learn new technologies. I am currently looking
        for a <span className="font-bold">full-time position</span> as a
        software developer. In my free time I enjoy playing video games and
        going out.
      </p>
    </motion.section>
  );
}

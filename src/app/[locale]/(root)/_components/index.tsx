"use client";
import React from "react";

import { Card } from "@/components/ui/focus-cards";
import { motion } from "motion/react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Casa Araras",
      src: "https://storage.googleapis.com/portal_cst_comunidade/testes/Casa%20Araras-20251117T224138Z-1-001/Casa%20Araras/_MG_7360.jpg",
      link: "/projetos/casa_araras",
    },
    {
      title: "Casa Cerejeiras",
      src: "https://storage.googleapis.com/portal_cst_comunidade/testes/CASA%20CEREJEIRAS-20251117T224353Z-1-001/CASA%20CEREJEIRAS/ALTA/_MG_2174.jpg",
      link: "/projetos/casa_cerejeiras",
    },
    {
      title: "Casacor RJ 2025",
      src: "https://storage.googleapis.com/portal_cst_comunidade/testes/CASACORJ/FOTOS%20OFICIAIS_DENILSON%20MCA/0Z7A3683-1.jpg",
      link: "/projetos/casacor_rj_2025",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {cards.map((card) => (
        <div className="grid grid-cols-1 gap-10  mx-auto md:px-8 w-full" key={card.title}>
          <Card card={card} />
        </div>
      ))}
    </div>
  );
}

export const ProjectsPage = () => {
  return (
    <div className="flex flex-col px-4 ">
      <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
        <div className="px-4 py-10 md:py-20">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center md:display-01 heading-03 ">
            {"Pedro Rabelais - Paisagismo".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
            className="relative z-10 mx-auto  py-4 text-center body-paragraph"
          >
            Mais do que estética, o paisagismo é, para nós, uma necessidade vital. Ele conecta a natureza ao cotidiano,
            promove o bem-estar e cria espaços que enriquecem as experiências humanas.
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link className={buttonVariants({ variant: "default" })} href={"/contato"}>
              Quero entrar em contato
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="w-full mb-20"
      >
        <FocusCardsDemo />
      </motion.div>
    </div>
  );
};

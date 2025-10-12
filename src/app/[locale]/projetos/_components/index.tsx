"use client";
import React from "react";

import { FocusCards } from "@/components/ui/focus-cards";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Residência Jardim Botânico",
      src: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-08.png",
      link: "/projetos/residencia-jardim-botanico",
    },
    {
      title: "Condomínio Vale Verde",
      src: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-06.png",
      link: "/projetos/condominio-vale-verde",
    },
    {
      title: "Corporativo Parque Industrial",
      src: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-10.png",
      link: "/projetos/corporativo-parque-industrial",
    },
    {
      title: "Resort Águas Claras",
      src: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-12.png",
      link: "/projetos/resort-aguas-claras",
    },
    {
      title: "Praça Central Vila Nova",
      src: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-14.png",
      link: "/projetos/praca-central-vila-nova",
    },
    {
      title: "Residencial Horizonte",
      src: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-16.png",
      link: "/projetos/residencial-horizonte",
    },
  ];

  return <FocusCards cards={cards} />;
}

export const ProjectsPage = () => {
  return (
    <div className="flex flex-col px-4 ">
      <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
        <div className="px-4 py-10 md:py-20">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center display-01 ">
            {"Nossos mais recentes projetos".split(" ").map((word, index) => (
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
            Atuamos em projetos residenciais, comerciais e institucionais, oferecendo soluções que atendem a diferentes
            ambientes e demandas em diversas regiões do país.
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
            <Button>Quero entrar em contato</Button>
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

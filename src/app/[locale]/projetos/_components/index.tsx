"use client";
import React from "react";

import { FocusCards } from "@/components/ui/focus-cards";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";

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
    {
      title: "Casacor SP 2025",
      src: "https://storage.googleapis.com/portal_cst_comunidade/testes/FOTOS%20OFICIAIS%20EDITADAS_CASACOR%202025-20251117T224359Z-1-001/FOTOS%20OFICIAIS%20EDITADAS_CASACOR%202025/_B0A5395-2.JPG",
      link: "/projetos/casacor_sp_2025",
    },
    {
      title: "Casa Cururu",
      src: "https://storage.googleapis.com/portal_cst_comunidade/testes/Cururu%20%2B%20Rabelais%20Paisagismo-20251117T224437Z-1-001/Cururu%20%2B%20Rabelais%20Paisagismo/FOTOS%20BAIXADAS/C%C3%B3pia%20de%20LS25007A%20(1).jpg",
      link: "/projetos/casa_cururu",
    },
    {
      title: "Cobertura Copacabana",
      src: "https://storage.googleapis.com/portal_cst_comunidade/testes/COBERTURA COPACABANA/AdobeBridgeBatchRenameTemp3_DSF1129.jpg",
      link: "/projetos/cobertura_copacabana",
    },
    {
      title: "Quinta do Lago",
      src: "https://storage.googleapis.com/portal_cst_comunidade/testes/QUINTA DO LAGO/WEB_MG_7498.jpg",
      link: "/projetos/quinta_do_lago",
    },
    {
      title: "Casacor RJ 2023",
      src: "https://storage.googleapis.com/portal_cst_comunidade/testes/CASACORRJ2023/WhatsApp Image 2024-09-05 at 05.43.57.jpeg",
      link: "/projetos/casacor_rj_2023",
    },
    {
      title: "Casacor RJ 2024",
      src: "https://storage.googleapis.com/portal_cst_comunidade/testes/CASACORRJ2024/WhatsApp Image 2025-12-08 at 21.16.55 (1).jpeg",
      link: "/projetos/casacor_rj_2024",
    },
  ];

  return <FocusCards cards={cards} />;
}

export const ProjectsPage = () => {
  return (
    <div className="flex flex-col px-4 ">
      <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
        <div className="px-4 py-10 md:py-20">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center md:display-01 heading-03 ">
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
            <Link className={buttonVariants({ variant: "default" })} href="/contato">
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

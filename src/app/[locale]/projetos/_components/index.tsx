"use client";
import React from "react";

import { FocusCards } from "@/components/ui/focus-cards";
import { Button } from "@/components/ui/button";

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
    <div className="flex flex-col gap-48 justify-center items-center py-48 px-12">
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <h1 className="display-01">Nossos mais recentes projetos</h1>
        <span>
          Atuamos em projetos residenciais, comerciais e institucionais, oferecendo soluções que atendem a diferentes
          ambientes e demandas em diversas regiões do país.
        </span>
        <Button className="mt-2">Quero entrar em contato</Button>
      </div>
      <FocusCardsDemo />
    </div>
  );
};

import React from "react";
import { ProjectsPage } from "./_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos - Pedro Rabelais Paisagismo",
  description:
    "Atuamos em projetos residenciais, comerciais e institucionais, oferecendo soluções que atendem a diferentes ambientes e demandas em diversas regiões do país.",
  keywords: [
    "projetos paisagismo",
    "Casa Araras",
    "Casacor",
    "projetos residenciais",
    "projetos comerciais",
    "jardins tropicais",
  ],
  openGraph: {
    title: "Projetos - Pedro Rabelais Paisagismo",
    description:
      "Atuamos em projetos residenciais, comerciais e institucionais, oferecendo soluções que atendem a diferentes ambientes e demandas em diversas regiões do país.",
    type: "website",
  },
};

export default function Home() {
  return <ProjectsPage />;
}

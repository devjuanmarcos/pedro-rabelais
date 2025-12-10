import React from "react";
import { ProjectsPage } from "./_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pedro Rabelais - Paisagismo",
  description:
    "Mais do que estética, o paisagismo é, para nós, uma necessidade vital. Ele conecta a natureza ao cotidiano, promove o bem-estar e cria espaços que enriquecem as experiências humanas.",
  keywords: [
    "paisagismo",
    "Pedro Rabelais",
    "jardins",
    "arquitetura paisagística",
    "projetos residenciais",
    "projetos comerciais",
    "Rio de Janeiro",
  ],
  openGraph: {
    title: "Pedro Rabelais - Paisagismo",
    description:
      "Mais do que estética, o paisagismo é, para nós, uma necessidade vital. Ele conecta a natureza ao cotidiano, promove o bem-estar e cria espaços que enriquecem as experiências humanas.",
    type: "website",
  },
};

export default function Home() {
  return <ProjectsPage />;
}

import React from "react";
import { GalleryPage } from "./_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria - Pedro Rabelais Paisagismo",
  description:
    "Explore nosso acervo de imagens, projetos e inspirações. Esta galeria reúne ambientes, detalhes e composições que traduzem nossa paixão pelo paisagismo e arquitetura de interiores.",
  keywords: ["galeria paisagismo", "fotos projetos", "inspiração jardins", "portfolio paisagismo"],
  openGraph: {
    title: "Galeria - Pedro Rabelais Paisagismo",
    description:
      "Explore nosso acervo de imagens, projetos e inspirações. Esta galeria reúne ambientes, detalhes e composições que traduzem nossa paixão pelo paisagismo.",
    type: "website",
  },
};

export default function Home() {
  return <GalleryPage />;
}

import React from "react";
import { AboutPage } from "./_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós - Pedro Rabelais Paisagismo",
  description:
    "O Pedro cresceu cercado por arquitetura, plantas e histórias de família que sempre apontaram na mesma direção: a natureza como parte da vida cotidiana. O escritório nasceu desse olhar sensível e da vontade de criar jardins que protegem, acolhem e transformam.",
  keywords: ["sobre Pedro Rabelais", "história", "paisagista", "arquitetura paisagística", "escritório paisagismo"],
  openGraph: {
    title: "Sobre Nós - Pedro Rabelais Paisagismo",
    description:
      "O Pedro cresceu cercado por arquitetura, plantas e histórias de família que sempre apontaram na mesma direção: a natureza como parte da vida cotidiana.",
    type: "website",
  },
};

export default function Home() {
  return <AboutPage />;
}

"use client";

import { AcervoMosaicCard } from "@/components/ui/acervo-mosaic";
import { Button } from "@/components/ui/button";

export const products = [
  {
    id: 1,
    title: "Palacto Bric",
    link: "https://gomoonbeam.com",
    thumbnail: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-08.png",
  },
  {
    id: 2,
    title: "Palacto Bric",
    link: "https://cursor.so",
    thumbnail: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-06.png",
  },
  {
    id: 3,
    title: "Palacto Bric",
    link: "https://userogue.com",
    thumbnail: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-10.png",
  },

  {
    id: 4,
    title: "Palacto Bric",
    link: "https://editorially.org",
    thumbnail: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-08.png",
  },
  {
    id: 5,
    title: "Palacto Bric",
    link: "https://editrix.ai",
    thumbnail: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-10.png",
  },
  {
    id: 6,
    title: "Palacto Bric",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-06.png",
  },

  {
    id: 7,
    title: "Palacto Bric",
    link: "https://algochurn.com",
    thumbnail: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-12.png",
  },
  {
    id: 8,
    title: "Palacto Bric",
    link: "https://ui.aceternity.com",
    thumbnail: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-14.png",
  },
  {
    id: 9,
    title: "Palacto Bric",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-06.png",
  },
  {
    id: 10,
    title: "Palacto Bric",
    link: "https://smartbridgetech.com",
    thumbnail: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-16.png",
  },
  {
    id: 11,
    title: "Palacto Bric",
    link: "https://renderwork.studio",
    thumbnail: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-18.png",
  },

  {
    id: 12,
    title: "Palacto Bric",
    link: "https://cremedigital.com",
    thumbnail: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-06.png",
  },
  {
    id: 13,
    title: "Palacto Bric",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-20.png",
  },
  {
    id: 14,
    title: "Palacto Bric",
    link: "https://invoker.lol",
    thumbnail: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-06.png",
  },
  {
    id: 15,
    title: "Palacto Bric",
    link: "https://efreeinvoice.com",
    thumbnail: "/img/parallax/PEDRO RABELAIS PAISAGISMO - PF (1)-23.png",
  },
];

export const GalleryPage = () => {
  return (
    <div className="flex flex-col gap-48 justify-center items-center py-48 ">
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h1 className="display-01">Nossa galeria</h1>
        <span>
          Explore nosso acervo de imagens, projetos e inspirações. Esta galeria reúne ambientes, detalhes e composições
          que traduzem nossa paixão pelo paisagismo e arquitetura de interiores.
        </span>
        <Button className="mt-2">Quero entrar em contato</Button>
      </div>
      <AcervoMosaicCard images={products} />
    </div>
  );
};

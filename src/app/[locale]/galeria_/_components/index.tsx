"use client";

import { AcervoMosaicCard } from "@/components/ui/acervo-mosaic";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

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
    <div className="flex flex-col px-4 ">
      <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
        <div className="px-4 py-10 md:py-20">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center display-01 ">
            {"Nossa galeria".split(" ").map((word, index) => (
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
            Explore nosso acervo de imagens, projetos e inspirações. Esta galeria reúne ambientes, detalhes e
            composições que traduzem nossa paixão pelo paisagismo e arquitetura de interiores.
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
        <AcervoMosaicCard images={products} />
      </motion.div>
    </div>
  );
};

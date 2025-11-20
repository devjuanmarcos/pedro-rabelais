"use client";

import { AcervoMosaicCardType2 } from "@/components/ui/acervo-mosaic-2";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";
import projectsData from "../../_components/projects-data.json";

export const GalleryPage = () => {
  const products = projectsData.flatMap((project) => project.images);
  const aleatoryProducts = products.sort(() => 0.5 - Math.random()).slice(0, 20);

  return (
    <div className="flex flex-col px-4">
      <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
        <div className="px-4 py-10 md:py-20">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center md:display-01 heading-03 ">
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
        className="w-full mb-20 md:px-8"
      >
        <AcervoMosaicCardType2 images={aleatoryProducts} />
      </motion.div>
    </div>
  );
};

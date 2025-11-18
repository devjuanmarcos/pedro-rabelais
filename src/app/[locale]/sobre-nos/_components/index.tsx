"use client";

import { buttonVariants } from "@/components/ui/button";
import { motion } from "motion/react";
import { TestimonialGrid } from "@/components/ui/testimonial-card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function AboutPage() {
  return (
    <div className="relative mx-auto my-10 flex  flex-col items-center justify-center">
      <div className="px-4 pt-10 md:pt-20 max-w-7xl">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center display-01 ">
          {"Conheça nossa nossa história".split(" ").map((word, index) => (
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
          className="relative z-10 mx-auto py-4 text-center body-paragraph"
        >
          Fundado há cinco anos, nosso escritório é a expressão de ma tragetória que começou muito antes. Nascido em
          meio à criatividade e ao design de uma família de arquitetos, Pedro descobriu sua paixão pelo paisagismo ainda
          jovem, iniciando sua jornada na área em 2007. <br /> <br /> Mais do que a estética, o paisagismo é, para nós,
          uma necessidade vital. Ele conecta a natureza ao cotidiano, promove o bem-estar e cria espaços que enriquecem
          as experiências humanas, Nossa missão é traduzir essa visão em projetos autorais que respeitam as raízes
          culturais e ambientais, ao mesmo tempo em que inovam na criação de cenários vivos e integrados. <br /> <br />
          Atuamos em projetos residenciais, comerciais e institucionais, oferecendo soluções que atendem a diferentes
          ambientes e demandas em diversas regiões do país. <br /> <br /> Combinamos tradição e paixão, cada projeto
          reflete nosso compromisso com um futuro mais harmonioso e sustentável.
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

        <Separator className="bg-primary mt-20" />
      </div>
    </div>
  );
}

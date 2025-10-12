"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { TestimonialGrid } from "@/components/ui/testimonial-card";
import { Separator } from "@/components/ui/separator";

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
          <Button>Quero entrar em contato</Button>
        </motion.div>

        <Separator className="bg-primary mt-20" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="mt-20 w-full"
      >
        <h2 className="heading-02 text-center mb-6">Nossa família</h2>
        <TestimonialGrid testimonials={testimonials} />
      </motion.div>
    </div>
  );
}

const testimonials = [
  {
    id: 1,
    name: "Ana Oliveira",
    role: "Proprietária de Residência",
    image:
      "https://images.unsplash.com/photo-1518287010730-4386819bf3e9?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "O projeto trouxe vida e harmonia para meu jardim. Superou todas as expectativas!",
  },
  {
    id: 2,
    name: "Ricardo Santos",
    role: "Empresário",
    image:
      "https://images.unsplash.com/photo-1518287010730-4386819bf3e9?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Transformou completamente o ambiente de nossa empresa. Um trabalho extraordinário!",
  },
  {
    id: 3,
    name: "Juliana Mendes",
    role: "Arquiteta",
    image:
      "https://images.unsplash.com/photo-1518287010730-4386819bf3e9?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "A integração com o projeto arquitetônico foi perfeita. Recomendo sem hesitar.",
  },
  {
    id: 4,
    name: "Carlos Eduardo",
    role: "Diretor de Hotel",
    image:
      "https://images.unsplash.com/photo-1518287010730-4386819bf3e9?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Nossos hóspedes adoram o novo jardim. Foi um investimento que valeu cada centavo.",
  },
  {
    id: 5,
    name: "Marina Costa",
    role: "Designer de Interiores",
    image:
      "https://images.unsplash.com/photo-1518287010730-4386819bf3e9?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "A sensibilidade estética é impressionante. Um parceiro incrível para projetos.",
  },
  {
    id: 6,
    name: "Fernando Melo",
    role: "Proprietário de Restaurante",
    image:
      "https://images.unsplash.com/photo-1518287010730-4386819bf3e9?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Nosso espaço externo ganhou vida nova. Os clientes adoram o ambiente.",
  },
  {
    id: 7,
    name: "Luísa Brandão",
    role: "Diretora de Escola",
    image:
      "https://images.unsplash.com/photo-1518287010730-4386819bf3e9?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "O pátio escolar se transformou num espaço educativo e acolhedor para as crianças.",
  },
  {
    id: 8,
    name: "Marcelo Alves",
    role: "Médico",
    image:
      "https://images.unsplash.com/photo-1518287010730-4386819bf3e9?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "O jardim terapêutico da clínica tem ajudado muito no bem-estar dos pacientes.",
  },
  {
    id: 9,
    name: "Paula Ribeiro",
    role: "Síndica de Condomínio",
    image:
      "https://images.unsplash.com/photo-1518287010730-4386819bf3e9?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "A revitalização das áreas comuns valorizou todos os apartamentos do condomínio.",
  },
  {
    id: 10,
    name: "Gustavo Lima",
    role: "Gerente de Shopping",
    image:
      "https://images.unsplash.com/photo-1518287010730-4386819bf3e9?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "O projeto paisagístico atraiu mais visitantes e aumentou o tempo de permanência.",
  },
  {
    id: 11,
    name: "Camila Torres",
    role: "Proprietária de Casa de Campo",
    image:
      "https://images.unsplash.com/photo-1518287010730-4386819bf3e9?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "A integração com a natureza local ficou surpreendente. Um verdadeiro paraíso!",
  },
  {
    id: 12,
    name: "Roberto Gomes",
    role: "Empreendedor Imobiliário",
    image:
      "https://images.unsplash.com/photo-1518287010730-4386819bf3e9?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "O paisagismo foi fundamental para o sucesso comercial do empreendimento.",
  },
];

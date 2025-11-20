"use client";
import { AcervoMosaicCardType2 } from "@/components/ui/acervo-mosaic-2";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import projectsData from "../../../_components/projects-data.json";

export const ProjectsPage = () => {
  const { projectId } = useParams();

  const project = projectsData.find((proj) => proj.id === projectId);

  if (project) {
    return (
      <section className="flex flex-col px-4 md:px-8 py-20 ">
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-center lg:pb-20 ">
          <Image
            src={project.mainImage}
            alt={`${project.title} main image`}
            height={300}
            width={600}
            quality={100}
            priority
            className="rounded-lg w-full h-full object-cover aspect-video"
          />
          <div className="flex flex-col gap-3">
            <span className="display-01">{project.title}</span>
            <span className="body-paragraph-medium">{project.Description}</span>
            <Link className={buttonVariants({ variant: "default" }) + " mt-5"} href="/contato">
              Quero entrar em contato
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="w-full mb-20"
        >
          <AcervoMosaicCardType2 images={project.images} />
        </motion.div>
      </section>
    );
  }
};

import React from "react";
import { ProjectsPage } from "./_components";
import { Metadata } from "next";
import projectsData from "../../_components/projects-data.json";

type Props = {
  params: Promise<{ projectId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectId } = await params;
  const project = projectsData.find((proj) => proj.id === projectId);

  if (!project) {
    return {
      title: "Projeto não encontrado - Pedro Rabelais Paisagismo",
    };
  }

  const description =
    project.Description && project.Description.length > 0
      ? project.Description[0]
      : "Conheça este projeto de paisagismo desenvolvido por Pedro Rabelais";

  return {
    title: `${project.title} - Pedro Rabelais Paisagismo`,
    description: description,
    keywords: [project.title, "paisagismo", "Pedro Rabelais", "projeto paisagismo"],
    openGraph: {
      title: `${project.title} - Pedro Rabelais Paisagismo`,
      description: description,
      images: [{ url: project.mainImage }],
      type: "website",
    },
  };
}

export default function Home() {
  return <ProjectsPage />;
}

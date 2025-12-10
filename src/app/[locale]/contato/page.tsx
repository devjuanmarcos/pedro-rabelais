import { ContactPage } from "./_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato - Pedro Rabelais Paisagismo",
  description:
    "Entre em contato com Pedro Rabelais Paisagismo. Estamos prontos para transformar seus espaços em ambientes únicos e harmoniosos.",
  keywords: ["contato", "orçamento paisagismo", "Pedro Rabelais contato", "whatsapp paisagismo"],
  openGraph: {
    title: "Contato - Pedro Rabelais Paisagismo",
    description:
      "Entre em contato com Pedro Rabelais Paisagismo. Estamos prontos para transformar seus espaços em ambientes únicos e harmoniosos.",
    type: "website",
  },
};

export default function Page() {
  return <ContactPage />;
}

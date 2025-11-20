"use client";

import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "../ui/separator";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 m-auto py-[4rem] px-4">
      <Image
        src={"/img/logo-principal-preta-horizontal.png"}
        alt="Logo principal preta horizontal"
        width={219}
        height={48}
        quality={100}
      />
      <div className="flex gap-12 flex-wrap justify-center text-foreground">
        <Link href="/" className="body-callout">
          Início
        </Link>
        <Link href="/projetos" className="body-callout">
          Projetos
        </Link>
        <Link href="/galeria" className="body-callout">
          Galeria
        </Link>
        <Link href="/sobre-nos" className="body-callout">
          Sobre nós
        </Link>
        <Link href="/contato" className="body-callout">
          Contato
        </Link>
      </div>

      <div className="flex gap-12 flex-wrap justify-center">
        <Link href="https://www.instagram.com/PedroRabelaisguia/" target="_blank">
          <IoLogoInstagram className="text-lg text-foreground" />
        </Link>

        <Link href="https://www.linkedin.com/company/PedroRabelais/" target="_blank">
          <FaLinkedinIn className="text-lg text-foreground" />
        </Link>

        <Link href="https://pt-br.facebook.com/PedroRabelaisguia/" target="_blank">
          <FaFacebookF className="text-lg text-foreground" />
        </Link>

        <Link href="https://www.youtube.com/@PedroRabelaisguia" target="_blank">
          <FaYoutube className="text-lg text-foreground" />
        </Link>
      </div>

      <Separator className="w-full" />

      <span className="body-paragraph text-foreground text-center">
        Combinamos tradição e paixão, cada projeto reflete nosso compromisso com um futuro mais harmonioso e
        sustentável.
      </span>
    </div>
  );
};

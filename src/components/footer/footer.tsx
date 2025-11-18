"use client";

import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaGooglePlay, FaApple } from "react-icons/fa";
import { BsArrowUpCircleFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "../ui/separator";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 m-auto py-[4rem]">
      <Image
        src={"/img/logo-principal-preta-horizontal.png"}
        alt="Logo principal preta horizontal"
        width={219}
        height={48}
        quality={100}
      />
      <div className="flex gap-12 flex-wrap justify-center text-foreground">
        <span className="body-callout">Início</span>
        <span className="body-callout">Sobre</span>
        <span className="body-callout">Projetos</span>
        <span className="body-callout">Obras em andamento</span>
        <span className="body-callout">Contato</span>
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

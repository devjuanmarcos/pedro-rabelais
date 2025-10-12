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
    <div className="flex flex-col justify-center items-center bg-primary gap-10 m-auto py-[4rem]">
      <Image
        src={"/img/logo-principal-branca-vertical.png"}
        alt="Logo principal branca vertical"
        width={189}
        height={127}
        quality={100}
      />
      <div className="flex gap-12 flex-wrap justify-center text-primary-foreground">
        <span className="body-callout">Início</span>
        <span className="body-callout">Sobre</span>
        <span className="body-callout">Projetos</span>
        <span className="body-callout">Obras em andamento</span>
        <span className="body-callout">Contato</span>
      </div>

      <div className="flex gap-12 flex-wrap justify-center">
        <Link href="https://www.instagram.com/PedroRabelaisguia/" target="_blank">
          <IoLogoInstagram className="text-lg text-primary-foreground" />
        </Link>

        <Link href="https://www.linkedin.com/company/PedroRabelais/" target="_blank">
          <FaLinkedinIn className="text-lg text-primary-foreground" />
        </Link>

        <Link href="https://pt-br.facebook.com/PedroRabelaisguia/" target="_blank">
          <FaFacebookF className="text-lg text-primary-foreground" />
        </Link>

        <Link href="https://www.youtube.com/@PedroRabelaisguia" target="_blank">
          <FaYoutube className="text-lg text-primary-foreground" />
        </Link>
      </div>

      <Separator className="w-full" />

      <span className="body-paragraph text-primary-foreground text-center">
        Combinamos tradição e paixão, cada projeto reflete nosso compromisso com um futuro mais harmonioso e
        sustentável.
      </span>
    </div>
  );
};

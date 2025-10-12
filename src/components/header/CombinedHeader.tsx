"use client";

import React from "react";
import SwitchWithIcon from "../ui/switchWithIcon";
import Image from "next/image";
import BarToolsSkeleton from "../ui/BarToolsSkeleton";
import Link from "next/link";
import { useTheme } from "next-themes";

export const CombinedHeader = ({ locale }: Readonly<{ locale: string }>) => {
  const [dropdownVisible, setDropdownVisible] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const { theme } = useTheme();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownVisible && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownVisible, sidebarOpen]);

  if (!isMounted) {
    return <BarToolsSkeleton />;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col bg-background">
      <div className="relative flex items-center w-full px-4 py-2">
        <div className="absolute left-4">
          <Image
            src={
              theme == "dark" ? "/img/logo-principal-branca-horizontal.png" : "/img/logo-principal-preta-horizontal.png"
            }
            alt={"Logo Pedro Rabelais"}
            aria-label={"Logo Pedro Rabelais"}
            sizes="100vw"
            width={137}
            height={58}
          />
        </div>

        <div className="flex justify-center items-center gap-4 w-full mx-auto">
          <Link href={"/"} className="body-callout-medium">
            Início
          </Link>
          <span>•</span>
          <Link href={"/projetos"} className="body-callout-medium">
            Projetos
          </Link>
          <span>•</span>
          <Link href={"/galeria"} className="body-callout-medium">
            Galeria
          </Link>
          <span>•</span>
          <Link href={"/sobre-nos"} className="body-callout-medium">
            Sobre nós
          </Link>
          <span>•</span>
          <Link href={"/contato"} className="body-callout-medium">
            Contato
          </Link>
        </div>

        <div className="absolute right-4">
          <SwitchWithIcon />
        </div>
      </div>
    </header>
  );
};

export default CombinedHeader;

"use client";

import React from "react";
import SwitchWithIcon from "../ui/switchWithIcon";
import Image from "next/image";
import BarToolsSkeleton from "../ui/BarToolsSkeleton";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

export const CombinedHeader = ({ locale }: Readonly<{ locale: string }>) => {
  const [dropdownVisible, setDropdownVisible] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const { theme } = useTheme();
  const t = useTranslations("Header");

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

  function ativarVLibras() {
    const vlibrasButton = document.querySelector('[vw-access-button="true"]') as HTMLElement;

    if (vlibrasButton) {
      vlibrasButton.click();
    }
  }

  if (!isMounted) {
    return <BarToolsSkeleton />;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50  flex flex-col bg-background">
      <div className="flex gap-4 justify-between w-full items-center px-4 py-2">
        <Image
          src={"/img/logo-principal-preta-horizontal.png"}
          alt={t("logo")}
          aria-label={t("logo")}
          sizes="100vw"
          width={137}
          height={58}
        />

        <div className="flex justify-center gap-4 w-full">
          <span className="body-callout-medium">Início</span>
          <span>•</span>
          <span className="body-callout-medium">Projetos</span>
          <span>•</span>
          <span className="body-callout-medium">Galeria</span>
          <span>•</span>
          <span className="body-callout-medium">Sobre nós</span>
          <span>•</span>
          <span className="body-callout-medium">Contato</span>
        </div>

        <SwitchWithIcon />
      </div>
    </header>
  );
};

export default CombinedHeader;

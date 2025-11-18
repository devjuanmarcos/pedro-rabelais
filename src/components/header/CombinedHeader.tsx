"use client";

import React from "react";
import Image from "next/image";
import BarToolsSkeleton from "../ui/BarToolsSkeleton";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export const CombinedHeader = ({ locale }: Readonly<{ locale: string }>) => {
  const [dropdownVisible, setDropdownVisible] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const [sheetOpen, setSheetOpen] = React.useState<boolean>(false);
  const { theme, resolvedTheme } = useTheme();

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

  const NavLinks = ({ isMobile = false, closeSheet = () => {} }: { isMobile?: boolean; closeSheet?: () => void }) => (
    <>
      {isMobile ? (
        <>
          <SheetClose asChild>
            <Link href={"/"} className={`body-callout-medium ${isMobile ? "text-lg py-2" : ""}`}>
              Início
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href={"/projetos"} className={`body-callout-medium ${isMobile ? "text-lg py-2" : ""}`}>
              Projetos
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href={"/galeria"} className={`body-callout-medium ${isMobile ? "text-lg py-2" : ""}`}>
              Galeria
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href={"/sobre-nos"} className={`body-callout-medium ${isMobile ? "text-lg py-2" : ""}`}>
              Sobre nós
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href={"/contato"} className={`body-callout-medium ${isMobile ? "text-lg py-2" : ""}`}>
              Contato
            </Link>
          </SheetClose>
        </>
      ) : (
        <>
          <Link href={"/"} className="body-callout-medium">
            Início
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link href={"/projetos"} className="body-callout-medium">
            Projetos
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link href={"/galeria"} className="body-callout-medium">
            Galeria
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link href={"/sobre-nos"} className="body-callout-medium">
            Sobre nós
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link href={"/contato"} className="body-callout-medium">
            Contato
          </Link>
        </>
      )}
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col bg-background">
      <div className="relative flex items-center w-full px-[4.5rem] py-2 h-10">
        {/* Layout para telas grandes (>= lg) */}
        <div className="hidden lg:block absolute left-[4.5rem]">
          <Link href="/">
            <Image
              src={
                resolvedTheme === "dark"
                  ? "/img/logo-principal-preta-horizontal 1.png"
                  : "/img/logo-principal-preta-horizontal 1.png"
              }
              alt={"Logo Pedro Rabelais"}
              aria-label={"Logo Pedro Rabelais"}
              sizes="100vw"
              width={98}
              height={30}
            />
          </Link>
        </div>

        {/* Menu de navegação para telas grandes */}
        <div className="hidden lg:flex justify-center items-center gap-4 w-full mx-auto">
          <NavLinks />
        </div>

        {/* Layout para telas pequenas (< lg) */}
        {/* Logo centralizada em telas pequenas */}
        <div className="lg:hidden flex justify-center w-full">
          <Link href="/">
            <Image
              src={
                resolvedTheme === "dark"
                  ? "/img/logo-principal-branca-horizontal.png"
                  : "/img/logo-principal-preta-horizontal.png"
              }
              alt={"Logo Pedro Rabelais"}
              aria-label={"Logo Pedro Rabelais"}
              sizes="100vw"
              width={137}
              height={58}
            />
          </Link>
        </div>

        {/* Menu hamburger totalmente à direita para telas menores que lg */}
        <div className="lg:hidden absolute right-4">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger aria-label="Menu">
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-6 mt-10">
                <NavLinks isMobile={true} closeSheet={() => setSheetOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default CombinedHeader;

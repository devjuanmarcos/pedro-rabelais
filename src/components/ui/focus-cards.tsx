"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Card = React.memo(({ card }: { card: Card }) => (
  <div className="w-full h-full aspect-video relative group/card">
    <a href={card.link} className="block">
      <Image
        src={card.src}
        alt={card.title}
        height={1200}
        width={1200}
        className="rounded-lg w-full h-full object-cover aspect-video"
      />
    </a>
    {/* Overlay com o mesmo efeito do hero-parallax */}
    <div className="absolute inset-0 h-full w-full opacity-0 group-hover/card:opacity-70 bg-white dark:bg-black transition-opacity duration-1000 ease-in-out pointer-events-none rounded-lg"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <h2 className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 ease-in-out heading-02 dark:text-white text-black px-6 text-center">
        {card.title}
      </h2>
    </div>
  </div>
));

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  link: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const firstRow = cards.slice(0, 2);
  const secondRow = cards.slice(2, 4);
  const thirdRow = cards.slice(4, 5);

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10  mx-auto md:px-8 w-full">
        {firstRow.map((card, index) => (
          <Card key={card.title} card={card} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10  mx-auto md:px-8 w-full">
        {secondRow.map((card, index) => (
          <Card key={card.title} card={card} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-10  mx-auto md:px-8 w-full">
        {thirdRow.map((card, index) => (
          <Card key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
}

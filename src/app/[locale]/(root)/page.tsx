"use server";

import { HeroParallaxDemo } from "@/app/[locale]/(root)/_components/HomePage";
import React from "react";

export default async function Home() {
  return <HeroParallaxDemo />;
}

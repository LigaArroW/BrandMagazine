"use client";

import { usePathname } from "next/navigation";
import Header from "../Header/Header";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return isHomePage ? '' : <Header />;
}

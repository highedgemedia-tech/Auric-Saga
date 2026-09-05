"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RouteTransition from "@/components/RouteTransition";

export default function AppChrome({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return children;
  }

  return (
    <div className="site-shell">
      <Header />
      <RouteTransition>{children}</RouteTransition>
      <Footer />
    </div>
  );
}

import type { ReactNode } from "react";
import { BackgroundAccents } from "./BackgroundAccents";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useReveal } from "../../hooks/useReveal";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  useReveal();

  return (
    <div className="bg-background relative flex min-h-screen flex-col overflow-x-hidden">
      <BackgroundAccents />
      <Header />
      <main className="relative z-10 flex-1">{children}</main>
      <Footer />
    </div>
  );
}

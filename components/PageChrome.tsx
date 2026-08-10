import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export default function PageChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <Reveal />
      <main className="pt-[65px]">{children}</main>
      <Footer />
    </>
  );
}

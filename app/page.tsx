import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Menu />
      <Contact />
    </main>
  );
}

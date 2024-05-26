import AboutMe from "./about/page";
import ContactMe from "@/components/contactme";
import Header from "@/components/header";
import HeroPage from "@/components/heroPage";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="overflow-auto">
      <HeroPage />
    </main>
  );
}

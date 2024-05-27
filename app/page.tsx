import Footer from "@/components/footer";
import HeroPage from "@/components/heroPage";
import Services from "@/components/services";

export default function Component() {
  return (
    <div className="flex flex-col h-full ">
      <main className="flex-1">
        <HeroPage />
        <Services />
        <Footer />
      </main>
    </div>
  );
}

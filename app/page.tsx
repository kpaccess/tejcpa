/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8YYoOOU6TBk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import HeroPage from "@/components/heroPage";
import Services from "@/components/services";
import AboutMe from "@/components/about";

export default function Component() {
  return (
    <div className="flex flex-col h-full ">
      <main className="flex-1">
        <HeroPage />
        <AboutMe />
        <Services />
      </main>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";

const HeroPage = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50 py-12 md:py-20 px-6 md:px-12 mt-8">
      <div className="container mx-auto max-w-4xl space-y-8 flex sm:flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Professional Accounting Services
          </h1>
          <p className="text-lg text-gray-300">
            Trusted by businesses of all sizes, our experienced accountants
            provide comprehensive financial solutions to help you achieve your
            goals.
          </p>
        </div>
        <Image
          alt="Accountant"
          className="mx-auto rounded-lg"
          height="400"
          src="/images/tejcpa.jpg"
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width="600"
        />
      </div>
    </section>
  );
};

export default HeroPage;

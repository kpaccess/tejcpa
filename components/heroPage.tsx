import Link from "next/link";
import Image from "next/image";

const HeroPage = () => {
  return (
    <section className="bg-gray-900 text-white py-20 md:py-32 max-w-6xl mx-auto">
      <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Professional Accounting Services
          </h1>
          <p className="text-lg text-gray-300">
            Trusted by businesses of all sizes, our experienced accountants
            provide comprehensive financial solutions to help you achieve your
            goals.
          </p>
          <div className="flex gap-4">
            <button className="">
              <Link href="#">Get a Quote</Link>
            </button>
            <button className="">
              <Link href="#">Learn More</Link>
            </button>
          </div>
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

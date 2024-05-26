const HeroPage = () => {
  return (
    <div
      className={
        "flex flex-col p-8 mx-auto text-center bg-[url('/images/accounting-bg.jpg')] bg-cover h-[700px] justify-center overflow-auto"
      }
    >
      <h2 className=" uppercase font-semibold text-4xl leading-8 py-8">
        Corporate and personal tax filing
      </h2>
      <p className="text-2xl leading-10">
        Easily And Quickly File Your Corporate Taxes By A Certified CPA
        Accountant Without Leaving Your Home
      </p>
    </div>
  );
};

export default HeroPage;

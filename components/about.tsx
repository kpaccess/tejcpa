const AboutMe = () => {
  return (
    <section
      className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50 py-12 md:py-20 px-6 md:px-12 pt-8"
      id="about"
    >
      <div className="container mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-lg md:text-xl">
            I am a Certified Public Accountant (CPA) with over 10 years of
            experience in the industry. I specialize in providing comprehensive
            accounting services to businesses of all sizes, helping them achieve
            their financial goals and ensure compliance with all relevant
            regulations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">My Approach</h3>
            <p>
              I take a personalized and collaborative approach to working with
              my clients. I believe in building long-term relationships and
              understanding the unique needs and challenges of each business I
              work with. My goal is to provide tailored solutions that help my
              clients succeed.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">My Qualifications</h3>
            <p>
              I hold a Bachelor&apos;s degree in Accounting and a Master&apos;s
              degree in Taxation. I am a Certified Public Accountant (CPA) and a
              member of the American Institute of CPAs (AICPA). I stay
              up-to-date with the latest industry trends and regulations to
              ensure I provide the best possible service to my clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

const Services = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Small Business Accounting
            </h3>
            <p className="text-gray-700">
              Provided comprehensive accounting services for a local small
              business, including bookkeeping, financial reporting, and tax
              preparation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Tax Planning and Preparation
            </h3>
            <p className="text-gray-700">
              Successfully planned and prepared taxes for multiple clients,
              optimizing their tax liabilities while ensuring compliance with
              all regulations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Financial Analysis for Growth
            </h3>
            <p className="text-gray-700">
              Conducted in-depth financial analysis for a growing startup,
              providing actionable insights that led to improved financial
              performance and strategic planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

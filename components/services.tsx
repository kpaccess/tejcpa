import { MdCheck } from "react-icons/md";

const Services = () => {
  return (
    <section className="py-20 md:py-32 max-w-6xl mx-auto">
      <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-gray-500">
            We offer a wide range of accounting services to meet your business
            needs.
          </p>
          <ul className="grid gap-4">
            <li className="flex items-start gap-3">
              <MdCheck className="h-6 w-6 text-green-500 mt-10" />
              <div>
                <h3 className="font-semibold">Tax Preparation</h3>
                <p className="text-gray-500">
                  Accurate and timely tax preparation to ensure compliance and
                  maximize your deductions. T1, T2, T3.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MdCheck className="h-6 w-6 text-green-500 mt-10" />
              <div>
                <h3 className="font-semibold">Bookkeeping</h3>
                <p className="text-gray-500">
                  Streamline your financial records and stay on top of your
                  business finances.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MdCheck className="h-6 w-6 text-green-500 mt-10" />
              <div>
                <h3 className="font-semibold">Financial Consulting</h3>
                <p className="text-gray-500">
                  Receive expert guidance on strategic financial decisions to
                  grow your business.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Our Credentials</h2>
          <p className="text-gray-500">
            Our team of accountants are highly qualified and experienced.
          </p>
          <ul className="grid gap-4">
            <li className="flex items-start gap-3">
              <MdCheck className="h-6 w-6 text-green-500 mt-10" />

              <div>
                <h3 className="font-semibold">Certified Public Accountants</h3>
                <p className="text-gray-500">
                  All our accountants are licensed and certified public
                  accountants.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MdCheck className="h-6 w-6 text-green-500 mt-10" />
              <div>
                <h3 className="font-semibold">Decades of Experience</h3>
                <p className="text-gray-500">
                  Our team has over 50 years of combined experience in the
                  accounting industry.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MdCheck className="h-6 w-6 text-green-500 mt-10" />

              <div>
                <h3 className="font-semibold">Trusted by Businesses</h3>
                <p className="text-gray-500">
                  We&apos;ve proudly served hundreds of businesses in our local
                  community.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;

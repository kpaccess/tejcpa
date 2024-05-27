import Card from "./card";

const Testimonials = () => {
  return (
    <section
      className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50 py-12 md:py-20 px-6 md:px-12 mb-8"
      id="testimonials"
    >
      <div className="container mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Testimonials</h2>
          <p className="text-lg md:text-xl">
            Hear what my clients have to say about my services.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <div>
              <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-gray-700 px-2 py-1">
                John has been an invaluable asset to our business. His expertise
                and attention to detail have helped us navigate the complex
                world of accounting and taxes with ease.
              </blockquote>
              <div className="mt-4 text-gray-500 dark:text-gray-400 px-2 py-1 ">
                - Sarah Johnson, CEO, Acme Inc.
              </div>
            </div>
          </Card>
          <Card>
            <div>
              <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-gray-700 px-2 py-1">
                Working with John has been a game-changer for our business. His
                strategic financial advice has helped us make informed decisions
                and achieve our goals.
              </blockquote>
              <div className="mt-4 text-gray-500 dark:text-gray-400 px-2 py-1">
                - Michael Lee, CFO, XYZ Corporation
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

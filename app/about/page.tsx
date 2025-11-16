import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            WELCOME TO OUR STUDIO and COMMUNITY
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Independently run since 2009, our mission is to provide a
                welcoming and supportive space to guide you through a
                transformative and healing yoga practice.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Here at Hot Yoga Dunedin we offer heated and non-heated yoga
                classes as well as Inferno Hot Pilates (a low impact, high
                intensity cardio workout) for all levels of students. Beginners
                are always welcome at any of our classes.
              </p>
            </div>
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Staff Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Studio Interior Image</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Hot Yoga?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Practicing yoga in a heated environment increases flexibility
                and mobility of your body. The heat offers therapeutic benefits
                in revitalising the cells and tissues, and increases blood
                circulation. This helps to release toxins from your body via the
                skin.
              </p>
              <p className="text-lg text-gray-700">
                Our heating system has been specifically engineered to ensure
                the consistency of the room temperature and humidity within a
                specific heat index, constant circulation of heated clean air
                helps promote perspiration and blood flow while constantly
                exchanging the air within the space so it is always fresh and
                clean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Cleanliness Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Health & Safety Protocols
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                We have had heightened cleaning protocols in place since 2020.
                The studio is deep cleaned twice a day and the floors and key
                surfaces are cleaned with hospital grade products between every
                class. Our shared props are cleaned with sterigene after every
                use. Bolster covers are washed regularly.
              </p>
              <p>
                Our heating system is equipped with a fresh air supply which
                extracts and supplies filtered air to the room.
              </p>
              <p>
                If you are unwell or isolating we have some great high quality{" "}
                <a
                  href=""
                  className="text-orange-600 hover:text-orange-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  classes available online
                </a>
                , these are free for those on their intro pass/membership or
                unlimited passes. Alternatively it is $15 for 31 day access.
                Please see the link in our menu or check our branded app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Message Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                From Our Team
              </h2>
              <p className="text-lg text-gray-700 mb-6 italic">
                &quot;We look forward to welcoming you to our studio community
                and supporting you on your yoga journey.&quot;
              </p>
              <p className="text-lg text-gray-700">
                - Donna and the team at HYD
              </p>
              <div className="mt-8">
                <Link
                  href="/teachers"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-block"
                >
                  MEET OUR TEACHERS
                </Link>
              </div>
            </div>
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Welcome Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Studio Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🌡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Heated Environment
              </h3>
              <p className="text-gray-700">
                Precisely controlled temperature and humidity for optimal
                practice conditions
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">💨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fresh Air System
              </h3>
              <p className="text-gray-700">
                Continuous air circulation and filtration for a clean, fresh
                environment
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Premium Facilities
              </h3>
              <p className="text-gray-700">
                Modern changing rooms, showers, and all necessary equipment
                provided
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our welcoming community and experience the transformative power
            of hot yoga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors"
            >
              BOOK YOUR FIRST CLASS
            </Link>
            <Link
              href="/pricing"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              VIEW PRICING
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white bg-black">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-800 to-yellow-900"></div>

        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Heated yoga and Pilates in Central Dunedin, New Zealand
          </h1>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              TIMETABLE
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              OUR STUDIO
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="text-white text-sm">SCROLL</div>
          <div className="w-0.5 h-8 bg-white mx-auto mt-2"></div>
        </div>
      </section>

      {/* Our Studio Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Studio
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Independently run since 2009, our mission is to provide a
                welcoming and supportive space to guide you through a
                transformative and healing yoga practice.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                At Hot Yoga Dunedin, our classes encompass both heated and
                non-heated yoga classes, alongside Mat Pilates, a traditional
                non-heated Stott method pilates class and Inferno Hot Pilates—a
                low-impact, high-intensity cardio workout—suitable for students
                of every level. We warmly welcome beginners to join any of our
                classes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="text-orange-600 hover:text-orange-800 font-semibold transition-colors"
                >
                  LEARN MORE &gt;
                </Link>
                <Link
                  href="/teachers"
                  className="text-orange-600 hover:text-orange-800 font-semibold transition-colors"
                >
                  OUR TEACHERS &gt;
                </Link>
              </div>
            </div>
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Studio Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Classes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Classes
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              In studio or online, we have classes to suit everyone's needs and
              levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Original Hot Yoga */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Original Hot Yoga
              </h3>
              <p className="text-gray-700 mb-6">
                A static sequence of 26 postures and 2 breathing exercises,
                designed to systematically stretch, tone and realign every
                aspect of your being.
              </p>
              <Link
                href="/classes/original-hot-yoga"
                className="text-orange-600 hover:text-orange-800 font-semibold transition-colors"
              >
                LEARN MORE &gt;
              </Link>
            </div>

            {/* Hot Flow */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Hot Flow
              </h3>
              <p className="text-gray-700 mb-6">
                Our flow classes are dynamic with a strong focus on
                synchronising movement with breath.
              </p>
              <Link
                href="/classes/hot-flow"
                className="text-orange-600 hover:text-orange-800 font-semibold transition-colors"
              >
                LEARN MORE &gt;
              </Link>
            </div>

            {/* Inferno Hot Pilates */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Inferno Hot Pilates
              </h3>
              <p className="text-gray-700 mb-6">
                Inferno Hot Pilates is a fun, challenging, full body, low
                impact, high intensity workout using Pilates principles.
              </p>
              <Link
                href="/classes/inferno-hot-pilates"
                className="text-orange-600 hover:text-orange-800 font-semibold transition-colors"
              >
                LEARN MORE &gt;
              </Link>
            </div>

            {/* Mat Pilates */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Mat Pilates
              </h3>
              <p className="text-gray-700 mb-6">
                Classes starting June 13th. Mat Pilates uses different
                combinations of approximately 50 simple, repetitive exercises to
                create muscular strength.
              </p>
              <Link
                href="/classes/mat-pilates"
                className="text-orange-600 hover:text-orange-800 font-semibold transition-colors"
              >
                LEARN MORE &gt;
              </Link>
            </div>

            {/* Yin */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Yin</h3>
              <p className="text-gray-700 mb-6">
                Yin yoga is a nourishing and meditative form of yoga which works
                deep into the connective tissues, fascia and joints.
              </p>
              <Link
                href="/classes/yin"
                className="text-orange-600 hover:text-orange-800 font-semibold transition-colors"
              >
                LEARN MORE &gt;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Sign up for community updates
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            You'll receive the occasional love letter with community updates,
            studio news and other good stuff (it's the inside edge on
            everything).
          </p>
          <Link
            href="https://clients.mindbodyonline.com/asp/su1.asp?fl=true&tabID=2"
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors inline-block"
          >
            SIGN UP
          </Link>
        </div>
      </section>

      {/* Class Schedule Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Class Schedule
              </h2>
              <div className="mb-6">
                <a
                  href="https://www.instagram.com/hotyogadunedin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-orange-600 transition-colors"
                >
                  <span className="mr-2">📷</span>
                  @hotyogadunedin
                </a>
              </div>
            </div>
            <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Schedule Widget Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              News & Updates
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              All the latest news, updates, insights and discussions from Hot
              Yoga Dunedin.
            </p>
            <Link
              href="/blog"
              className="text-orange-600 hover:text-orange-800 font-semibold transition-colors"
            >
              All posts &gt;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="bg-gray-300 h-48 flex items-center justify-center">
                <span className="text-gray-600">Blog Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  An Inspiring Testimonial - The Power of Hot Yoga
                </h3>
                <p className="text-gray-600 text-sm mb-4">Oct 30, 2024</p>
                <Link
                  href="/blog/an-inspiring-testimonial-the-power-of-hot-yoga"
                  className="text-orange-600 hover:text-orange-800 font-semibold transition-colors"
                >
                  READ MORE
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="bg-gray-300 h-48 flex items-center justify-center">
                <span className="text-gray-600">Blog Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Hot Yoga vs Depression
                </h3>
                <p className="text-gray-600 text-sm mb-4">Oct 30, 2024</p>
                <Link
                  href="/blog/hot-yoga-vs-depression"
                  className="text-orange-600 hover:text-orange-800 font-semibold transition-colors"
                >
                  READ MORE
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="bg-gray-300 h-48 flex items-center justify-center">
                <span className="text-gray-600">Blog Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  15 Benefits of Hot Yoga Backed by Science
                </h3>
                <p className="text-gray-600 text-sm mb-4">Oct 30, 2024</p>
                <Link
                  href="/blog/15-benefits-of-hot-yoga-backed-by-science"
                  className="text-orange-600 hover:text-orange-800 font-semibold transition-colors"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

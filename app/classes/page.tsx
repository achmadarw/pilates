import Link from "next/link";

export default function Classes() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Our Classes
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            We provide classes both in-studio and online, catering to diverse
            needs and skill levels.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            With five class styles available on our timetable, our aim is to
            ensure Yoga and Pilates are accessible to all.
          </p>
        </div>
      </section>

      {/* Classes Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Classes Image Placeholder</span>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Our yoga aims to provide a challenging yet adaptable experience,
                allowing each individual to tailor it to their own body. All
                classes are beginner-friendly, and with consistent practice,
                you&apos;ll discover the ideal class style for your body each
                day.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Each of our offered styles possesses its distinct
                characteristics. While some students enjoy alternating between
                styles, others prefer to stick to their favourite. Feel free to
                experiment and find what suits you best!
              </p>
              <p className="text-lg text-gray-700">
                Yin yoga serves as an excellent complement to the more dynamic
                styles like Bikram, Hot Flow, Mat Pilates and Inferno Hot
                Pilates, offering a balance between yin and yang energies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Original Hot Yoga */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-300 h-64 flex items-center justify-center">
                <span className="text-gray-600">Class Image</span>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Original Hot Yoga
                </h2>
                <div className="text-orange-600 font-semibold mb-4">
                  60/90 Minute Duration
                </div>
                <p className="text-gray-700 mb-6">
                  The Room is heated to 38 degrees celsius with 40% humidity.
                  You will sweat! The class starts with a breathing exercise and
                  a series of set standing postures, followed floor series
                  ending with a breathing exercise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/classes/original-hot-yoga"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold transition-colors text-center"
                  >
                    LEARN MORE
                  </Link>
                  <Link
                    href="/book"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md font-semibold transition-colors text-center"
                  >
                    BOOK CLASS
                  </Link>
                </div>
              </div>
            </div>

            {/* Hot Flow */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-300 h-64 flex items-center justify-center">
                <span className="text-gray-600">Class Image</span>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Hot Flow
                </h2>
                <div className="text-orange-600 font-semibold mb-4">
                  60/75 Minute Duration
                </div>
                <p className="text-gray-700 mb-6">
                  Our Flow classes are dynamic with a strong focus on
                  synchronising breath with movement. The room is heated to 32
                  degrees, expect to sweat. Using well-balanced creative
                  sequencing, classes are designed to challenge and inspire you
                  both mentally and physically. Walk away feeling energised,
                  balanced and light!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/classes/hot-flow"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold transition-colors text-center"
                  >
                    LEARN MORE
                  </Link>
                  <Link
                    href="/book"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md font-semibold transition-colors text-center"
                  >
                    BOOK CLASS
                  </Link>
                </div>
              </div>
            </div>

            {/* Inferno Hot Pilates */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-300 h-64 flex items-center justify-center">
                <span className="text-gray-600">Class Image</span>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Inferno Hot Pilates
                </h2>
                <div className="text-orange-600 font-semibold mb-4">
                  60 Minute Duration
                </div>
                <p className="text-gray-700 mb-6">
                  Inferno Hot Pilates is a fun, challenging, full body, low
                  impact, high intensity workout using Pilates principles.
                  Performed in a room heated to 32 degrees with energetic music
                  Inferno Hot Pilates is an amazing workout using HIIT (High
                  Intensity Interval Training) that strengthens muscles, boosts
                  your metabolism and burns fat – all without the pounding of a
                  high impact workout.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/classes/inferno-hot-pilates"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold transition-colors text-center"
                  >
                    LEARN MORE
                  </Link>
                  <Link
                    href="/book"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md font-semibold transition-colors text-center"
                  >
                    BOOK CLASS
                  </Link>
                </div>
              </div>
            </div>

            {/* Mat Pilates */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-300 h-64 flex items-center justify-center">
                <span className="text-gray-600">Class Image</span>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Mat Pilates
                </h2>
                <div className="text-orange-600 font-semibold mb-4">
                  75 Minute Duration
                </div>
                <p className="text-gray-700 mb-6">
                  Mat Pilates uses different combinations of approximately 50
                  simple, repetitive exercises to create muscular strength.
                  These exercises can be adapted to provide either gentle
                  strength training for rehabilitation, or a strenuous workout
                  vigorous enough to challenge skilled athletes
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/classes/mat-pilates"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold transition-colors text-center"
                  >
                    LEARN MORE
                  </Link>
                  <Link
                    href="/book"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md font-semibold transition-colors text-center"
                  >
                    BOOK CLASS
                  </Link>
                </div>
              </div>
            </div>

            {/* Yin */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden lg:col-span-2">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gray-300 h-64 lg:h-auto flex items-center justify-center">
                  <span className="text-gray-600">Class Image</span>
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Yin</h2>
                  <div className="text-orange-600 font-semibold mb-4">
                    60/90 Minute Duration
                  </div>
                  <p className="text-gray-700 mb-6">
                    Yin yoga is a nourishing and meditative form of yoga which
                    works deep into the connective tissues, fascia and joints.
                    The room is warm, around 25 degrees. This practice involves
                    long holds in restorative poses to unlock deeply held
                    tension and helps balance our busy &quot;yang&quot;
                    lifestyles by cultivating patience, stillness and deep
                    relaxation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/classes/yin"
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold transition-colors text-center"
                    >
                      LEARN MORE
                    </Link>
                    <Link
                      href="/book"
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md font-semibold transition-colors text-center"
                    >
                      BOOK CLASS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

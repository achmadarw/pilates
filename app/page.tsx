import Link from "next/link";
import Image from "next/image";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero/hero-1-optimized.jpg"
          alt="FERVID Yoga Studio Interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative text-center px-4 z-20">
          <div className="mb-8 flex justify-center">
            <Logo size="xl" color="light" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-4 leading-tight text-white">
            Heated yoga and Pilates in South Jakarta
          </h1>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white hover:bg-gray-100 text-stone-800 px-8 py-3 rounded-md font-light transition-colors"
            >
              TIMETABLE
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-stone-800 text-white px-8 py-3 rounded-md font-light transition-colors"
            >
              OUR STUDIO
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="text-white text-sm font-light">SCROLL</div>
          <div className="w-0.5 h-8 bg-white mx-auto mt-2"></div>
        </div>
      </section>

      {/* Our Studio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light text-stone-700 mb-6">
                Our Studio
              </h2>
              <p className="text-lg text-stone-600 mb-6 font-light">
                Independently run since 2009, our mission is to provide a
                welcoming and supportive space to guide you through a
                transformative and healing yoga practice.
              </p>
              <p className="text-lg text-stone-600 mb-8 font-light">
                At FERVID, our classes encompass both heated and non-heated yoga
                classes, alongside Mat Pilates, a traditional non-heated Stott
                method pilates class and Inferno Hot Pilates—a low-impact,
                high-intensity cardio workout—suitable for students of every
                level. We warmly welcome beginners to join any of our classes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="text-stone-600 hover:text-stone-800 font-light transition-colors"
                >
                  LEARN MORE &gt;
                </Link>
                <Link
                  href="/teachers"
                  className="text-stone-600 hover:text-stone-800 font-light transition-colors"
                >
                  OUR TEACHERS &gt;
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/studio/studio-interior.jpg"
                alt="FERVID Yoga Studio Interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Classes Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-stone-700 mb-4">
              Our Classes
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto font-light">
              In studio or online, we have classes to suit everyone&apos;s needs
              and levels.
            </p>
          </div>

          {/* Grid layout matching the provided design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
            {/* Top row - Original Hot Yoga (larger) */}
            <div className="relative group overflow-hidden rounded-lg h-80 md:h-96">
              <Image
                src="/images/classes/class-1-optimized.jpg"
                alt="Original Hot Yoga Class"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-2 tracking-wider">
                  ORIGINAL HOT YOGA
                </h3>
                <Link
                  href="/classes/original-hot-yoga"
                  className="text-white/80 hover:text-white font-light transition-colors text-sm tracking-wide"
                >
                  LEARN MORE →
                </Link>
              </div>
            </div>

            {/* Top row - Hot Flow (larger) */}
            <div className="relative group overflow-hidden rounded-lg h-80 md:h-96">
              <Image
                src="/images/classes/class-2-optimized.jpg"
                alt="Hot Flow Yoga Class"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-2 tracking-wider">
                  HOT FLOW
                </h3>
                <Link
                  href="/classes/hot-flow"
                  className="text-white/80 hover:text-white font-light transition-colors text-sm tracking-wide"
                >
                  LEARN MORE →
                </Link>
              </div>
            </div>

            {/* Second row - Three columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:col-span-2">
              {/* Inferno Hot Pilates */}
              <div className="relative group overflow-hidden rounded-lg h-60">
                <Image
                  src="/images/classes/class-3-optimized.jpg"
                  alt="Inferno Hot Pilates Class"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 className="text-lg md:text-xl font-light text-white mb-1 tracking-wider">
                    INFERNO HOT PILATES
                  </h3>
                  <Link
                    href="/classes/inferno-hot-pilates"
                    className="text-white/80 hover:text-white font-light transition-colors text-xs tracking-wide"
                  >
                    LEARN MORE →
                  </Link>
                </div>
              </div>

              {/* Mat Pilates */}
              <div className="relative group overflow-hidden rounded-lg h-60">
                <Image
                  src="/images/classes/class-4-optimized.jpg"
                  alt="Mat Pilates Class"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 className="text-lg md:text-xl font-light text-white mb-1 tracking-wider">
                    MAT PILATES
                  </h3>
                  <Link
                    href="/classes/mat-pilates"
                    className="text-white/80 hover:text-white font-light transition-colors text-xs tracking-wide"
                  >
                    LEARN MORE →
                  </Link>
                </div>
              </div>

              {/* Yin */}
              <div className="relative group overflow-hidden rounded-lg h-60">
                <Image
                  src="/images/classes/class-5-optimized.jpg"
                  alt="Yin Yoga Class"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 className="text-lg md:text-xl font-light text-white mb-1 tracking-wider">
                    YIN
                  </h3>
                  <Link
                    href="/classes/yin"
                    className="text-white/80 hover:text-white font-light transition-colors text-xs tracking-wide"
                  >
                    LEARN MORE →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-stone-700 text-stone-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light mb-4">
            Sign up for community updates
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-light">
            You&apos;ll receive the occasional love letter with community
            updates, studio news and other good stuff (it&apos;s the inside edge
            on everything).
          </p>
          <Link
            href=""
            className="bg-white text-stone-700 hover:bg-stone-100 px-8 py-3 rounded-md font-light transition-colors inline-block"
          >
            SIGN UP
          </Link>
        </div>
      </section>

      {/* Class Schedule Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light text-stone-700 mb-6">
                Class Schedule
              </h2>
              <div className="mb-6">
                <a
                  href="https://www.instagram.com/hotyogadunedin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-stone-600 hover:text-stone-800 transition-colors font-light"
                >
                  <span className="mr-2">📷</span>
                  @fervid
                </a>
              </div>
            </div>
            <div className="bg-stone-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-stone-500 font-light">
                Schedule Widget Placeholder
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-stone-700 mb-4">
              News & Updates
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto mb-6 font-light">
              All the latest news, updates, insights and discussions from
              FERVID.
            </p>
            <Link
              href="/blog"
              className="text-stone-600 hover:text-stone-800 font-light transition-colors"
            >
              All posts &gt;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-stone-200">
              <div className="bg-stone-200 h-48 flex items-center justify-center">
                <span className="text-stone-500 font-light">Blog Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light text-stone-700 mb-2">
                  An Inspiring Testimonial - The Power of Hot Yoga
                </h3>
                <p className="text-stone-500 text-sm mb-4 font-light">
                  Oct 30, 2024
                </p>
                <Link
                  href="/blog/an-inspiring-testimonial-the-power-of-hot-yoga"
                  className="text-stone-600 hover:text-stone-800 font-light transition-colors"
                >
                  READ MORE
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-stone-200">
              <div className="bg-stone-200 h-48 flex items-center justify-center">
                <span className="text-stone-500 font-light">Blog Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light text-stone-700 mb-2">
                  Hot Yoga vs Depression
                </h3>
                <p className="text-stone-500 text-sm mb-4 font-light">
                  Oct 30, 2024
                </p>
                <Link
                  href="/blog/hot-yoga-vs-depression"
                  className="text-stone-600 hover:text-stone-800 font-light transition-colors"
                >
                  READ MORE
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-stone-200">
              <div className="bg-stone-200 h-48 flex items-center justify-center">
                <span className="text-stone-500 font-light">Blog Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light text-stone-700 mb-2">
                  15 Benefits of Hot Yoga Backed by Science
                </h3>
                <p className="text-stone-500 text-sm mb-4 font-light">
                  Oct 30, 2024
                </p>
                <Link
                  href="/blog/15-benefits-of-hot-yoga-backed-by-science"
                  className="text-stone-600 hover:text-stone-800 font-light transition-colors"
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

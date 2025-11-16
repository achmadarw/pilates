"use client";

import Image from "next/image";

// Example component showing how to implement images
export const ImageExamples = () => {
  return (
    <div className="space-y-8">
      {/* Hero Background Example */}
      <section className="relative h-screen">
        <Image
          src="/images/hero/hero-background.jpg"
          alt="Hot yoga studio with people practicing in warm, peaceful environment"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="relative z-20 flex items-center justify-center h-full text-white">
          <h1 className="text-6xl font-bold text-center">
            Heated yoga and Pilates in South Jakarta
          </h1>
        </div>
      </section>

      {/* Studio Image Example */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Studio</h2>
              <p className="text-lg text-gray-700">
                Studio description content...
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/studio/studio-interior-1.jpg"
                alt="Hot Yoga Dunedin studio interior showing the main practice room"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Photo Example */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/teachers/donna-wikio.jpg"
                  alt="Donna Wikio, Founder & Director of Hot Yoga Dunedin"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Donna Wikio</h3>
                <p className="text-orange-600">Founder & Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Image Example */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/classes/original-hot-yoga.jpg"
                  alt="Original Hot Yoga class in session with students practicing poses"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Original Hot Yoga</h3>
                <p className="text-gray-700">
                  A static sequence of 26 postures and 2 breathing exercises...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

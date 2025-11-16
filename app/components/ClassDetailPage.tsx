import Link from "next/link";
import Image from "next/image";

interface ClassDetailPageProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  bookingUrl: string;
  buttonText: string;
  duration: string[];
  whatToWear: string;
  whatToBring: string[];
  fullDescription: {
    paragraphs: string[];
    sections?: {
      title: string;
      content: string;
    }[];
  };
  teachers: {
    name: string;
    image?: string;
  }[];
}

export default function ClassDetailPage({
  title,
  subtitle,
  description,
  imageUrl,
  bookingUrl,
  buttonText,
  duration,
  whatToWear,
  whatToBring,
  fullDescription,
  teachers,
}: ClassDetailPageProps) {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-stone-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Column - Text Content */}
            <div className="max-w-lg">
              <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-wide leading-tight">
                {title}
              </h1>
              <p className="text-xl mb-8 font-light leading-relaxed text-stone-300">
                {subtitle}
              </p>
              <p className="text-lg mb-8 text-stone-400 font-light leading-relaxed">
                {description}
              </p>
              <Link
                href={bookingUrl}
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-light transition-colors text-lg tracking-wide"
              >
                {buttonText}
              </Link>
            </div>

            {/* Right Column - Class Image */}
            <div className="relative lg:justify-self-end">
              <div className="bg-stone-200 rounded-lg overflow-hidden shadow-2xl max-w-md">
                <Image
                  src={imageUrl}
                  alt={title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Details Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Description */}
            <div>
              {fullDescription.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-stone-700 mb-6 font-light leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              {fullDescription.sections?.map((section, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-2xl font-light text-stone-800 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-lg text-stone-700 mb-6 font-light leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column - Class Info */}
            <div className="bg-stone-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-light mb-6">Class Duration</h3>
              <ul className="mb-8 space-y-2">
                {duration.map((time, index) => (
                  <li key={index} className="text-stone-300">
                    • {time}
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-light mb-6">What should I wear?</h3>
              <p className="text-stone-300 mb-8 font-light leading-relaxed">
                {whatToWear}
              </p>

              <h3 className="text-2xl font-light mb-6">What should I bring?</h3>
              <ul className="mb-8 space-y-2 text-stone-300">
                {whatToBring.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Classes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-stone-800 mb-12 text-center">
            UPCOMING CLASSES
          </h2>

          {/* Calendar Placeholder */}
          <div className="bg-stone-100 rounded-lg p-12 text-center mb-12">
            <p className="text-stone-600 text-lg font-light">
              Class schedule will be displayed here
            </p>
            <Link
              href="/book"
              className="inline-block mt-6 bg-stone-800 hover:bg-stone-900 text-white px-8 py-3 rounded font-light transition-colors"
            >
              VIEW FULL SCHEDULE
            </Link>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-stone-800 mb-12 text-center">
            TAUGHT BY
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {teachers.map((teacher, index) => (
              <div key={index} className="text-center">
                <div className="relative mx-auto mb-4 group">
                  <div className="w-40 h-40 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md bg-stone-300 transition-transform duration-300 group-hover:scale-105">
                    {teacher.image ? (
                      <Image
                        src={teacher.image}
                        alt={teacher.name}
                        width={160}
                        height={160}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-stone-400 flex items-center justify-center">
                        <span className="text-stone-600 text-lg font-light">
                          {teacher.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-stone-700 font-light text-sm tracking-wide text-center">
                  {teacher.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

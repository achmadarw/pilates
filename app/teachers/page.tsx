import Image from "next/image";

const teachers = [
  {
    name: "LAURA PUGH",
    title: "TEACHER",
    bio: "Laura's journey with yoga began as a way to find balance in her busy life. Now she shares that same sense of peace and strength with her students.",
    image: "/images/teachers/teacher-1.jpg",
    specialties: ["HOT FLOW", "YIN YOGA"],
  },
  {
    name: "SARAH MITCHELL",
    title: "TEACHER",
    bio: "Sarah's classes focus on building strength and flexibility while maintaining a calm and centered mind through breathwork.",
    image: "/images/teachers/teacher-2.jpg",
    specialties: ["HOT FLOW", "YIN YOGA"],
  },
  {
    name: "EMMA THOMPSON",
    title: "TEACHER",
    bio: "Emma brings creativity and flow to every class, helping students connect with their bodies in new and meaningful ways.",
    image: "/images/teachers/teacher-3.jpg",
    specialties: ["INFERNO HOT PILATES", "MAT PILATES"],
  },
  {
    name: "JESSICA PARK",
    title: "TEACHER",
    bio: "Jessica's teaching style combines traditional yoga principles with modern movement, creating classes that are both grounding and energizing.",
    image: "/images/teachers/teacher-4.jpg",
    specialties: ["ORIGINAL HOT YOGA", "HOT FLOW"],
  },
  {
    name: "MAYA RODRIGUEZ",
    title: "TEACHER",
    bio: "Maya's passion for yoga shines through in her encouraging and supportive teaching style, making every student feel welcome.",
    image: "/images/teachers/teacher-5.jpg",
    specialties: ["YIN YOGA", "MAT PILATES"],
  },
  {
    name: "ZOE WILLIAMS",
    title: "TEACHER",
    bio: "Zoe creates a safe and nurturing space for students to explore their practice, emphasizing self-compassion and mindful movement.",
    image: "/images/teachers/teacher-6.jpg",
    specialties: ["HOT FLOW", "YIN YOGA"],
  },
  {
    name: "CHLOE ANDERSON",
    title: "TEACHER",
    bio: "Chloe's dynamic teaching style challenges students to push their boundaries while maintaining proper alignment and breath awareness.",
    image: "/images/teachers/teacher-7.jpg",
    specialties: ["INFERNO HOT PILATES", "ORIGINAL HOT YOGA"],
  },
  {
    name: "SOPHIE CHEN",
    title: "TEACHER",
    bio: "Sophie combines her knowledge of anatomy with flowing sequences, creating classes that are both therapeutic and transformative.",
    image: "/images/teachers/teacher-8.jpg",
    specialties: ["MAT PILATES", "HOT FLOW"],
  },
];

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-stone-900">
      {/* Hero Section */}
      <section className="relative py-24 bg-stone-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-light mb-8 tracking-wider">
                OUR TEACHERS
              </h1>
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-6">
                We have a passionate team of qualified teachers offering four
                types of classes, we have three styles of yoga; Original Hot
                Yoga, Hot Flow and Yin as well as Inferno Hot Pilates.
              </p>
              <p className="text-lg font-light leading-relaxed opacity-90">
                With 40+ classes per week, there is something for everyone. Open
                every day of the year except Christmas Day.
              </p>
            </div>

            {/* Right Column - Team Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/hero-teachers.jpg"
                  alt="FERVID Teaching Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Grid Section */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-16 text-center tracking-wider max-w-4xl mx-auto">
              MEET OUR TEAM OF PASSIONATE TEACHERS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
              {teachers.map((teacher, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group max-w-sm"
                >
                  {/* Teacher Photo */}
                  <div className="relative mb-6">
                    <div className="w-64 h-80 rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-lg bg-stone-300 transition-transform duration-300 group-hover:scale-105">
                      {teacher.image ? (
                        <Image
                          src={teacher.image}
                          alt={teacher.name}
                          width={256}
                          height={320}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className="w-full h-full bg-stone-400 flex items-center justify-center">
                          <span className="text-stone-600 text-2xl font-light">
                            {teacher.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Teacher Info */}
                  <div className="w-full px-4">
                    <h3 className="text-xl font-light text-stone-800 mb-2 tracking-wider text-center">
                      {teacher.name}
                    </h3>
                    <p className="text-sm text-stone-600 mb-4 tracking-wide uppercase text-center">
                      {teacher.title}
                    </p>
                    <p className="text-sm text-stone-700 leading-relaxed mb-6 font-light text-center">
                      {teacher.bio}
                    </p>

                    {/* Specialties */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {teacher.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-stone-800 text-white text-xs tracking-wide rounded font-light"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

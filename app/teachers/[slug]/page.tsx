import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Import teachers data
const teachers = [
  {
    name: "LAURA PUGH",
    title: "TEACHER",
    bio: "Laura's journey with yoga began as a way to find balance in her busy life. Now she shares that same sense of peace and strength with her students.",
    image: "/images/teachers/teacher-1.jpg",
    specialties: ["HOT FLOW", "YIN YOGA"],
    slug: "laura-pugh",
    fullBio:
      "Laura discovered yoga during a particularly stressful period in her life and found it to be a sanctuary of peace and mindfulness. With over 8 years of practice and 5 years of teaching experience, she specializes in creating flows that build both physical strength and mental resilience. Laura's classes are known for their perfect balance of challenge and relaxation, making them accessible to practitioners of all levels.",
  },
  {
    name: "SARAH MITCHELL",
    title: "TEACHER",
    bio: "Sarah's classes focus on building strength and flexibility while maintaining a calm and centered mind through breathwork.",
    image: "/images/teachers/teacher-2.jpg",
    specialties: ["HOT FLOW", "YIN YOGA"],
    slug: "sarah-mitchell",
    fullBio:
      "Sarah brings over 6 years of yoga experience to her teaching, with a special focus on breathwork and meditation. Her classes are designed to help students find balance between strength and flexibility, both physically and mentally. Sarah's gentle yet challenging approach makes her classes perfect for both beginners and experienced practitioners.",
  },
  {
    name: "EMMA THOMPSON",
    title: "TEACHER",
    bio: "Emma brings creativity and flow to every class, helping students connect with their bodies in new and meaningful ways.",
    image: "/images/teachers/teacher-3.jpg",
    specialties: ["INFERNO HOT PILATES", "MAT PILATES"],
    slug: "emma-thompson",
    fullBio:
      "Emma's creative approach to movement comes from her background in dance and fitness. She specializes in Pilates and creates dynamic, flowing sequences that challenge the body while maintaining proper alignment. Her classes are known for their innovative use of props and creative variations that keep students engaged and motivated.",
  },
  {
    name: "JESSICA PARK",
    title: "TEACHER",
    bio: "Jessica's teaching style combines traditional yoga principles with modern movement, creating classes that are both grounding and energizing.",
    image: "/images/teachers/teacher-4.jpg",
    specialties: ["ORIGINAL HOT YOGA", "HOT FLOW"],
    slug: "jessica-park",
    fullBio:
      "Jessica has been practicing yoga for over 10 years and teaching for 7. She combines traditional Hatha yoga principles with dynamic flow sequences, creating classes that honor the roots of yoga while meeting the needs of modern practitioners. Her classes focus on building heat, strength, and mindfulness.",
  },
  {
    name: "MAYA RODRIGUEZ",
    title: "TEACHER",
    bio: "Maya's passion for yoga shines through in her encouraging and supportive teaching style, making every student feel welcome.",
    image: "/images/teachers/teacher-5.jpg",
    specialties: ["YIN YOGA", "MAT PILATES"],
    slug: "maya-rodriguez",
    fullBio:
      "Maya's teaching philosophy centers around creating an inclusive and supportive environment where all students can explore their practice safely. With training in both Yin Yoga and Pilates, she offers a unique perspective on slow, mindful movement that promotes both physical and emotional healing.",
  },
  {
    name: "ZOE WILLIAMS",
    title: "TEACHER",
    bio: "Zoe creates a safe and nurturing space for students to explore their practice, emphasizing self-compassion and mindful movement.",
    image: "/images/teachers/teacher-6.jpg",
    specialties: ["HOT FLOW", "YIN YOGA"],
    slug: "zoe-williams",
    fullBio:
      "Zoe's approach to yoga is deeply rooted in mindfulness and self-compassion. She believes that yoga should be accessible to everyone, regardless of experience level or physical ability. Her classes blend dynamic flow with restorative elements, creating a balanced practice that nurtures both body and mind.",
  },
  {
    name: "CHLOE ANDERSON",
    title: "TEACHER",
    bio: "Chloe's dynamic teaching style challenges students to push their boundaries while maintaining proper alignment and breath awareness.",
    image: "/images/teachers/teacher-7.jpg",
    specialties: ["INFERNO HOT PILATES", "ORIGINAL HOT YOGA"],
    slug: "chloe-anderson",
    fullBio:
      "Chloe brings intensity and precision to her teaching, with a focus on proper alignment and breath work. Her background in sports medicine informs her approach to movement, ensuring that students build strength safely while being challenged to reach their potential. Her classes are perfect for those looking to deepen their practice.",
  },
  {
    name: "SOPHIE CHEN",
    title: "TEACHER",
    bio: "Sophie combines her knowledge of anatomy with flowing sequences, creating classes that are both therapeutic and transformative.",
    image: "/images/teachers/teacher-8.jpg",
    specialties: ["MAT PILATES", "HOT FLOW"],
    slug: "sophie-chen",
    fullBio:
      "Sophie's background in physiotherapy brings a therapeutic element to her teaching. She specializes in movement that promotes healing and recovery, making her classes ideal for those dealing with injuries or chronic pain. Her deep understanding of anatomy ensures that every sequence is both safe and effective.",
  },
];

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TeacherDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const teacher = teachers.find((t) => t.slug === slug);

  if (!teacher) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Breadcrumb */}
      <section className="py-6 bg-white border-b border-stone-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-stone-600">
            <Link
              href="/teachers"
              className="hover:text-stone-800 transition-colors"
            >
              All Teachers
            </Link>
            <span className="mx-2">{">"}</span>
            <span className="text-stone-800">{teacher.name}</span>
          </div>
        </div>
      </section>

      {/* Teacher Profile Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {/* Left Column - Photo */}
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="relative">
                <div
                  className="w-96 h-120 rounded-2xl overflow-hidden shadow-lg bg-stone-300"
                  style={{ height: "480px" }}
                >
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    width={384}
                    height={480}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="lg:col-span-3 flex flex-col justify-start">
              <div className="mb-8">
                <p className="text-stone-700 leading-relaxed text-base font-normal mb-4">
                  {teacher.fullBio && teacher.fullBio.length > 500 ? (
                    <>
                      {teacher.fullBio.split(".").slice(0, 3).join(".")}
                      {teacher.fullBio.split(".").length > 3 && "."}
                    </>
                  ) : (
                    <>
                      {teacher.fullBio?.split(".").slice(0, 2).join(".")}
                      {teacher.fullBio &&
                        teacher.fullBio.split(".").length > 2 &&
                        "."}
                    </>
                  )}
                </p>

                <p className="text-stone-700 leading-relaxed text-base font-normal mb-4">
                  {teacher.fullBio &&
                    teacher.fullBio.split(".").slice(2, 4).join(".")}
                  {teacher.fullBio &&
                    teacher.fullBio.split(".").length > 4 &&
                    "."}
                </p>

                <p className="text-stone-700 leading-relaxed text-base font-normal mb-4">
                  {teacher.fullBio &&
                    teacher.fullBio.split(".").slice(4, 6).join(".")}
                  {teacher.fullBio &&
                    teacher.fullBio.split(".").length > 6 &&
                    "."}
                </p>

                {teacher.fullBio && teacher.fullBio.split(".").length > 6 && (
                  <p className="text-stone-700 leading-relaxed text-base font-normal">
                    {teacher.fullBio.split(".").slice(6).join(".")}
                  </p>
                )}
              </div>

              {/* Classes Taught Section */}
              <div className="mt-8">
                <h3 className="text-xl font-normal text-stone-800 mb-4 tracking-wide">
                  CLASSES TAUGHT
                </h3>
                <div className="flex flex-wrap gap-3">
                  {teacher.specialties.map((specialty, idx) => (
                    <button
                      key={idx}
                      className="px-6 py-2 border border-stone-400 text-stone-700 text-sm tracking-wide rounded-full font-normal hover:bg-stone-100 transition-colors"
                    >
                      {specialty}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Image Section (if available) */}
      {teacher.slug === "donna-wood" && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative w-full max-w-md mx-auto h-96 rounded-lg overflow-hidden shadow-lg mb-8">
                <Image
                  src="/images/teachers/donna-book.jpg"
                  alt="Donna with her book 'Within'"
                  width={400}
                  height={384}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-stone-700 font-light text-lg">
                Donna has co-authored a yoga book called{" "}
                <em>&quot;Within&quot;</em> available on Amazon and in paperback
                sold at the studio.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Related Teachers Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-stone-800 mb-12 text-center tracking-wider">
            OTHER TEACHERS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teachers
              .filter((t) => t.slug !== teacher.slug)
              .slice(0, 4)
              .map((otherTeacher, index) => (
                <Link
                  key={index}
                  href={`/teachers/${otherTeacher.slug}`}
                  className="group text-center"
                >
                  <div className="relative mb-4">
                    <div className="w-48 h-60 mx-auto rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-md bg-stone-300 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={otherTeacher.image}
                        alt={otherTeacher.name}
                        width={192}
                        height={240}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-light text-stone-800 mb-2 tracking-wider group-hover:text-orange-600 transition-colors">
                    {otherTeacher.name}
                  </h3>
                  <p className="text-sm text-stone-600 tracking-wide uppercase">
                    {otherTeacher.title}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

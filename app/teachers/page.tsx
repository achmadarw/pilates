import Link from "next/link";

export default function Teachers() {
  const teachers = [
    {
      name: "DONNA WIKIO",
      role: "FOUNDER & DIRECTOR",
      classes: ["INFERNO HOT PILATES", "ORIGINAL HOT YOGA"],
      slug: "donna-wikio",
    },
    {
      name: "LAURA PUGH",
      role: "TEACHER",
      classes: ["YIN", "HOT FLOW", "INFERNO HOT PILATES"],
      slug: "laura-pugh",
    },
    {
      name: "ADRIENNE ROY",
      role: "TEACHER",
      classes: [
        "ORIGINAL HOT YOGA",
        "INFERNO HOT PILATES",
        "YIN",
        "MAT PILATES",
      ],
      slug: "adrienne-roy",
    },
    {
      name: "JESS DOBSON",
      role: "TEACHER",
      classes: ["HOT FLOW"],
      slug: "jess-dobson",
    },
    {
      name: "MANDI SAUL",
      role: "TEACHER",
      classes: ["INFERNO HOT PILATES", "MAT PILATES"],
      slug: "mandi-saul",
    },
    {
      name: "EMMANUELLE GOMEZ",
      role: "TEACHER",
      classes: ["ORIGINAL HOT YOGA", "YIN"],
      slug: "emmanuelle-gomez",
    },
    {
      name: "MUNIRAH BURRA",
      role: "TEACHER",
      classes: ["ORIGINAL HOT YOGA", "YIN"],
      slug: "munirah-burra",
    },
    {
      name: "FRAN RAE",
      role: "TEACHER",
      classes: ["YIN"],
      slug: "fran-rae",
    },
    {
      name: "ALICE CHEUNG",
      role: "TEACHER",
      classes: ["INFERNO HOT PILATES"],
      slug: "alice-cheung",
    },
    {
      name: "SARAH CHARLTON",
      role: "TEACHER",
      classes: ["HOT FLOW"],
      slug: "sarah-charlton",
    },
    {
      name: "ANNA POOLE",
      role: "TEACHER",
      classes: ["HOT FLOW"],
      slug: "anna-poole",
    },
    {
      name: "EVA LLOYD",
      role: "TEACHER",
      classes: ["INFERNO HOT PILATES"],
      slug: "eva-lloyd",
    },
    {
      name: "THERESA BOWEN",
      role: "TEACHER",
      classes: ["HOT FLOW"],
      slug: "theresa-bowen",
    },
    {
      name: "HELEN PLATTEN",
      role: "TEACHER",
      classes: ["YIN"],
      slug: "helen-platten",
    },
    {
      name: "MOANA KYLE",
      role: "TEACHER",
      classes: ["YIN"],
      slug: "moana-kyle",
    },
    {
      name: "BELLA DEVEREUX",
      role: "TEACHER",
      classes: ["HOT FLOW"],
      slug: "bella-devereux",
    },
    {
      name: "ANNELIES VAN DIJKE",
      role: "TEACHER",
      classes: ["HOT FLOW", "INFERNO HOT PILATES", "YIN"],
      slug: "annelies-van-dijke",
    },
  ];

  const getClassColor = (className: string) => {
    switch (className) {
      case "ORIGINAL HOT YOGA":
        return "bg-red-100 text-red-800";
      case "HOT FLOW":
        return "bg-orange-100 text-orange-800";
      case "INFERNO HOT PILATES":
        return "bg-yellow-100 text-yellow-800";
      case "MAT PILATES":
        return "bg-green-100 text-green-800";
      case "YIN":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Teachers</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We have a passionate team of qualified teachers offering four types
            of classes, we have three styles of yoga; Original Hot Yoga, Hot
            Flow and Yin as well as Inferno Hot Pilates.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Teachers Group Image</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Meet our team of passionate teachers
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                With 40+ classes per week, there is something for everyone. Open
                every day of the year except Christmas Day.
              </p>
              <p className="text-lg text-gray-700">
                Our experienced and certified instructors are dedicated to
                creating a safe, supportive, and transformative environment for
                practitioners of all levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gray-300 h-64 flex items-center justify-center">
                  <span className="text-gray-600">{teacher.name} Photo</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {teacher.name}
                  </h3>
                  <p className="text-orange-600 font-semibold mb-4">
                    {teacher.role}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-600 mb-2">
                      TEACHES:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {teacher.classes.map((className, classIndex) => (
                        <span
                          key={classIndex}
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getClassColor(
                            className
                          )}`}
                        >
                          {className}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/teachers/${teacher.slug}`}
                    className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors"
                  >
                    READ BIO &gt;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Practice with Our Teachers?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join one of our classes and experience the guidance of our expert
            instructors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/classes"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors"
            >
              VIEW CLASS SCHEDULE
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

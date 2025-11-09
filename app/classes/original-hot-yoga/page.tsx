import Link from "next/link";

export default function OriginalHotYoga() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Original Hot Yoga
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            A static sequence of 26 postures and 2 breathing exercises, designed
            to systematically stretch, tone and realign every aspect of your
            being.
          </p>
        </div>
      </section>

      {/* Class Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Original Hot Yoga Image</span>
            </div>
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Class Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-orange-600">
                      Duration:
                    </span>
                    <span className="ml-2 text-gray-700">60/90 Minutes</span>
                  </div>
                  <div>
                    <span className="font-semibold text-orange-600">
                      Temperature:
                    </span>
                    <span className="ml-2 text-gray-700">
                      38°C with 40% humidity
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-orange-600">
                      Intensity:
                    </span>
                    <span className="ml-2 text-gray-700">Moderate to High</span>
                  </div>
                  <div>
                    <span className="font-semibold text-orange-600">
                      Suitable for:
                    </span>
                    <span className="ml-2 text-gray-700">
                      All levels, beginners welcome
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-semibold transition-colors text-center"
                >
                  BOOK CLASS
                </Link>
                <Link
                  href="/classes"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-md font-semibold transition-colors text-center"
                >
                  VIEW ALL CLASSES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              What to Expect
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                The Room is heated to 38 degrees celsius with 40% humidity. You
                will sweat! The class starts with a breathing exercise and a
                series of set standing postures, followed by a floor series
                ending with a breathing exercise.
              </p>
              <p>
                This is a traditional Bikram-style class featuring the same 26
                postures and 2 breathing exercises in every class. The
                consistency of the sequence allows you to track your progress
                and go deeper into your practice over time.
              </p>
              <p>
                The heat helps to warm your muscles, increase flexibility, and
                promote detoxification through sweating. Each posture targets
                specific areas of the body while working the entire system -
                cardiovascular, respiratory, nervous, muscular, and skeletal.
              </p>
              <p>
                No prior yoga experience is necessary. The sequence is designed
                to be challenging yet accessible for practitioners of all
                levels. Listen to your body and take breaks as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-orange-600 mb-4">
                  Physical Benefits
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Increased flexibility and range of motion</li>
                  <li>• Improved strength and muscle tone</li>
                  <li>• Better balance and coordination</li>
                  <li>• Enhanced cardiovascular health</li>
                  <li>• Detoxification through sweating</li>
                  <li>• Improved posture and spinal alignment</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-orange-600 mb-4">
                  Mental Benefits
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Reduced stress and anxiety</li>
                  <li>• Improved focus and concentration</li>
                  <li>• Better sleep quality</li>
                  <li>• Increased mental clarity</li>
                  <li>• Enhanced self-discipline</li>
                  <li>• Greater body awareness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              How to Prepare
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-orange-600 mb-4">
                  Before Class
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hydrate well throughout the day</li>
                  <li>• Eat a light meal 2-3 hours before class</li>
                  <li>• Arrive 15 minutes early</li>
                  <li>• Bring a yoga mat and towel</li>
                  <li>• Wear comfortable, breathable clothing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-orange-600 mb-4">
                  During Class
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Stay hydrated with small sips of water</li>
                  <li>• Listen to your body and rest when needed</li>
                  <li>• Focus on your breathing</li>
                  <li>• Stay in the room even if you need to sit down</li>
                  <li>• Avoid comparing yourself to others</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

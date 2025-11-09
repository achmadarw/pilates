import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our friendly team. We&apos;re here to help you
            start or continue your yoga journey.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Location
                    </h3>
                    <address className="text-gray-600 not-italic">
                      33 St Andrew Street
                      <br />
                      Central Dunedin
                      <br />
                      Dunedin 9016
                      <br />
                      New Zealand
                    </address>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Opening Hours
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Reception is open 30 minutes before and after classes.
                      Please see our schedule for class times.
                    </p>
                    <div className="text-gray-600 text-sm space-y-1">
                      <div className="flex justify-between">
                        <span>Monday:</span>
                        <span>5.45am – 9.30pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tuesday:</span>
                        <span>5.30am – 9.30pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wednesday:</span>
                        <span>5.45am – 9.30pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Thursday:</span>
                        <span>5.30am – 9.30pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday:</span>
                        <span>5.45am – 8.00pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>7.30am – 8.00pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>7.30am – 8.00pm</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v1a1 1 0 01-1 1h-1v11a2 2 0 01-2 2H6a2 2 0 01-2-2V7H3a1 1 0 01-1-1V5a1 1 0 011-1h4z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Follow Us
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.facebook.com/bikram.dunedin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-800 transition-colors"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://www.instagram.com/hotyogadunedin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-800 transition-colors"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.youtube.com/@bikramyogadunedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-800 transition-colors"
                      >
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Send us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="class-inquiry">Class Inquiry</option>
                    <option value="membership">Membership Question</option>
                    <option value="booking">Booking Issue</option>
                    <option value="facilities">Facilities</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Find Us
          </h2>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Interactive Map Placeholder</span>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600 mb-4">
              Located in the heart of Central Dunedin, we&apos;re easily
              accessible by public transport and car.
            </p>
            <a
              href="https://maps.google.com/maps?q=33+St+Andrew+Street,+Central+Dunedin,+Dunedin+9016,+New+Zealand"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have questions? We&apos;re here to help you begin your hot yoga
            journey.
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
              TRY OUR INTRO OFFER
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

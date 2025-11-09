import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Explore Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Book a Class
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/classes"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Prices & Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/teachers"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Teachers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/how-to-prepare"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  How to Prepare
                </Link>
              </li>
              <li>
                <Link
                  href="/facilities"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/giving-back"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Giving Back
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.facebook.com/bikram.dunedin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/hotyogadunedin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@bikramyogadunedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Location Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Location</h4>
            <address className="text-gray-300 not-italic">
              33 St Andrew Street,
              <br />
              Central Dunedin
              <br />
              Dunedin 9016
              <br />
              New Zealand
            </address>
          </div>

          {/* Opening Hours Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <p className="text-gray-300 text-sm mb-4">
              Reception is open 30 minutes before and after classes. Please see
              our schedule for class times.
            </p>
            <div className="text-gray-300 text-sm space-y-1">
              <div>Monday: 5.45am – 9.30pm</div>
              <div>Tuesday: 5.30am – 9.30pm</div>
              <div>Wednesday: 5.45am – 9.30pm</div>
              <div>Thursday: 5.30am – 9.30pm</div>
              <div>Friday: 5.45am – 8.00pm</div>
              <div>Saturday: 7.30am – 8.00pm</div>
              <div>Sunday: 7.30am – 8.00pm</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024, Hot Yoga Dunedin Developed by DOT THE i
          </div>
          <div className="text-gray-300 text-sm">
            <a
              href="https://www.ohyassociation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              OHYA Studio Partner
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

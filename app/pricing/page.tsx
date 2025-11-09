import Link from "next/link";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Memberships & Passes
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We have a selection of pricing options to cater for everyone.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Pricing Image Placeholder</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Choose Your Path
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Choose from one of our single purchase unlimited passes (1
                month, 6 months or 12 months), or one of our 10, 20 or 40 class
                packs (student pricing available).
              </p>
              <p className="text-lg text-gray-700">
                If you are unsure of which option suits your needs best, speak
                to one of our friendly staff at reception.
              </p>
              <div className="mt-8 flex items-center">
                <span className="text-sm text-gray-600 mr-4">
                  Afterpay available at reception
                </span>
                <div className="bg-black text-white px-3 py-1 rounded text-sm">
                  afterpay
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Starter Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Getting Started
            </h2>

            {/* First Timer */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-orange-600 mb-6">
                First time to the studio?
              </h3>
              <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-8">
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-orange-600 mb-2">
                    $39
                  </h4>
                  <p className="text-xl font-semibold text-gray-800 mb-4">
                    TWO WEEKS UNLIMITED
                  </p>
                  <p className="text-gray-700 mb-6">
                    Perfect introduction pass for newcomers. Unlimited classes
                    for 14 days.
                  </p>
                  <a
                    href="https://clients.mindbodyonline.com/classic/ws?studioid=7268&stype=41&sTG=22&prodId=376"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-block"
                  >
                    BUY INTRO PASS
                  </a>
                </div>
              </div>
            </div>

            {/* Regular Practitioner */}
            <div>
              <h3 className="text-2xl font-semibold text-orange-600 mb-6">
                A Regular Practitioner?
              </h3>
              <div className="bg-gray-50 border rounded-lg p-8">
                <p className="text-lg text-gray-700 mb-6">
                  If practicing at least 2 – 3 times per week, then our
                  MEMBERSHIP option is your most cost effective option from $110
                  per month. This is a minimum 3 month commitment, paid by
                  direct debit OR Credit card either weekly, fortnightly or
                  monthly. To sign up, please enquire in-house (for direct
                  debit) or sign up online using your credit card below.
                </p>
                <div className="text-center">
                  <a
                    href="https://clients.mindbodyonline.com/asp/main_shop.asp?pMode=0&tabID=3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-block"
                  >
                    VIEW MEMBERSHIPS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Memberships & Passes
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead className="bg-orange-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Option</th>
                    <th className="px-6 py-4 text-left">Standard</th>
                    <th className="px-6 py-4 text-left">Student/Senior</th>
                    <th className="px-6 py-4 text-left">Details</th>
                    <th className="px-6 py-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-orange-50">
                    <td className="px-6 py-4 font-semibold">Membership</td>
                    <td className="px-6 py-4">$32.50-37.50 / weekly</td>
                    <td className="px-6 py-4">$150 per month</td>
                    <td className="px-6 py-4 text-sm">
                      Ongoing direct debit membership with access to all classes
                      (includes mat and towel hire)
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="https://clients.mindbodyonline.com/asp/main_shop.asp?pMode=0&tabID=3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors"
                      >
                        SIGN UP
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Drop In</td>
                    <td className="px-6 py-4">$22 / one class</td>
                    <td className="px-6 py-4">-</td>
                    <td className="px-6 py-4 text-sm">One off casual pass</td>
                    <td className="px-6 py-4">
                      <a
                        href="https://clients.mindbodyonline.com/classic/ws?studioid=7268&stype=41&sTG=22&prodId=54"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors"
                      >
                        BUY NOW
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Intro Pass*</td>
                    <td className="px-6 py-4">$39 / 14 days</td>
                    <td className="px-6 py-4">-</td>
                    <td className="px-6 py-4 text-sm">
                      Unlimited classes, valid for 14 days. *For first timers,
                      or those returning after 6-months
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="https://clients.mindbodyonline.com/classic/ws?studioid=7268&stype=41&sTG=22&prodId=376"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors"
                      >
                        BUY NOW
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">10 Class Pass</td>
                    <td className="px-6 py-4">$175 / 1 year</td>
                    <td className="px-6 py-4">-</td>
                    <td className="px-6 py-4 text-sm">
                      10 class pass valid 12 months
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="http://clients.mindbodyonline.com/classic/ws?studioid=7268&stype=41&prodid=61"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors"
                      >
                        BUY NOW
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">20 Class Pass</td>
                    <td className="px-6 py-4">$330 / 1 Year</td>
                    <td className="px-6 py-4">-</td>
                    <td className="px-6 py-4 text-sm">
                      20 class pass valid 12 months
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="http://clients.mindbodyonline.com/classic/ws?studioid=7268&stype=41&prodid=62"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors"
                      >
                        BUY NOW
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">40 Class Pass</td>
                    <td className="px-6 py-4">$570 / 1 year</td>
                    <td className="px-6 py-4">-</td>
                    <td className="px-6 py-4 text-sm">
                      40 class pass valid 12 months
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="http://clients.mindbodyonline.com/classic/ws?studioid=7268&stype=41&prodid=63"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors"
                      >
                        BUY NOW
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">
                      One Month Unlimited
                    </td>
                    <td className="px-6 py-4">$165 / 1 month</td>
                    <td className="px-6 py-4">-</td>
                    <td className="px-6 py-4 text-sm">
                      One off payment with 1 month unlimited access to our
                      classes
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="http://clients.mindbodyonline.com/classic/ws?studioid=7268&stype=41&prodid=56"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors"
                      >
                        BUY NOW
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">
                      Six Month Unlimited
                    </td>
                    <td className="px-6 py-4">$790 / 6 months</td>
                    <td className="px-6 py-4">-</td>
                    <td className="px-6 py-4 text-sm">
                      Six months unlimited access to our classes
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="http://clients.mindbodyonline.com/classic/ws?studioid=7268&stype=41&prodid=102"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors"
                      >
                        BUY NOW
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">
                      12 Month Unlimited
                    </td>
                    <td className="px-6 py-4">$1350.00 / 12 months</td>
                    <td className="px-6 py-4">-</td>
                    <td className="px-6 py-4 text-sm">
                      Twelve months unlimited access to our classes
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="http://clients.mindbodyonline.com/classic/ws?studioid=7268&stype=41&prodid=58"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors"
                      >
                        BUY NOW
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Gift Voucher</td>
                    <td className="px-6 py-4">From $20-$500</td>
                    <td className="px-6 py-4">-</td>
                    <td className="px-6 py-4 text-sm">
                      Gift vouchers available for purchase
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="https://clients.mindbodyonline.com/asp/main_shop.asp?pMode=2&tabID=3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors"
                      >
                        BUY NOW
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              General Terms & Conditions
            </h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <ul className="space-y-3 text-gray-700">
                <li>
                  • All class passes are non-refundable and valid for one year.
                </li>
                <li>
                  • Passes purchased online are activated upon your first visit.
                </li>
                <li>
                  • Direct debit payments, paid weekly / fortnightly / monthly.
                  $20 set up fee. Non transferrable.
                </li>
                <li>
                  • Introductory offers are a one-time offer for first time
                  attendees.
                </li>
                <li>• All prices include GST.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your hot yoga journey today with our introductory offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://clients.mindbodyonline.com/classic/ws?studioid=7268&stype=41&sTG=22&prodId=376"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors"
            >
              BUY INTRO PASS - $39
            </a>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              LEARN MORE ABOUT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

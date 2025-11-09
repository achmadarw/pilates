"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../components/Logo";

export default function Book() {
  // Get current date and calendar data
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(9);
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [selectedClassType, setSelectedClassType] = useState("");
  const [selectedInstructor, setSelectedInstructor] = useState("");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingStep, setBookingStep] = useState<"summary" | "login">(
    "summary"
  );
  const [selectedClass, setSelectedClass] = useState<{
    id: string;
    time: string;
    name: string;
    instructor: string;
    spots: number;
  } | null>(null);
  const [email, setEmail] = useState("");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const classTypes = [
    "All Classes",
    "Hot 26",
    "Flow Yoga",
    "Yin Yoga",
    "Hot Pilates",
    "Meditation",
  ];
  const instructors = [
    "All Instructors",
    "Sarah",
    "Mike",
    "Emma",
    "Lisa",
    "David",
  ];

  // Extended class data for multiple days
  const classData: {
    [key: number]: Array<{
      time: string;
      name: string;
      instructor: string;
      spots: number;
      id: string;
    }>;
  } = {
    9: [
      {
        id: "1",
        time: "9:30 AM",
        name: "Hot 26",
        instructor: "Sarah",
        spots: 15,
      },
      {
        id: "2",
        time: "12:00 PM",
        name: "Flow Yoga",
        instructor: "Mike",
        spots: 12,
      },
      {
        id: "3",
        time: "5:30 PM",
        name: "Hot 26",
        instructor: "Emma",
        spots: 8,
      },
      {
        id: "4",
        time: "7:00 PM",
        name: "Yin Yoga",
        instructor: "Lisa",
        spots: 20,
      },
    ],
    10: [
      {
        id: "5",
        time: "6:30 AM",
        name: "Hot 26",
        instructor: "David",
        spots: 10,
      },
      {
        id: "6",
        time: "9:30 AM",
        name: "Hot 26",
        instructor: "Sarah",
        spots: 15,
      },
      {
        id: "7",
        time: "12:00 PM",
        name: "Hot Pilates",
        instructor: "Lisa",
        spots: 8,
      },
      {
        id: "8",
        time: "4:00 PM",
        name: "Hot 26",
        instructor: "Mike",
        spots: 5,
      },
      {
        id: "9",
        time: "7:00 PM",
        name: "Hot 26",
        instructor: "Emma",
        spots: 18,
      },
    ],
    11: [
      {
        id: "10",
        time: "9:30 AM",
        name: "Hot 26",
        instructor: "Lisa",
        spots: 12,
      },
      {
        id: "11",
        time: "12:00 PM",
        name: "Flow Yoga",
        instructor: "David",
        spots: 15,
      },
      {
        id: "12",
        time: "5:30 PM",
        name: "Hot 26",
        instructor: "Sarah",
        spots: 7,
      },
      {
        id: "13",
        time: "7:00 PM",
        name: "Meditation",
        instructor: "Emma",
        spots: 25,
      },
    ],
    12: [
      {
        id: "14",
        time: "9:30 AM",
        name: "Hot 26",
        instructor: "Mike",
        spots: 14,
      },
      {
        id: "15",
        time: "12:00 PM",
        name: "Yin Yoga",
        instructor: "Lisa",
        spots: 18,
      },
      {
        id: "16",
        time: "4:00 PM",
        name: "Flow Yoga",
        instructor: "Sarah",
        spots: 10,
      },
      {
        id: "17",
        time: "7:00 PM",
        name: "Hot 26",
        instructor: "David",
        spots: 16,
      },
    ],
    13: [
      {
        id: "18",
        time: "9:30 AM",
        name: "Hot 26",
        instructor: "Emma",
        spots: 13,
      },
      {
        id: "19",
        time: "12:00 PM",
        name: "Hot Pilates",
        instructor: "Mike",
        spots: 9,
      },
      {
        id: "20",
        time: "5:30 PM",
        name: "Hot 26",
        instructor: "Lisa",
        spots: 11,
      },
      {
        id: "21",
        time: "7:00 PM",
        name: "Flow Yoga",
        instructor: "Sarah",
        spots: 17,
      },
    ],
  };

  // Filter classes based on selected filters
  const getFilteredClasses = (dayClasses: (typeof classData)[9]) => {
    return dayClasses.filter((classItem) => {
      const matchesClassType =
        selectedClassType === "" ||
        selectedClassType === "All Classes" ||
        classItem.name === selectedClassType;
      const matchesInstructor =
        selectedInstructor === "" ||
        selectedInstructor === "All Instructors" ||
        classItem.instructor === selectedInstructor;
      return matchesClassType && matchesInstructor;
    });
  };

  // Navigate month
  const navigateMonth = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (selectedMonth === 0) {
        setSelectedMonth(11);
        setSelectedYear(selectedYear - 1);
      } else {
        setSelectedMonth(selectedMonth - 1);
      }
    } else {
      if (selectedMonth === 11) {
        setSelectedMonth(0);
        setSelectedYear(selectedYear + 1);
      } else {
        setSelectedMonth(selectedMonth + 1);
      }
    }
  };

  // Handle date selection
  const handleDateSelect = (date: number) => {
    setSelectedDate(date);
  };

  // Handle class booking
  const handleBookClass = (classId: string) => {
    // Find the selected class
    const allClasses = Object.values(classData).flat();
    const classToBook = allClasses.find((c) => c.id === classId);

    if (classToBook) {
      setSelectedClass(classToBook);
      setShowBookingModal(true);
    }
  };

  // Handle confirm booking - show login step
  const handleConfirmBooking = () => {
    setBookingStep("login");
  };

  // Handle login continue
  const handleLoginContinue = () => {
    // In real implementation, this would authenticate and proceed to booking
    if (email) {
      window.open(
        "https://clients.mindbodyonline.com/classic/ws?studioid=7268",
        "_blank"
      );
      setShowBookingModal(false);
      setBookingStep("summary");
      setEmail("");
    }
  };

  // Handle social login
  const handleSocialLogin = (provider: "google" | "apple") => {
    // In real implementation, this would handle OAuth flow
    console.log(`Login with ${provider}`);
    window.open(
      "https://clients.mindbodyonline.com/classic/ws?studioid=7268",
      "_blank"
    );
    setShowBookingModal(false);
    setBookingStep("summary");
    setEmail("");
  };

  // Handle staff sign in
  const handleStaffSignIn = () => {
    // In real implementation, this would redirect to staff portal
    window.open(
      "https://clients.mindbodyonline.com/classic/ws?studioid=7268",
      "_blank"
    );
    setShowBookingModal(false);
    setBookingStep("summary");
    setEmail("");
  };

  // Close modal
  const closeModal = () => {
    setShowBookingModal(false);
    setSelectedClass(null);
    setBookingStep("summary");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-stone-100 text-stone-800 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-stone-100 to-stone-200"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-12 flex justify-center">
              <Logo size="lg" color="dark" />
            </div>
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-light mb-4 leading-tight tracking-wide text-stone-700">
                4 Reasons
              </h1>
              <h2 className="text-3xl md:text-5xl font-light mb-6 leading-tight text-stone-600">
                Pilates is Perfect for Runners
              </h2>
            </div>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-stone-600 font-light">
              Find your balance between strength, flow, and endurance.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Reasons Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Reason 1: Balanced Strength */}
            <div className="space-y-8">
              <div className="text-left">
                <h3 className="text-sm uppercase tracking-widest text-stone-500 mb-2">
                  TRAIN BEYOND THE MILES.
                </h3>
                <h2 className="text-4xl md:text-5xl font-light text-stone-700 mb-6 leading-tight">
                  BALANCED
                  <br />
                  STRENGTH
                </h2>
                <p className="text-lg text-stone-600 leading-relaxed">
                  Runners often overuse certain muscles — Pilates reawakens the
                  ones that keep you balanced and injury-free.
                </p>
              </div>
            </div>

            {/* Reason 2: Flexibility & Flow */}
            <div className="space-y-8 bg-stone-200 p-12 rounded-lg">
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-light text-stone-700 mb-4 leading-tight">
                  FLEXIBILITY
                  <br />& FLOW
                </h2>
                <p className="text-sm uppercase tracking-widest text-stone-500 mb-6">
                  LENGTHEN WHAT FEELS TIGHT
                </p>
                <p className="text-lg text-stone-600 leading-relaxed">
                  Through mindful movement, Pilates restores flexibility and
                  creates space for smoother, freer runs.
                </p>
              </div>
            </div>

            {/* Reason 3: Recovery & Renewal */}
            <div className="space-y-8 bg-stone-200 p-12 rounded-lg">
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-light text-stone-700 mb-4 leading-tight">
                  RECOVERY &<br />
                  RENEWAL
                </h2>
                <p className="text-sm uppercase tracking-widest text-stone-500 mb-6">
                  MOVE TO RECOVER, NOT TO RUSH
                </p>
                <p className="text-lg text-stone-600 leading-relaxed">
                  Gentle yet precise, Pilates helps your body reset — reducing
                  tension, restoring alignment, and preparing you for your next
                  run.
                </p>
              </div>
            </div>

            {/* Reason 4: Core Strength & Stability */}
            <div className="space-y-8">
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-light text-stone-700 mb-4 leading-tight">
                  CORE STRENGTH &<br />
                  STABILITY
                </h2>
                <p className="text-sm uppercase tracking-widest text-stone-500 mb-6">
                  RUN WITH A STRONGER CENTER
                </p>
                <p className="text-lg text-stone-600 leading-relaxed">
                  Pilates builds deep core stability — the foundation that keeps
                  every stride steady and powerful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Classes */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-stone-700 mb-6">
              Book Your Classes
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto font-light">
              View our weekly timetable and book your classes online. All times
              are NZDT.
            </p>
          </div>

          {/* Calendar Widget */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-stone-200">
              {/* Calendar Header */}
              <div className="bg-stone-50 p-6 border-b border-stone-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-light text-stone-700">
                    Find a Class
                  </h3>
                  <button className="text-sm text-stone-600 hover:text-stone-800 font-light">
                    My Account
                  </button>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <select
                      className="border border-stone-300 rounded px-3 py-2 text-sm bg-white text-stone-700 focus:border-stone-500 focus:outline-none"
                      value={selectedClassType}
                      onChange={(e) => setSelectedClassType(e.target.value)}
                    >
                      {classTypes.map((type) => (
                        <option
                          key={type}
                          value={type === "All Classes" ? "" : type}
                        >
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <select
                      className="border border-stone-300 rounded px-3 py-2 text-sm bg-white text-stone-700 focus:border-stone-500 focus:outline-none"
                      value={selectedInstructor}
                      onChange={(e) => setSelectedInstructor(e.target.value)}
                    >
                      {instructors.map((instructor) => (
                        <option
                          key={instructor}
                          value={
                            instructor === "All Instructors" ? "" : instructor
                          }
                        >
                          {instructor}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1">
                    📅 Full Calendar
                  </button>
                </div>

                {/* Month Header */}
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-medium text-gray-800">
                    {monthNames[selectedMonth]} {selectedYear}
                  </h4>
                  <div className="flex items-center gap-2">
                    <button
                      className="p-1 hover:bg-gray-100 rounded"
                      onClick={() => navigateMonth("prev")}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      className="p-1 hover:bg-gray-100 rounded"
                      onClick={() => navigateMonth("next")}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Week Days Header */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Today", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div key={day} className="text-center py-2">
                        <span className="text-sm font-medium text-gray-600">
                          {day}
                        </span>
                      </div>
                    )
                  )}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1">
                  {/* Current week dates */}
                  {[9, 10, 11, 12, 13, 14, 15].map((date) => {
                    const isSelected = date === selectedDate;
                    const hasClasses =
                      classData[date] && classData[date].length > 0;
                    const isToday =
                      date === 9 &&
                      selectedMonth === 10 &&
                      selectedYear === 2025; // November 9, 2025

                    return (
                      <div
                        key={date}
                        onClick={() => handleDateSelect(date)}
                        className={`
                          relative h-12 flex items-center justify-center rounded cursor-pointer transition-colors
                          ${
                            isSelected
                              ? "bg-blue-600 text-white font-bold"
                              : hasClasses
                              ? "bg-blue-50 text-blue-800 hover:bg-blue-100"
                              : "text-gray-400 hover:bg-gray-50"
                          }
                          ${
                            isToday && !isSelected ? "ring-2 ring-blue-400" : ""
                          }
                        `}
                      >
                        <span className="text-sm">{date}</span>
                        {hasClasses && !isSelected && (
                          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Selected Day Classes */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-800">
                    {monthNames[selectedMonth]} {selectedDate}, {selectedYear}
                  </h4>
                  <span className="text-sm text-gray-500">
                    All dates and times are displayed in the location&apos;s
                    timezone.
                  </span>
                </div>

                {/* Selected Day Classes */}
                {(() => {
                  const dayClasses = classData[selectedDate] || [];
                  const filteredClasses = getFilteredClasses(dayClasses);

                  return filteredClasses.length > 0 ? (
                    <div className="space-y-3">
                      {filteredClasses.map((classItem) => (
                        <div
                          key={classItem.id}
                          className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="text-sm font-medium text-gray-800">
                                {classItem.time}
                              </div>
                              <div>
                                <div className="font-medium text-gray-800">
                                  {classItem.name}
                                </div>
                                <div className="text-sm text-gray-600">
                                  with {classItem.instructor}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-sm text-gray-600">
                                {classItem.spots} spots available
                              </span>
                              <button
                                onClick={() => handleBookClass(classItem.id)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                              >
                                Book
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 mb-4">
                        {dayClasses.length === 0
                          ? `There are no available classes on ${monthNames[selectedMonth]} ${selectedDate}, ${selectedYear}`
                          : "No classes match your selected filters"}
                      </p>
                      {dayClasses.length === 0 && (
                        <>
                          <p className="text-sm text-gray-400 mb-4">
                            Next available class
                          </p>
                          <button
                            onClick={() => handleDateSelect(10)}
                            className="text-blue-600 hover:text-blue-800 text-sm px-4 py-2 border border-blue-600 rounded"
                          >
                            Go to November 10, 2025
                          </button>
                        </>
                      )}
                    </div>
                  );
                })()}
              </div>

              {/* MindBody Branding */}
              <div className="px-6 pb-4">
                <div className="flex items-center justify-center">
                  <span className="text-xs text-gray-400">mindbody</span>
                </div>
              </div>
            </div>
          </div>

          {/* Book Now Button */}
          <div className="text-center mt-12">
            <a
              href="https://clients.mindbodyonline.com/classic/ws?studioid=7268"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg"
            >
              BOOK NOW ON MINDBODY
            </a>
            <p className="text-sm text-gray-600 mt-4">
              Click above to access our live booking system with real-time
              availability
            </p>
          </div>
        </div>
      </section>

      {/* Studio Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location & Opening Hours */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Location
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 mb-2">
                    <strong>33 St Andrew Street</strong>
                    <br />
                    Central Dunedin
                    <br />
                    Dunedin 9016
                    <br />
                    New Zealand
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Opening Hours
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-600 mb-4">
                    Reception is open 30 minutes before and after classes.
                    Please see our schedule for class times.
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday</span>
                      <span>5.45am – 9.30pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tuesday</span>
                      <span>5.30am – 9.30pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wednesday</span>
                      <span>5.45am – 9.30pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Thursday</span>
                      <span>5.30am – 9.30pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday</span>
                      <span>5.45am – 8.00pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>7.30am – 8.00pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>7.30am – 8.00pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Book */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                How to Book
              </h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        Online Booking
                      </h4>
                      <p className="text-gray-600 mb-4">
                        Book classes 24/7 through our MindBody system. Cancel up
                        to 12 hours before class.
                      </p>
                      <a
                        href="https://clients.mindbodyonline.com/classic/ws?studioid=7268"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-700 font-semibold transition-colors"
                      >
                        Book Online →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        Mobile App
                      </h4>
                      <p className="text-gray-600 mb-4">
                        Download our app for easy booking, class reminders, and
                        account management.
                      </p>
                      <p className="text-sm text-gray-500">
                        Search &quot;FERVID&quot; in your app store
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-6m-4 0L7 21m-2 0h2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        At Reception
                      </h4>
                      <p className="text-gray-600">
                        Visit our reception desk to book classes, purchase
                        passes, or speak with our friendly staff.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Before You Book
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                New to FERVID?
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  First-time visitors should arrive 15 minutes early for
                  orientation
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  Take advantage of our $39 unlimited 14-day intro pass
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  Bring a water bottle and towel (or rent from us)
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  Wear comfortable, breathable clothing
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  All classes are beginner-friendly
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/pricing"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
                >
                  VIEW INTRO OFFER
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Class Policies
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  Cancel up to 12 hours before class to avoid charges
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  Late arrivals may not be admitted (for safety)
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  Please avoid strong fragrances and perfumes
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  Mobile phones must be on silent mode
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  Stay hydrated before, during, and after class
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/how-to-prepare"
                  className="text-orange-600 hover:text-orange-800 font-semibold transition-colors"
                >
                  Read Full Preparation Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-stone-700 text-stone-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 font-light">
            Join our community and experience the transformative power of
            Pilates. Book your first class today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://clients.mindbodyonline.com/classic/ws?studioid=7268"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-100 text-stone-700 hover:bg-white px-8 py-4 rounded-lg font-light transition-colors text-lg"
            >
              BOOK NOW
            </a>
            <Link
              href="/pricing"
              className="bg-transparent border-2 border-stone-300 hover:bg-stone-100 hover:text-stone-700 text-stone-100 px-8 py-4 rounded-lg font-light transition-colors text-lg"
            >
              VIEW PACKAGES
            </Link>
          </div>
          <p className="text-sm mt-6 opacity-75">
            New students: Try our $39 unlimited 14-day intro pass
          </p>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && selectedClass && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-md w-full relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 text-2xl"
            >
              ×
            </button>

            {/* Logo Section */}
            <div className="flex justify-center py-8">
              <Logo size="md" color="dark" />
            </div>

            {/* Content based on step */}
            {bookingStep === "summary" ? (
              <>
                {/* Summary Section */}
                <div className="px-6 pb-6">
                  <h3 className="text-lg font-light mb-4 pb-2 border-b border-stone-200 text-stone-700">
                    Summary
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <div className="font-light text-stone-700">FERVID</div>
                      <div className="font-medium text-stone-800">
                        {selectedClass.name}
                      </div>
                      <div className="text-sm text-stone-600">
                        with {selectedClass.instructor}
                      </div>
                      <div className="text-sm text-stone-500">
                        {selectedClass.time} - NZDT | MON, NOV {selectedDate}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Next Button */}
                <div className="px-6 pb-6">
                  <button
                    onClick={handleConfirmBooking}
                    className="w-full bg-stone-600 hover:bg-stone-700 text-white py-3 rounded-lg font-light transition-colors"
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Login Section */}
                <div className="px-6 pb-6">
                  <div className="text-center mb-6">
                    <div className="text-lg font-medium text-gray-800 mb-2">
                      Sign in to your account
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  {/* Continue Button */}
                  <button
                    onClick={handleLoginContinue}
                    disabled={!email}
                    className="w-full bg-gray-700 hover:bg-gray-800 disabled:bg-gray-400 text-white py-3 rounded-lg font-medium transition-colors mb-6"
                  >
                    Continue
                  </button>

                  {/* Divider */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">or</span>
                    </div>
                  </div>

                  {/* Social Login Buttons */}
                  <div className="flex gap-4 justify-center mb-6">
                    <button
                      onClick={() => handleSocialLogin("google")}
                      className="w-16 h-16 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleSocialLogin("apple")}
                      className="w-16 h-16 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                      </svg>
                    </button>
                  </div>

                  {/* Staff Sign In */}
                  <div className="text-center">
                    <button
                      onClick={handleStaffSignIn}
                      className="text-gray-600 hover:text-gray-800 text-sm font-medium"
                    >
                      Staff—sign in
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Footer */}
            <div className="text-center pb-6">
              <div className="text-xs text-gray-500 mb-2">
                By clicking &quot;Confirm,&quot; you agree to receiving SMS from
                FERVID to the number on your profile with updates about your
                reservation.{" "}
                <span className="text-blue-600 underline cursor-pointer">
                  SMS Texting Terms
                </span>{" "}
                apply.
              </div>
            </div>

            {/* MindBody Footer */}
            <div className="text-center py-4 border-t bg-gray-50 rounded-b-lg">
              <div className="text-sm text-gray-600 font-medium">mindbody</div>
              <div className="text-xs text-gray-500">© 2025 MINDBODY Inc.</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

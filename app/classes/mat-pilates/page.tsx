import ClassDetailPage from "../../components/ClassDetailPage";

export default function MatPilates() {
  return (
    <ClassDetailPage
      title="MAT PILATES"
      subtitle="Traditional Stott method pilates"
      description="Mat Pilates uses different combinations of approximately 50 simple, repetitive exercises to create muscular strength."
      imageUrl="/images/classes/class-4-optimized.jpg"
      bookingUrl="/book"
      buttonText="BOOK MAT PILATES CLASS"
      duration={["45 Minutes", "60 Minutes"]}
      whatToWear="Comfortable, form-fitting clothing that allows you to see your body alignment. Avoid loose clothing that might get in the way."
      whatToBring={[
        "Yoga mat (we provide mats if needed)",
        "Small towel",
        "Water bottle",
      ]}
      fullDescription={{
        paragraphs: [
          "Mat Pilates is a low-impact exercise method that focuses on building core strength, improving posture, and enhancing overall body awareness. Using your own body weight as resistance, this practice strengthens deep stabilizing muscles.",
          "Based on the traditional Stott Pilates method, our classes emphasize proper alignment, controlled movement, and breath awareness.",
          "This non-heated class is suitable for all fitness levels and is particularly beneficial for those recovering from injury or looking to improve their foundational strength.",
        ],
        sections: [
          {
            title: "Core principles of Pilates",
            content:
              "Concentration, control, centering, flow, precision, and breathing work together to create a mindful movement practice that strengthens both body and mind.",
          },
          {
            title: "Benefits",
            content:
              "Improved core stability, better posture, increased flexibility, enhanced body awareness, reduced back pain, and overall functional strength.",
          },
          {
            title: "Class structure",
            content:
              "Each class begins with centering and breath work, progresses through a series of mat exercises targeting different muscle groups, and ends with relaxation and integration.",
          },
        ],
      }}
      teachers={[
        { name: "Jessica Park", image: "/images/teachers/teacher-3.jpg" },
        { name: "Maya Rodriguez", image: "/images/teachers/teacher-4.jpg" },
        { name: "Rachel Green", image: "/images/teachers/teacher-6.jpg" },
        { name: "Sophie Davis", image: "/images/teachers/teacher-8.jpg" },
      ]}
    />
  );
}

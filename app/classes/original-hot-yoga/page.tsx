import ClassDetailPage from "../../components/ClassDetailPage";

export default function OriginalHotYoga() {
  return (
    <ClassDetailPage
      title="ORIGINAL HOT YOGA"
      subtitle="Traditional Bikram sequence in the heat"
      description="A static sequence of 26 postures and 2 breathing exercises, designed to systematically stretch, tone and realign every aspect of your being."
      imageUrl="/images/classes/class-1-optimized.jpg"
      bookingUrl="/book"
      buttonText="BOOK ORIGINAL HOT YOGA CLASS"
      duration={["60 Minutes", "90 Minutes"]}
      whatToWear="Minimal, form-fitting clothing suitable for high heat and humidity. Think swimwear or athletic shorts and tops."
      whatToBring={[
        "Yoga mat",
        "Large towel for your mat",
        "Small towel for face/hands",
        "Water bottle (bring plenty of water)",
      ]}
      fullDescription={{
        paragraphs: [
          "Original Hot Yoga follows the traditional Bikram sequence of 26 postures and 2 breathing exercises, practiced in a room heated to 38°C with 40% humidity. This systematic approach works every muscle, joint, and organ in your body.",
          "The heat helps to prevent injury, allows for deeper stretching, and promotes detoxification through profuse sweating. Each posture prepares you for the next, creating a moving meditation.",
          "This practice is suitable for all levels - beginners and experienced practitioners work side by side, each finding their own edge within the postures.",
        ],
        sections: [
          {
            title: "The heated environment",
            content:
              "Practiced in 38°C heat with 40% humidity, the room conditions help prevent injury, increase flexibility, and promote deep detoxification. The heat is therapeutic and allows your body to work more deeply.",
          },
          {
            title: "Traditional sequence",
            content:
              "The same 26 postures are practiced in every class, allowing students to track their progress and develop a deeper understanding of each pose over time.",
          },
          {
            title: "Mental benefits",
            content:
              "The challenging environment builds mental strength, discipline, and focus. Regular practice develops patience, determination, and the ability to stay calm under pressure.",
          },
        ],
      }}
      teachers={[
        { name: "Sarah Mitchell", image: "/images/teachers/teacher-1.jpg" },
        { name: "Emma Thompson", image: "/images/teachers/teacher-2.jpg" },
        { name: "Jessica Park", image: "/images/teachers/teacher-3.jpg" },
        { name: "Maya Rodriguez", image: "/images/teachers/teacher-4.jpg" },
        { name: "Zoe Williams", image: "/images/teachers/teacher-5.jpg" },
      ]}
    />
  );
}

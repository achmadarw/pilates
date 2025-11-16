import ClassDetailPage from "../../components/ClassDetailPage";

export default function HotFlow() {
  return (
    <ClassDetailPage
      title="HOT FLOW"
      subtitle="Dynamic yoga with breath synchronization"
      description="Our flow classes are dynamic with a strong focus on synchronising movement with breath."
      imageUrl="/images/classes/class-2-optimized.jpg"
      bookingUrl="/book"
      buttonText="BOOK HOT FLOW CLASS"
      duration={["60 Minutes", "75 Minutes"]}
      whatToWear="Comfortable, breathable clothing that allows for full range of movement. You will sweat in our heated room."
      whatToBring={["Yoga mat", "Towel", "Water bottle"]}
      fullDescription={{
        paragraphs: [
          "Hot Flow yoga is a dynamic practice that combines strength, flexibility, and mindfulness in a heated environment. Classes flow seamlessly from one pose to another, building heat from within while the external temperature supports deep muscle release.",
          "Each class offers variations and modifications to accommodate all levels, from beginners to advanced practitioners.",
          "The heated room (32-35°C) helps to increase flexibility, prevent injury, and promote deep detoxification through sweat.",
        ],
        sections: [
          {
            title: "Benefits of Hot Flow",
            content:
              "Builds strength and flexibility, improves cardiovascular health, promotes detoxification, reduces stress, and enhances mental focus and clarity.",
          },
          {
            title: "What to expect",
            content:
              "A flowing sequence of poses linked with breath, building heat progressively throughout the practice. Expect to sweat and feel energized.",
          },
          {
            title: "Class atmosphere",
            content:
              "Uplifting music, dimmed lighting, and a supportive community environment where you can explore your practice at your own pace.",
          },
        ],
      }}
      teachers={[
        { name: "Emma Thompson", image: "/images/teachers/teacher-2.jpg" },
        { name: "Maya Rodriguez", image: "/images/teachers/teacher-4.jpg" },
        { name: "Zoe Williams", image: "/images/teachers/teacher-5.jpg" },
        { name: "Rachel Green", image: "/images/teachers/teacher-6.jpg" },
        { name: "Lily Chen", image: "/images/teachers/teacher-7.jpg" },
      ]}
    />
  );
}

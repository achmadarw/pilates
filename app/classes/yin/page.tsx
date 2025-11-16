import ClassDetailPage from "../../components/ClassDetailPage";

export default function Yin() {
  return (
    <ClassDetailPage
      title="YIN"
      subtitle="Nourishing and meditative yoga"
      description="Yin yoga is a nourishing and meditative form of yoga which works deep into the connective tissues, fascia and joints."
      imageUrl="/images/classes/class-5-optimized.jpg"
      bookingUrl="/book"
      buttonText="BOOK YIN CLASS"
      duration={["75 Minutes", "90 Minutes"]}
      whatToWear="Comfortable, warm clothing as you'll be holding poses for extended periods. Layers are recommended as body temperature may fluctuate."
      whatToBring={[
        "Yoga mat",
        "Blanket or shawl",
        "Water bottle",
        "Eye pillow (optional)",
      ]}
      fullDescription={{
        paragraphs: [
          "Yin yoga is a quiet, meditative practice that targets the deep connective tissues, joints, and fascia. Poses are held for 3-7 minutes, allowing you to relax completely and let gravity do the work.",
          "This practice complements more active forms of yoga and exercise by restoring balance to both body and mind. It's particularly beneficial for athletes, busy professionals, and anyone seeking deep relaxation.",
          "Yin yoga is based on ancient Chinese philosophies and Taoist principles, working with the meridian system to promote the flow of chi (life energy) throughout the body.",
        ],
        sections: [
          {
            title: "Benefits of Yin practice",
            content:
              "Increases flexibility, reduces stress and anxiety, improves circulation, balances the nervous system, promotes introspection and mindfulness, and complements yang activities.",
          },
          {
            title: "What makes Yin different",
            content:
              "Unlike active yoga styles, Yin is practiced mostly on the floor with minimal muscular effort. Props like bolsters, blocks, and blankets support you in passive poses.",
          },
          {
            title: "Meditation and mindfulness",
            content:
              "Long-held poses create space for meditation and self-reflection. This practice teaches patience, acceptance, and the art of being still in an increasingly busy world.",
          },
        ],
      }}
      teachers={[
        { name: "Lily Chen", image: "/images/teachers/teacher-7.jpg" },
        { name: "Sophie Davis", image: "/images/teachers/teacher-8.jpg" },
        { name: "Emma Thompson", image: "/images/teachers/teacher-2.jpg" },
        { name: "Zoe Williams", image: "/images/teachers/teacher-5.jpg" },
      ]}
    />
  );
}

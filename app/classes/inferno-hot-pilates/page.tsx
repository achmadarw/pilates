import ClassDetailPage from "../../components/ClassDetailPage";

export default function InfernoHotPilates() {
  return (
    <ClassDetailPage
      title="INFERNO HOT PILATES"
      subtitle="HIT training with Pilates principles"
      description="Inferno Hot Pilates is a fun, challenging, full body, low impact, high intensity workout using Pilates principles."
      imageUrl="/images/classes/class-3-optimized.jpg"
      bookingUrl="/book"
      buttonText="BOOK INFERNO HOT PILATES CLASS"
      duration={["45 Minutes"]}
      whatToWear="We recommend that you wear clothing that allows you to move freely. You will work up a sweat so layer so you do something you feel comfortable moving, stretching and sweating in."
      whatToBring={[
        "Yoga mat",
        "Small towel",
        "Water bottle",
        "Light hand weights (we provide 1kg, 2kg and 3kg if you don't have your own)",
      ]}
      fullDescription={{
        paragraphs: [
          "Inferno Hot Pilates is a fun, challenging, full body, low impact, high intensity workout using Pilates principles. Performed in a heated room with energetic music inferno Hot Pilates is an amazing workout using Light weights. Hot Pilates builds muscle, creates a stronger core get lit and feel amazing! Some of our regular students have loved their result and physical and emotional progress so they train again and again all day and all night.",
          "It is designed for people of all fitness levels.",
        ],
        sections: [
          {
            title: "Inferno Hot Pilates classes are hot",
            content:
              "During the heated at 37 degrees celsius it is hot for that reason to sweat!!",
          },
          {
            title: "Inferno Hot Pilates classes are for everyone",
            content:
              "Hot classes full follow suit and welcome newcomers to perform our core and fitness or perform their daily exercises level and challenge themselves to other performent work to your best entity too this line the instruction will provide modifications to cater for all the fitness level.",
          },
          {
            title: "During class we ask that you stay in the hot room",
            content:
              "The always is built would repeat you to fully fit the heat and that the teacher has negotiated the end of class. The first warm phase of cardioval is essential for completing and integrating your practice. Naturally you are welcome to rest at any time! make your way down to your mat and just back in when you are ready.",
          },
        ],
      }}
      teachers={[
        { name: "Sarah Mitchell", image: "/images/teachers/teacher-1.jpg" },
        { name: "Emma Thompson", image: "/images/teachers/teacher-2.jpg" },
        { name: "Jessica Park", image: "/images/teachers/teacher-3.jpg" },
        { name: "Maya Rodriguez", image: "/images/teachers/teacher-4.jpg" },
        { name: "Zoe Williams", image: "/images/teachers/teacher-5.jpg" },
        { name: "Rachel Green", image: "/images/teachers/teacher-6.jpg" },
      ]}
    />
  );
}

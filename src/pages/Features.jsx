import {
  Footprints,
  HeartPulse,
  IceCreamBowl,
  MoonStar,
  Siren,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import Hero from "../components/Hero";

const featuresCards = [
  { type: "img", img: "/sleep.webp" },
  { type: "img", img: "img-4.webp" },
  {
    type: "text",
    small: "Sleep",
    header: "Revitalize Nights, Energize Your Days!",
    text: "Unlock deep insights into sleep patterns, personalized recommendations, and wake up feeling refreshed and revitalized each morning with our sleep feature.",
    bottom: [
      { icon: <HeartPulse />, note: "Heart Rate" },
      { icon: <MoonStar />, note: "Sleep Cicles" },
    ],
  },
  {
    type: "text",
    small: "Activity",
    header: "Move Freely, Thrive Every Day!",
    text: "Set goals, track activity levels, and receive personalized plans. Whether it's steps, workouts, or challenges, our app supports your journey to an active lifestyle.",
    bottom: [
      { icon: <Footprints />, note: "Step Count" },
      { icon: <IceCreamBowl />, note: "Calories Tracking" },
    ],
  },
  { type: "img", img: "active-l.webp" },
  { type: "img", img: "img-2.jpeg" },
  { type: "img", img: "img-1.jpeg" },
  { type: "img", img: "img-3.webp" },
  {
    type: "text",
    small: "Mindfulness",
    header: "Mindful Moments, Daily Serenity!",
    text: "Indulge in guided meditations, breathing exercises, and stress reduction tools. Cultivate mindfulness for a balanced and serene everyday life.",
    bottom: [
      { icon: <Siren />, note: "Guided Meditation" },
      { icon: <HeartPulse />, note: "Stress Level Tracking" },
    ],
  },
];

const Card = ({ content, className }) => {
  switch (content.type) {
    case "img":
      return (
        <motion.div
          className={`${""} relative`}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
        >
          <img
            src={content.img}
            alt={content.img}
            className="size-full rounded-3xl object-cover object-topj object-bottom max-h-[600px]"
          />
        </motion.div>
      );
    case "text":
      return (
        <motion.div
          className={`rounded-3xl p-8 flex flex-col justify-between border bg-light ${
            content.small === "Sleep"
              ? "bg-gray-500"
              : content.small === "Activity"
              ? "bg-gray-400"
              : content.small === "Mindfulness"
              ? "bg-slate-800"
              : ""
          } ${className}`}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
        >
          <small className="small mb-6 shadow ring">{content.small}</small>
          <h2 className="text-4xl font-normal mb-4 text-white">
            {content.header}
          </h2>
          <p className="text-white/80">{content.text}</p>
          <div className="mt-12 flex flex-col text-white gap-2">
            {content.bottom.map((ic, i) => (
              <span key={i} className="inline-flex gap-2">
                {ic.icon} <span className="">{ic.note}</span>{" "}
              </span>
            ))}
          </div>
        </motion.div>
      );
    default:
      return null;
  }
};
const Features = () => {
  return (
    <div className="mt-36 flex flex-col items-center min-h-screen">
      <small className="small">Features</small>
      <SectionHeader
        header="Your Path to Wellness: <br />
Uncover Features."
        p1="Discover a suite of powerful features designed to optimize sleep, "
        p2="boost activity, and enhance mindfulness daily."
      />
      <div className="my-12 grid sm:grid-cols-2 xl:grid-cols-3 gap-6 px-2">
        {featuresCards.map((card, i) => (
          <Card
            content={card}
            key={i}
            className={`${card.type == "text" ? "hidden" : ""}`}
          />
        ))}
      </div>
      <Hero />
    </div>
  );
};

export default Features;

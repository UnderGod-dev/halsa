import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const featureDetails = [
  {
    img: "/img-1.jpeg",
    text: [
      {
        header: "Health Benefits",
        text: "Explore personalized insights, tips, and trends, unlocking the path to holistic well-being and optimal health.",
      },
    ],
  },
  {
    img: "/img-4.webp",
    text: [
      {
        header: "Sleep Tracking",
        text: "Unlock deep insights into your sleep patterns, optimize rest, and wake up revitalized every morning.",
      },
    ],
  },
  {
    img: "/img-2.jpeg",
    text: [
      {
        header: "Activity Tracking",
        text: "Seamlessly monitor your activity, set goals, and achieve new heights with personalized tracking and insights.",
      },
    ],
  },
  {
    img: "/img-3.webp",
    text: [
      {
        header: "Mindfulness Training",
        text: "Elevate your mind with guided meditation sessions, fostering tranquility and focus for a balanced life.",
      },
    ],
  },
];

const Features = () => {
  return (
    <div className="mt-20 lg:mt-32 min-h-screen flex flex-col items-center">
      <small className="small text-center">Features</small>
      <SectionHeader
        header="Precision for Healthy Living"
        p1="Explore our app's precision features. From sleep to mindfulness, experience comprehensive well-being at its finest."
      />
      <div className="grid xl:grid-cols-2 gap-8 px-2 md:px-12">
        {featureDetails.map((details, i) => (
          <motion.div
            key={i}
            className="grid sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.2 },
            }}
          >
            <img
              src={details.img}
              alt="feature-img"
              className={`rounded-xl size-full max-h-[500px] max-w-full object-cover object-center ${
                i > 1 ? "xl:order-2" : ""
              } ${i === 1 || i === 3 ? "sm:order-2" : ""}`}
            />
            <div
              className={`p-8 border rounded-xl h-full flex flex-col content-end ${
                i === 1 ? "bg-gray-800" : i === 2 ? "bg-gray-700" : "bg-light"
              }`}
            >
              {details.text.map((detail) => (
                <>
                  <h3
                    className={`text-2xl lg:text-3xl font-light ${
                      i === 1 || i === 2 ? "text-white" : ""
                    }`}
                  >
                    {detail.header}
                  </h3>
                  <div className="h-full place-content-end">
                    <p
                      className={`text-lg lg:text-xl mb-8 ${
                        i === 1 || i === 2 ? "text-white/60" : "text-black/70"
                      }`}
                    >
                      {detail.text}
                    </p>
                    <span className="relative group py-2 inline-block">
                      <a
                        href="/"
                        className={`text-base  ${
                          i === 1 || i === 2
                            ? "text-white border-b-white"
                            : "border-b-black"
                        }`}
                      >
                        More Information
                      </a>
                      <div
                        className={`absolute h-0.5 w-full ${
                          i === 1 || i === 2 ? "bg-white" : "bg-black"
                        } rounded-full 
    origin-left 
    transition-[width] 
    duration-700 
    ease-in-out 
    group-hover:w-1/4`}
                      ></div>
                    </span>
                  </div>
                </>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;

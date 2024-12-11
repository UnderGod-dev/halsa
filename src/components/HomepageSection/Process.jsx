import { QuoteIcon, StarIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Process = () => {
  const processes = [
    {
      header: "Download the App",
      text: "Begin your wellness journey by downloading our app from your device's app store. Install it and prepare for a transformative experience.",
      variant: "download",
    },
    {
      header: "Create Your Profile",
      text: "Personalize your experience by creating a profile. Input essential details, and let us tailor the app to your unique well-being goals.",
      variant: "card",
    },
    {
      header: "Set Personal Goals",
      text: "Establish personal goals for sleep, activity, and mindfulness. Define the milestones that will guide your journey toward a healthier and happier you.",
      variant: "card",
    },
    {
      header: "Track, Analyze, Thrive",
      text: "Start tracking your daily habits. Analyze the insights our app provides, and use them to make informed decisions as you embark on the path to thriving well-being.",
      variant: "card",
    },
    {
      header: "Join the Community",
      text: "Connect, share, and thrive—join our vibrant wellness community. Experience the transformative power of collective well-being.",
      variant: "community",
    },
  ];

  //   thought I needed framer but sticky positioning is all enough for now, i will keep it should incase some bug with the css method
  //   const sectionRef = useRef(null);
  //   const imageContainerRef = useRef(null);
  //   const cardContainerRef = useRef(null);

  //   const { scrollYProgress } = useScroll({
  //     target: sectionRef,
  //     offset: ["start start", "end end"],
  //   });

  //   const imageScale = useTransform(
  //     scrollYProgress,
  //     [0, 0.1, 0.9, 1],
  //     [1, 1, 0.9, 0.9]
  //   );

  //   const imageOpacity = useTransform(
  //     scrollYProgress,
  //     [0, 0.1, 0.9, 1],
  //     [1, 1, 0.7, 0.7]
  //   );
  return (
    <div
      className="grid md:grid-cols-2 min-h-screen mt-32 gap-6 px-2"
      //   ref={sectionRef}
    >
      <motion.div
        className=""
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.2 },
        }}
      >
        <div
          className="md:sticky md:top-0 relative"
          // ref={imageContainerRef}
        >
          {" "}
          <img
            src="/yoga.jpeg"
            alt="yoga"
            className="size-full rounded-3xl md:h-screen max-h-screen object-cover"
          />
          <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 p-4 lg:p-8 backdrop-blur rounded-2xl w-[80%]">
            <QuoteIcon fill="white" stroke="white" />
            <p className="text-white/80 text-xl mt-2">
              Halsa guides my holistic well-being. A game-changer in my daily
              life.
            </p>
            <div className="flex gap-2 mt-4">
              <img
                src="/user-2.webp"
                alt="profile-pic"
                className="rounded-full size-12 ring-2 ring-white/70"
              />
              <div className="flex flex-col justify-end">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <StarIcon
                      className="block"
                      fill="goldenrod"
                      stroke="goldenrod"
                      key={index}
                      size={12}
                    />
                  ))}
                </div>
                <cite className="text-white/60">Emma Thompson</cite>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="bg-light p-4 md:p-8 xl:p-16 rounded-3xl space-y-4 overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
        >
          <small className="small">Our Process</small>
          <h2 className="text-4xl lg:text-6xl  mt-12">5 Easy Steps</h2>
          <h2 className="text-4xl lg:text-6xl ">To Get Started</h2>
          <p className="text-lg lg:text-xl text-black/80 font-light">
            Simple guide for a transformative journey — follow 5 easy steps to
            begin.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {processes.map((process, i) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.2 },
              }}
              className="border rounded-2xl p-8 bg-white"
              key={i}
            >
              <small className="small mb-4 inline-block">Step {i + 1}</small>
              <h3 className="mb-2 text-2xl">{process.header}</h3>
              <p className="text-black/50 md:text-lg">{process.text}</p>
              {process.variant === "download" ? (
                <div className="mt-4 flex flex-col md:flex-row gap-4">
                  <img src="/appstore.svg" alt="" className="h-12 md:h-auto" />
                  <img src="/appstore.svg" alt="" className="h-12 md:h-auto" />
                </div>
              ) : process.variant === "community" ? (
                <p className="rounded-full p-3 border bg-light w-fit mt-4 text-sm md:text-base">
                  Go to Community
                </p>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;

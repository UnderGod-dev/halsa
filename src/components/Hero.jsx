import { StarIcon } from "lucide-react";
import Button from "./Botton";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const Hero = () => {
  const img = ["user-1", "user-2", "user-3", "user-4"];
  return (
    <div className="bg-[url(/hero-pic.jpeg)] bg-cover bg-top bg-no-repeat lg:min-h-screen w-full relative rounded-3xl pt-10 lg:pt-20 mt-24">
      <div className="bg-gray-100/40 absolute inset-0 -z-10"></div>
      <div
        className="absolute bottom-0 w-[70%] left-1/2 -translate-x-1/2"
        // initial={{ opacity: 0, y: 100 }}
        // whileInView={{
        //   opacity: 1,
        //   y: 0,
        //   x: -1,
        //   transition: { duration: 1, delay: 0.2 },
        // }}
      >
        <img src="/dashboard.webp" alt="dashboard-pic" className="size-full" />
      </div>
      <div className="flex flex-col items-center text-center z-40 pb-48 sm:pb-60 md:pb-80">
        <small className="small">New Version 3.0</small>
        <SectionHeader
          header="Your Health Center. <br />
            All In One App."
          p1="Your Journey to Optimal Living Starts Here:"
          p2="Explore Our Integrated Health Hub."
        />
        <div className="flex gap-2">
          <motion.div
            className=""
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.2 },
            }}
          >
            <Button
              content="Get Started"
              className="bg-gray-800 text-white font-extralight text-sm md:text-base"
            />
          </motion.div>

          <motion.div
            className=""
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.2 },
            }}
          >
            <Button
              content="See Features"
              className="bg-light text-black font-extralight text-base"
            />
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col md:flex-row items-center mt-8 md:mt-"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
        >
          <div className="flex items-center pl-[1rem] md:pl-0">
            {img.map((image, id) => (
              <div className={`size-10 `} key={id}>
                <img
                  src={`/${image}.webp`}
                  className="rounded-full object-cover w-full h-full ring-2"
                  style={{ marginLeft: id !== 0 ? `${id * -0.75}rem` : 0 }}
                  alt={`Avatar ${id}`}
                />
              </div>
            ))}
          </div>
          <div className="">
            <div className="flex justify-center md:justify-start my-4 md:my-0">
              {[1, 2, 3, 4, 5].map((index) => (
                <StarIcon
                  className="block"
                  fill="goldenrod"
                  stroke="goldenrod"
                  key={index}
                  size={16}
                />
              ))}
            </div>
            <p className="text-black/50">Trusted By 1 Millions Users</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

import { motion } from "framer-motion";

const Misson = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 mt-36 max-w-screen-xl xl:mx-auto px-2">
      <motion.div
        className=""
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.2 },
        }}
      >
        <small className="small">Our Mission</small>
        <h2 className="text-4xl lg:text-5xl font-normal mt-4">
          Empowering Wellness Journeys Daily
        </h2>
      </motion.div>
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.2 },
        }}
      >
        <p className="text-xl text-black/80">
          Our mission is to inspire healthier, happier lives by providing
          innovative tools and insights that empower individuals to take charge
          of their well-being.
        </p>
        <p className="text-black/50">
          We believe in the transformative power of personalized health
          experiences, guiding each person on a unique journey toward optimal
          living. Through cutting-edge technology and a commitment to
          user-centric design, we aim to make wellness accessible, enjoyable,
          and sustainable.
        </p>
        <p className="text-black/50">
          Join us in reshaping the narrative of health, where every individual
          has the knowledge and support to thrive. Together, let&apos;s redefine
          well-being and create a world where everyone can live their best life.
        </p>
      </motion.div>
    </div>
  );
};

export default Misson;

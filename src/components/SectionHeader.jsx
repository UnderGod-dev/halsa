import { motion } from "framer-motion";

const SectionHeader = ({ header, p1, p2, className }) => {
  return (
    <motion.div
      className="flex flex-col my-10 text-center max-w-screen-md"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.2 },
      }}
      viewport={{ once: true }}
    >
      <h2
        className="text-5xl lg:text-6xl font-normal mb-6"
        dangerouslySetInnerHTML={{
          __html: header,
        }}
      />

      <p className={` text-lg md:text-2xl px-4 ${className}`}>{p1}</p>
      <p className={` text-lg md:text-2xl px-4 ${className}`}>{p2}</p>
    </motion.div>
  );
};

export default SectionHeader;

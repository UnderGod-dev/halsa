"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does sleep tracking work?",
    answer:
      "Our app uses advanced algorithms and device sensors to analyze sleep patterns, providing detailed insights.",
  },
  {
    question: "Can I customize my activity goals?",
    answer:
      "Absolutely! Set personalized activity goals based on your fitness level, preferences, and well-being targets.",
  },
  {
    question: "What is included in the mindfulness tools?",
    answer:
      "Access guided meditations, breathing exercises, and stress reduction tools to enhance your mindfulness practice.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "We prioritize data security. Your information is encrypted and handled with utmost confidentiality to ensure privacy.",
  },
];

const FAQ = ({ slice = false, itemsToShow = faqs.length }) => {
  const displayFaqs = slice ? faqs.slice(0, itemsToShow) : faqs;
  const [openIndex, setOpenIndex] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setIsClicked((prev) => !prev);
  };

  return (
    <section className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.2 },
        }}
        className="container mx-auto px-4"
      >
        <span className="rounded-full border bg-light block w-fit mx-auto px-2">
          FAQ
        </span>
        <h2 className="text-4xl font-light md:text-6xl text-center text-gray-800 mb-12">
          Frequently <br /> Asked Questions
        </h2>

        <div className="flex flex-col gap-6 mx-auto w-[350px] sm:w-[500px] xl:w-[700px]">
          {displayFaqs.map((item, index) => (
            <div
              key={index}
              className={`border rounded-3xl shadow-md overflow-hidden`}
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center px-6 py-3 text-left focus:outline-none bg-light ${
                  index === 0 ? "" : ""
                }`}
                // whileHover={{ backgroundColor: "#1f2937" }}
                // whileTap={{ scale: 0.99 }}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {item.question}
                </span>
                <div className=" text-gray-900 p-1">
                  {/* <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="" />
                  </motion.div> */}
                  {!isClicked ? <ChevronDown /> : <ChevronUp />}
                </div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut",
                      },
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      transition: {
                        duration: 0.2,
                        ease: "easeInOut",
                      },
                    }}
                    className="px-6 py-6 text-black/70"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;

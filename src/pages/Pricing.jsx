import { CheckIcon } from "lucide-react";
import Button from "../components/Botton";
import SectionHeader from "../components/SectionHeader";
import FAQ from "../components/FAQ";
import { useState } from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const [plan, setPlan] = useState("monthly");
  // const togglePlan = () => {
  //   setPlan((curr) => (curr === "monthly" ? "yearly" : "monthly"));
  // };
  const pricingList = [
    {
      type: "lite",
      price: [6, 3],
      text: "Start your wellness journey with essential features for optimal sleep, activity, and mindfulness.",
      list: [
        "Sleep Tracking",
        "Basic Activity Insights",
        "Mindfulness Tools",
        "Community Access",
        "Monthly Progress Reports",
      ],
    },
    {
      type: "premium",
      price: [10, 8],
      text: "Unlock the full potential of well-being with advanced features tailored to elevate every aspect.",
      list: [
        "Advanced Sleep Analytics",
        "Personalized Activity Plans",
        "Guided Meditation",
        "Premium Community",
        "Weekly Progress Reports",
      ],
    },
    {
      type: "expert",
      price: [20, 16],
      text: "Experience total wellness with a comprehensive set of features for a transformative and empowering journey.",
      list: [
        "Advanced Sleep Analytics",
        "Personalized Activity Plans",
        "Guided Meditation Sessions",
        "VIP Community Access",
        "Daily Progress Reports",
      ],
    },
  ];
  return (
    <main className="page-style flex flex-col items-center">
      <SectionHeader
        header={"Your Wellness, Your Price: <br /> Explore Plans"}
        p1={
          "Tailored pricing for your unique wellness journey. Discover plans "
        }
        p2={"that cater to your health goals."}
      />
      <section className="mt-16">
        <div className="flex justify-center gap-2 overflow-x-hidden  md:overflow-x-visible">
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
              className="bg-gray-800 text-white"
              content={"Monthly"}
              onClick={() => setPlan("monthly")}
              disable={plan === "monthly"}
            />
          </motion.div>
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
              className="border text-gray-900"
              content={"Yearly"}
              onClick={() => setPlan("yearly")}
              disable={plan === "yearly"}
            />
          </motion.div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {pricingList.map((pricing, i) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.2 },
              }}
              className={`rounded-3xl p-8 flex flex-col justify-between ${
                pricing.type === "premium"
                  ? "bg-gray-800 text-white"
                  : "bg-light border text-gray-900"
              }`}
              key={i}
            >
              <div className="">
                {plan === "yearly" && (
                  <span
                    className={`block w-fit ml-auto rounded-full p-2 ${
                      pricing.type === "premium"
                        ? "text-gray-900 bg-white"
                        : "text-white bg-gray-800"
                    } text-sm`}
                  >
                    -20%
                  </span>
                )}
                <small className="border border-white/80 backdrop-blur  rounded-full capitalize text-sm p-1.5 tracking-wider">
                  {pricing.type}
                </small>
                <span className="block my-4 text-4xl">
                  ${plan === "monthly" ? pricing.price[0] : pricing.price[1]}{" "}
                  <span className="text-2xl font-light"> / Month</span>
                </span>
                <p
                  className={`${
                    pricing.type === "premium"
                      ? "text-white/80"
                      : "text-black/80"
                  } text-base mb-4 tracking-wide leading-8`}
                >
                  {pricing.text}
                </p>
                <ul className="flex flex-col mb-8 gap-2">
                  {pricing.list.map((list, i) => (
                    <li className="inline-flex gap-2 font-light" key={i}>
                      <CheckIcon /> <span>{list}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                className={`${
                  pricing.type === "premium"
                    ? "text-gray-900 bg-white"
                    : "text-white bg-gray-800"
                } text-base w-full`}
                content={"get Started"}
              />
            </motion.div>
          ))}
        </div>
      </section>
      <FAQ />
    </main>
  );
};

export default Pricing;

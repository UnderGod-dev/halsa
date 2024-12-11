import { QuoteIcon, StarIcon } from "lucide-react";
import Button from "../Botton";
import { motion } from "framer-motion";

const Card = ({ content }) => {
  switch (content.type) {
    case "img": {
      return (
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
        >
          <img
            src={content.mainImg}
            alt={content.mainImg}
            className="size-full rounded-3xl object-cover object-topj object-bottom max-h-[600px]"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 p-4 backdrop-blur-2xl rounded-2xl w-[80%]">
            <QuoteIcon fill="white" stroke="white" />
            <p className="text-white/80 text-base mt-2">{content.note}</p>
            <div className="flex gap-2 mt-4">
              <img
                src={content.smallImg}
                alt="profile-pic"
                className="rounded-full size-10 ring-2 ring-white/70"
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
                <cite className="text-white/60">{content.name}</cite>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }
    case "card": {
      return (
        <motion.div
          className="rounded-3xl p-8 flex flex-col justify-between border bg-light"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
        >
          <h2 className="text-4xl font-normal">{content.header}</h2>
          <div className="place-content-end">
            <h4 className="text-2xl mb-4">{content.subHeader}</h4>
            <p className="text-black/80">{content.text}</p>
          </div>
        </motion.div>
      );
    }
    case "button": {
      return (
        <motion.div
          className="rounded-3xl p-8 bg-gray-800 flex flex-col justify-between text-white"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
        >
          <div className="">
            <h2 className="mb-4 text-2xl">{content.header}</h2>
            <p className="text-white/80 mb-6">{content.text}</p>
          </div>
          <Button content="Join Now" className="bg-white text-black" />
        </motion.div>
      );
    }
    default:
      return null;
  }
};
const Testimonials = () => {
  const testimonials = [
    {
      mainImg: "/ryan.webp",
      note: "A must-have for a healthier life!",
      smallImg: "/ryan-s.webp",
      name: "Ryan Carter",
      type: "img",
    },
    {
      header: "1 Mio",
      subHeader: "Members",
      text: "Join our thriving community of 1 million members prioritizing well-being, making positive lifestyle changes together for a healthier future.",
      type: "card",
    },
    {
      mainImg: "/img-3.webp",
      note: "Halsa Navigates My Holistic Health!",
      smallImg: "/emily-s.webp",
      name: "Emily Johnson",
      type: "img",
    },
    {
      mainImg: "/alex.webp",
      note: "Grateful for this transformative journey.",
      smallImg: "/user-1.webp",
      name: "Alex Rodriguez",
      type: "img",
    },
    {
      header: "100%",
      subHeader: "Better Sleep",
      text: "Experience the joy of 100% good sleep with our app's personalized insights, tools, and support for optimal restfulness nightly.",
      type: "card",
    },
    {
      mainImg: "/olivia.webp",
      note: "Halsa empowers my daily health decisions.",
      smallImg: "/olivia-s.webp",
      name: "Olivia Martinez",
      type: "img",
    },
    {
      mainImg: "/christina.webp",
      note: "Customized insights, community support!",
      smallImg: "/christina.webp",
      name: "Christina Evans",
      type: "img",
    },
    {
      header: "Join Our Members",
      text: "Join our vibrant community — empowering members to prioritize well-being and make positive, lasting lifestyle changes together.",
      type: "button",
    },
  ];

  return (
    <div className="my-12 grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {testimonials.map((testimonial, i) => (
        <Card content={testimonial} key={i} />
      ))}
    </div>
  );
};

export default Testimonials;

import { QuoteIcon, StarIcon } from "lucide-react";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";
import Button from "../components/Botton";

const Card = ({ content }) => {
  switch (content.type) {
    case "card":
      return (
        <motion.div
          className="rounded-3xl bg-light p-8 flex flex-col justify-between border"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
        >
          {content.card.map((card) => (
            <>
              <div className="">
                <QuoteIcon fill="black" />
                <h2 className="text-2xl text-black mt-10">{card.header}</h2>
                <p className="text-black/80 text-base mt-2">{card.text}</p>
              </div>

              <div className="flex gap-2 mt-4">
                {card.user.map((user) => (
                  <>
                    <img
                      src={user.sImg}
                      alt="profile-pic"
                      className="rounded-full size-10 ring-2 ring-black/70"
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
                      <cite className="text-black/60">{user.name}</cite>
                    </div>
                  </>
                ))}
              </div>
            </>
          ))}
        </motion.div>
      );
    case "img":
      return (
        <motion.div
          className=""
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
            className="size-full rounded-3xl object-center object-topj object-cover max-h-[600px]"
          />
        </motion.div>
      );
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
const Members = () => {
  const members = [
    { img: "/yoga.jpeg", type: "img" },
    {
      type: "card",
      card: [
        {
          header: "My Wellness Oasis Every Day!",
          text: "Daily support, tailored insights—Halsa revolutionized my well-being. A must-have for a healthier life!",
          user: [{ sImg: "/user-2.webp", name: "Emma Thompson" }],
        },
      ],
    },

    {
      img: "/img-3.webp",
      type: "img",
    },
    {
      type: "card",
      card: [
        {
          header: "Empowering Journeys with Halsa App!",
          text: "Halsa empowers my fitness journey—personalized plans, real results. Grateful for this transformative wellness ally.",
          user: [{ sImg: "/emily-s.webp", name: "Emily Johnson" }],
        },
      ],
    },
    {
      type: "card",
      card: [
        {
          header: "Halsa Navigates My Holistic Health!",
          text: "From sleep to mindfulness, Halsa guides my holistic well-being. A game-changer in my daily life.",
          user: [{ sImg: "/user-1.webp", name: "Alex Rodriguez" }],
        },
      ],
    },
    {
      img: "/alex.webp",
      type: "img",
    },
    {
      type: "card",
      card: [
        {
          header: "Restful Nights, Energetic Mornings!",
          text: "Halsa's sleep insights transformed my nights. Now, every morning starts with boundless energy. Incredible!",
          user: [{ sImg: "/ryan-s.webp", name: "Milian Knut" }],
        },
      ],
    },
    {
      img: "/ryan.webp",
      type: "img",
    },

    {
      img: "/jas.webp",
      type: "img",
    },
    {
      type: "card",
      card: [
        {
          header: "Wellness Simplified: My Halsa Experience!",
          text: "Streamlined wellness with Halsa. Easy tracking, clear goals—making health enjoyable and achievable every day",
          user: [{ sImg: "/jas-s.webp", name: "Jasmine Lee" }],
        },
      ],
    },
    {
      img: "/chris.webp",
      type: "img",
    },
    {
      type: "card",
      card: [
        {
          header: "Data-Driven Decisions with Halsa App!",
          text: "Taking charge of my health with Halsa's insights and community support. Phenomenal app for wellness.",
          user: [{ sImg: "/user-4.webp", name: "Christina Evans" }],
        },
      ],
    },
    {
      header: "Join Our Members",
      text: "Join our vibrant community — empowering members to prioritize well-being and make positive, lasting lifestyle changes together.",
      type: "button",
    },
    {
      img: "/olivia.webp",
      type: "img",
    },
    {
      type: "card",
      card: [
        {
          header: "My Personalized Health Coach!",
          text: "Halsa understands me. Customized insights, community support—exceptional for a personalized wellness journey.",
          user: [{ sImg: "/user-2.webp", name: "Olivia Martinez" }],
        },
      ],
    },
    {
      img: "/box.webp",
      type: "img",
    },
  ];

  return (
    <main className="page-style flex flex-col justify-center items-center mx-4">
      <small className="small">Members</small>
      <SectionHeader
        className={"text-black/70"}
        header={"Wellness Tribe: <br /> Our Community"}
        p1={"Connect with like-minded individuals, sharing successes and "}
        p2={"supporting each other on the path to wellness."}
      />
      <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {members.map((member, i) => (
          <Card content={member} key={i} />
        ))}
      </section>
      <Hero />
    </main>
  );
};

export default Members;

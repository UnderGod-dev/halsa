import Button from "../components/Botton";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";

const team = [
  { img: "/sophia.webp", name: "Sophia Reynolds", job: " Product Designer" },
  {
    img: "/ava.webp",
    name: "Ava Martinez",
    job: " Customer Support Specialist",
  },
  { img: "/emma.webp", name: "Emma Turner", job: " Wellness Content Creator" },
  { img: "/olivia-a.webp", name: "Olivia Mitchell", job: " Data Analyst" },
  {
    img: "/christina.webp",
    name: "Isabella Carter",
    job: " Software Engineer",
  },
  { img: "/grace.webp", name: "Grace Davis", job: " Marketing Manager" },
];
const About = () => {
  return (
    <main className="mt-28 min-h-screen mx-4">
      <section className="relative flex flex-col justify-center items-center">
        <img
          src="/about-hero.webp"
          alt="about-pic"
          className="rounded-3xl object-cover size-full lg:h-[60vh]"
        />
        <div className="absolute size-full inset-0 bg-black/20 rounded-3xl"></div>
        <div className="absolute text-white flex flex-col justify-center items-center">
          <small className="rounded-full px-2 bg-black/40 border ">About</small>
          <h1 className="text-2xl md:text-6xl font-light mt-4">
            Holistic Wellness: <br /> Our Vision Unveiled
          </h1>
          <p className="hidden md:block font-light text-3xl text-center mt-6">
            Explore the origins of our app, our vision for holistic <br />{" "}
            wellness, and the team{" "}
          </p>
        </div>
      </section>
      <section className="grid md:grid-cols-2 mt-20 gap-4 mb-20">
        <h2 className="text-3xl font-light md:text-4xl max-w-sm">
          Unveiling Wellness Excellence
        </h2>
        <div className="leading-8">
          <p className="text-lg md:text-xl font-normal">
            Our story unfolds as a testament to the transformative power of
            wellness innovation. Founded on the belief that everyone deserves
            personalized well-being, we embark on a journey dedicated to
            empowering lives.
          </p>
          <p className="text-base text-black/50 mt-4">
            {" "}
            From the inception of our wellness app to the vibrant team steering
            its evolution, our narrative is one of passion, commitment, and
            continuous growth. We&apos;re more than a team; we&apos;re a
            community driven by the shared vision of reshaping the future of
            well-being. Explore our journey—where every milestone, challenge,
            and success contributes to a collective legacy of empowerment and
            excellence in the realm of holistic wellness.
          </p>
        </div>
      </section>
      <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <motion.div
          className="rounded-3xl p-8 flex flex-col justify-between border bg-light"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
        >
          <h2 className="text-4xl font-light">
            Our <br /> Team
          </h2>

          <p className="text-black/80">
            Dedicated individuals passionate about holistic well-being. Meet the
            diverse team driving innovation and shaping the future of wellness.
          </p>
        </motion.div>
        {team.map((staff, i) => (
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.2 },
            }}
            key={i}
          >
            <img
              src={staff.img}
              alt={staff.img}
              className="size-full rounded-3xl"
            />
            <div className="absolute rounded-2xl bottom-4 w-[80%] left-1/2 -translate-x-1/2 backdrop-blur-3xl p-4 text-white">
              <p className="">{staff.name}</p>
              <p className="text-white/80">{staff.job}</p>
            </div>
          </motion.div>
        ))}
        <motion.div
          className="rounded-3xl p-8 flex flex-col justify-between border bg-[#6b818c]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
        >
          <div className="text-white">
            <h2 className="text-4xl font-normal">Our Team</h2>
            <p className="mt-8 text-white/80 text-lg">
              Embark on a transformative journey with us. Join the team shaping
              the future of wellness innovation.
            </p>
          </div>

          <Button content={"Join The Team"} className="bg-white" />
        </motion.div>
      </section>
      <Hero />
    </main>
  );
};

export default About;

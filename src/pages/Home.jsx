import Features from "../components/Features";
import Hero from "../components/Hero";
import Misson from "../components/HomepageSection/Misson";
import Process from "../components/HomepageSection/Process";
import Testimonials from "../components/HomepageSection/Testimonials";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <main className="">
      <Hero />
      <Logo />
      <Features />
      <Misson />
      <Process />
      <Testimonials />
      <Hero />
    </main>
  );
};

export default Home;

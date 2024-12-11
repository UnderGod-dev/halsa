import Features from "./components/Features";
import Hero from "./components/Hero";
import Misson from "./components/HomepageSection/Misson";
import Process from "./components/HomepageSection/Process";
import Testimonials from "./components/HomepageSection/Testimonials";
import Logo from "./components/Logo";

const App = () => {
  return (
    <div className="mx-4 xl:mx-16">
      <Hero />
      <Logo />
      <Features />
      <Misson />
      <Process />
      <Testimonials />
      <Hero />
    </div>
  );
};

export default App;

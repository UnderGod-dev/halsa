import AcmeCorpLogo from "/svgs/acme-corp-logo.svg";
import EchoValleyLogo from "/svgs/echo-valley-logo.svg";
import QuantumLogo from "/svgs/quantum-logo.svg";
import OutsideLogo from "/svgs/outside-logo.svg";
import CelestialLogo from "/svgs/celestial-logo.svg";
import { motion } from "framer-motion";

export const companies = [
  {
    name: "Acme Corp",
    logo: AcmeCorpLogo,
  },
  {
    name: "Echo Valley",
    logo: EchoValleyLogo,
  },
  {
    name: "Quantum",
    logo: QuantumLogo,
  },
  {
    name: "Outside",
    logo: OutsideLogo,
  },
  {
    name: "Celestial",
    logo: CelestialLogo,
  },
];

const Logo = () => {
  return (
    <div className="flex mt-10 mx-4 overflow-x-clip lg:mx-0 [mask-image:linear-gradient(to_right,transparent,white_10%,black_90%,transparent)]">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="flex gap-12 md:gap-36 flex-none px-6 md:px-18"
        style={{
          x: "-25%",
        }}
      >
        {[...companies, ...companies].map(({ logo }, arrIndex) => (
          <div className="" key={arrIndex}>
            {/* <Logo className="h-8" /> */}
            <img src={logo} alt="logo" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Logo;

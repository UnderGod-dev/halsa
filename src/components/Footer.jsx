import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
  { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
  { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
];

const contactInfo = [
  {
    icon: <Phone size={18} />,
    text: "+44 23 4680 6977",
    href: "tel:+44444444",
  },
  {
    icon: <Mail size={18} />,
    text: "info@halsa.com",
    href: "mailto:support@phoenixrecovery.com",
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];
const Footer = () => {
  return (
    <div className="bg-gray-900 text-white/70 py-10 mt-20">
      <div className="grid sm:grid:cols-2 md:grid-cols-4 max-w-screen-xl mx-auto px-8 gap-8">
        <motion.div
          className="flex flex-col content-between"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
        >
          <a href="/" className="font-light text-2xl ">
            halsa&reg;
          </a>
          <div className="my-8">
            <span className="block">
              Developed by:{" "}
              <a
                href="https://adekunle-omega.vercel.app"
                className="font-extralight text-sm"
              >
                Adekunle
              </a>
            </span>
            <span className="block">
              Designed by:{" "}
              <a
                href="https://templates.gola.io"
                className="font-extralight text-sm"
              >
                Gola
              </a>
            </span>
          </div>
          <div className="place-content-end flex flex-col gap-2 bg-rhed-900 mt-4">
            {socialLinks.map((links, i) => (
              <a
                key={i}
                href={links.href}
                className="inline-flex gap-2 items-center hover:text-white"
              >
                <span className="bg-gray-600 rounded-full p-2">
                  {links.icon}
                </span>{" "}
                <span className="">{links.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          className=""
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
        >
          <p className="font-semibold text-lg mb-4">Quick Links</p>
          <ul className="w-fit">
            {quickLinks.map((links, i) => (
              <li className="hover:text-white flex flex-col gap-2" key={i}>
                <a href={links.href} className="block">
                  {links.label}
                </a>{" "}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className=""
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
        >
          <p className="font-semibold text-lg mb-4">Quick Links</p>
          <ul className="w-fit">
            {legalLinks.map((links, i) => (
              <li className="hover:text-white flex flex-col gap-2" key={i}>
                <a href={links.href} className="block">
                  {links.label}
                </a>{" "}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
        >
          <p className="font-semibold text-lg mb-4">Contact</p>
          {contactInfo.map((links, i) => (
            <a
              key={i}
              href={links.href}
              className="inline-flex gap-2 items-center hover:text-white"
            >
              <span className="bg-gray-600 rounded-full p-2">{links.icon}</span>{" "}
              <span className="">{links.text}</span>
            </a>
          ))}
        </motion.div>
      </div>
      <div className="text-center font-extralight mt-10">
        &copy; Adekunle 2024
      </div>
    </div>
  );
};

export default Footer;

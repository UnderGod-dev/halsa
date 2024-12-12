import { MenuIcon, XCircle, XIcon } from "lucide-react";
import Button from "./Botton";
import { useCallback, useEffect, useState } from "react";

const Header = () => {
  const navLinks = ["features", "about", "members", "pricing", "blog"];
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openNav, setOpenNav] = useState(false);

  const toggleMobileNav = () => {
    setOpenNav((curr) => !curr);
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <header
      className={`w-full fixed transition-transform duration-300 ease-in-out pt-4
        ${
          isVisible ? "translate-y-0" : "-translate-y-[150%]"
        } px-4 xl:px-16 z-20 top-0`}
    >
      <div className="px-8 flex justify-between w-full h-[6vh] items-center bg-white shadow border rounded-full relative">
        <a href="/" className="font-light text-2xl">
          halsa&reg;
        </a>
        {/* desktop nav */}
        <nav className="hidden lg:block">
          <ul className="flex gap-4">
            {navLinks.map((links) => (
              <li
                key={links}
                className="capitalize font-light px-6 py-2 border rounded-full border-transparent hover:border-gray-300 hover:bg-light transition-all duration-200 ease-linear"
              >
                <a href={`/${links}`}>{links}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-center gap-2">
          <Button content="support" className="hidden md:block" />
          <span className="lg:hidden cursor-pointer" onClick={toggleMobileNav}>
            {!openNav ? <MenuIcon /> : <XIcon />}
          </span>
        </div>

        {/* mobile nav modal */}
        <div
          className={`absolute w-full bg-[#6b818c] p-4 top-[6vh] rounded-3xl left-1/2 -translate-x-1/2 transition-all duration-500 ease-linear  ${
            !openNav ? "-translate-y-full opacity-0 -z-40" : "opacity-1"
          } `}
        >
          <nav className="lg:hidden">
            <ul className="flex flex-col text-center gap-4">
              {navLinks.map((links) => (
                <li
                  key={links}
                  className="capitalize font-light px-6 py-2 border rounded-full text-white border-transparent bg-[#ffffff0d] hover:border-gray-300 transition-all duration-200 ease-linear"
                  onClick={toggleMobileNav}
                >
                  <a href={`/${links}`}>{links}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

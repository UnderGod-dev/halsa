import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Features from "../pages/Features";
import About from "../pages/About";
import Members from "../pages/Members";
import Pricing from "../pages/Pricing";
import Blogs from "../pages/Blogs";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<Members />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

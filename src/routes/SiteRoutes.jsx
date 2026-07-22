import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Products from "../pages/Products";
import PageNotFound from "../pages/PageNotFound";
import PageWrapper from "../components/PageWrapper";

export default function SiteRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><PageNotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

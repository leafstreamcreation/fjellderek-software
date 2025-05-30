import { Route, Routes } from "react-router-dom";
import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import ServicesPage from "@/pages/services";
import PortfolioPage from "./pages/portfolio";
import ContactPage from "./pages/contact";
import BlogPage from "@/pages/blog";
import BlogArticle from "@/pages/blog-article";
import ErrorNotFound from "@/pages/error-not-found";
// import SkillsPage from "@/pages/skills";
// import ToolkitsPage from "./pages/toolkits";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ServicesPage />} path="/services" />
      <Route element={<PortfolioPage />} path="/portfolio" />
      <Route element={<ContactPage />} path="/contact" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<BlogArticle />} path="/blog/:id" />
      <Route element={<ErrorNotFound />} path="/*" />
      {/* <Route element={<SkillsPage />} path="/skills" /> */}
      {/* <Route element={<ToolkitsPage />} path="/toolkits" /> */}
    </Routes>
  );
}

export default App;

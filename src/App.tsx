import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import VisionPage from "@/pages/vision";
import SkillsPage from "@/pages/skills";
import ExperiencePage from "@/pages/experience";
import ProjectsPage from "./pages/projects";
import ContactPage from "./pages/contact";
import BlogPage from "@/pages/blog";
import ToolkitsPage from "./pages/toolkits";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<VisionPage />} path="/vision" />
      <Route element={<SkillsPage />} path="/skills" />
      <Route element={<ExperiencePage />} path="/experience" />
      <Route element={<ProjectsPage />} path="/projects" />
      <Route element={<ContactPage />} path="/contact" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<ToolkitsPage />} path="/toolkits" />
    </Routes>
  );
}

export default App;

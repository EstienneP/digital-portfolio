// IMPORTS
import { Routes, Route } from "react-router-dom";
// COMPONENTS
import Home from "./components/home/Home";
import Music from "./components/music/Music";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";

/**
 * App
 * Houses all the routes across the site
 * @author Estienne
 * @returns {JSX} the routes for each page
 */
function App() {
  return (
      <Routes>
        <Route path="digital-portfolio" element={ <Home /> } />
        <Route path="digital-portfolio/about" element={ <About /> } />
        <Route path="digital-portfolio/experience" element={ <Experience /> } />
        <Route path="digital-portfolio/music" element={ <Music /> } />
        <Route path="digital-portfolio/skills" element={ <Skills /> } />
      </Routes>
  );
}

export default App;

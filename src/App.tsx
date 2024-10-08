// IMPORTS
import { Routes, Route } from "react-router-dom";
// COMPONENTS
import Home from "./components/home/Home";
import Music from "./components/music/Music";
import Design from "./components/design/Design";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";

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
        <Route path="digital-portfolio/music" element={ <Music /> } />
        <Route path="digital-portfolio/resume" element={ <Resume /> } />
        <Route path="digital-portfolio/design" element={ <Design /> } />
        <Route path="digital-portfolio/contact" element={ <Contact /> } />
      </Routes>
  );
}

export default App;

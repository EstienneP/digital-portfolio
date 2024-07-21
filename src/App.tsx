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
        <Route path="" element={ <Home /> } />
        <Route path="music" element={ <Music /> } />
        <Route path="resume" element={ <Resume /> } />
        <Route path="design" element={ <Design /> } />
        <Route path="contact" element={ <Contact /> } />
      </Routes>
  );
}

export default App;

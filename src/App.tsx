// IMPORTS
import { Routes, Route } from "react-router-dom";
// COMPONENTS
import Home from "./components/home/Home";
import Music from "./components/music/Music";
import Design from "./components/design/Design";
import Resume from "./components/resume/Resume";

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
        <Route path="music" element={ <Music /> } />
        <Route path="resume" element={ <Resume /> } />
        <Route path="design" element={ <Design /> } />
      </Routes>
  );
}

export default App;

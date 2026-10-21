import { Routes, Route } from "react-router-dom";
import './styles/reset.css';
import './styles/global.css';
import './styles/style.css';
import './styles/about.css';
import './styles/prices.css';
import './styles/contact.css';
import './styles/courses.css'
import './styles/vibrancy.css';
import './styles/responsive.css';
import './styles/custom-cursor.css';

import Header from "./components/Header";
import Main from "./pages/Main.jsx";
import About from "./pages/About.jsx";
import Prices from './pages/Prices.jsx';
import Contact from "./pages/Contact.jsx";
import Courses from "./pages/Courses.jsx";
import ScrollReveal from "./components/ScrollReveal.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

function App() {
  return (
    <>
      <Header />
      <ScrollReveal />
      <CustomCursor />
      <div className="App container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/courses" element={<Courses/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;

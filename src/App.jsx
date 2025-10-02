import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home";
import About from "./About";
import Portfolio from "./portfolio";
import Contact from "./Contact";
import { useTheme } from "./components/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <Router>
     
      <div className={`app ${theme}`}>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Table from "./components/Table/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import Contact from "./components/routes/Contact";
import About from "./components/routes/About";
import Services from "./components/routes/Services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;

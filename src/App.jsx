import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Home from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ToastContainer from "./components/Toast";
// import ExampleComponent from "./components/ExampleComponent";
import { ToastProvider } from "./components/ToastProvider";
// import Maintenance from "./components/Maintenance";

function App() {
  return (
    <ToastProvider>
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        {/* Explicit index route */}
        <Route path="/" element={<Home />} index />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/maintenance" element={<Maintenance />} /> */}
      </Routes>
      <Footer />
    </Router>
    </ToastProvider>
  );
}

export default App;

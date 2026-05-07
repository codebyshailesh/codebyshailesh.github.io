import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Assume you have a Navbar
import Home from "./pages/Home";
import About from "./pages/About"; // Create these pages
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar stays here so it shows on every page */}
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* You can also put a Footer here */}
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = "";
    if (theme !== "light") {
      document.body.classList.add(theme);
    }
  }, [theme]);

  return (
    <BrowserRouter>
      {/* 🔥 FULL PAGE WRAPPER */}
      <div className="app-layout">
        <Header setTheme={setTheme} />

        {/* 🔥 MAIN CONTENT (THIS PUSHES FOOTER DOWN) */}
        <main className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Navigate to="/products" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        {/* 🔥 FOOTER */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

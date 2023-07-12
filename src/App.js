import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, ErrorPage, Footer } from "./Components";
import { About, Home, Jobs, Contact, Category } from "./Pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="find-a-job" element={<Jobs />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="category" element={<Category />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

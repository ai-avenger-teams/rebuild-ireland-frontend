import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Officers from './pages/Officers';
import Contact from './pages/ContactPage';
import Footer from './components/Footer';
import ChatRoom from "./pages/ChatRoom"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/officers" element={<Officers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ChatRoom" element={<ChatRoom />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

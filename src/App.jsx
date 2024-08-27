import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Officers from './pages/Officers';
import Contact from './pages/ContactPage';
import Footer from './components/Footer';
import FAQPage from "./pages/legal/FAQ";
import ChatRoom from "./pages/ChatRoom"
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import Error403 from "./pages/errors/Error403";
import Error404 from "./pages/errors/Error404";
import Error500 from "./pages/errors/Error500";

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
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/termsOfService" element={<TermsOfService />} />
            <Route path="/403" element={<Error403 />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="/500" element={<Error500 />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Officers from "./pages/Officers";
import Contact from "./pages/ContactPage";
import Footer from "./components/layout/Footer";
import FAQPage from "./pages/legal/FAQ";
import ChatRoom from "./pages/ChatRoom";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import Members from "./pages/TeamMemberPage";
import Error403 from "./pages/errors/Error403";
import Error404 from "./pages/errors/Error404";
import Error500 from "./pages/errors/Error500";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  console.log(import.meta.env.VITE_DB_PASSWORD);
  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <BrowserRouter>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/officers" element={<Officers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/teamPage" element={<Members />} />
              <Route path="/ChatRoom" element={<ChatRoom />} />
              <Route path="/history" element={<History />} />
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
    </HelmetProvider>
  );
}

export default App;

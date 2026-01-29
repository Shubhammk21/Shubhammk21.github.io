import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SiteNavbar from "./componets/navbar/SiteNavbar";
import Footer from "./componets/footer/Footer";
import HomePage from "./pages/HomePage";
import "./App.css";
import Loader from "./common/Loader";
import TermsConditions from "./pages/TermsCondition";
import PrivacyTerms from "./pages/PrivacyTerms";
import Cursor from "./common/Cursor";

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example: simulate initial load (replace with real fetch / init)
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader simulateMs={1400}></Loader>;

  return (
    <>
      <SiteNavbar />
      <Cursor></Cursor>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/Form" element={<FormPage />} /> */}
        <Route path="/terms-and-condition" element={<TermsConditions />} />

        <Route path="/privacy-policy" element={<PrivacyTerms />} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import HeroDual from "../components/HeroDual";
import StatsSection from "../components/StatsSection";
import ForCompanies from "../components/ForCompanies";
import ForWorkers from "../components/ForWorkers";
import HowItWorks from "../components/HowItWorks";
import ServiceTiers from "../components/ServiceTiers";
import VoiceDemo from "../components/VoiceDemo";
import Testimonials from "../components/Testimonials";
import WaitlistSection from "../components/WaitlistSection";
import FloatingCTA from "../components/FloatingCTA";
import Footer from "../components/Footer";
import { ThemeProvider } from "../context/ThemeContext";

const LandingPage = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!loading && user) navigate("/dashboard");
  }, [user, loading, navigate]);

  if (loading) return <div className="min-h-screen bg-gray-950 flex items-center justify-center text-blue-400 animate-pulse">Loading...</div>;

  return (
    <ThemeProvider>
      <div className="bg-gray-950 text-white min-h-screen overflow-x-hidden">
        <Navbar />
        <HeroDual />
        <StatsSection />
        <ForCompanies />
        <ForWorkers />
        <HowItWorks />
        <ServiceTiers />
        <VoiceDemo />
        <Testimonials />
        <WaitlistSection />
        <Footer />
        <FloatingCTA />
      </div>
    </ThemeProvider>
  );
};

export default LandingPage;
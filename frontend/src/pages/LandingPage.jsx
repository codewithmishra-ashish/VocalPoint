import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

const LandingPage = () => {
  // Redirect logged-in users


  return (
    <div className="bg-gray-950 text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default LandingPage;
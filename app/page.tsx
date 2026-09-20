import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import QuoteCalculator from "@/components/QuoteCalculator";
import Regions from "@/components/Regions";
import Process from "@/components/Process";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <BeforeAfter />
      <QuoteCalculator />
      <Regions />
      <Process />
      <Packages />
      <Testimonials />
      <BlogSection />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}

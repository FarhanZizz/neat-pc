import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const handleSelectPackage = (pkg: string) => {
    setSelectedPackage(pkg);
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-body selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services onSelectPackage={handleSelectPackage} />
        <BookingForm selectedPackage={selectedPackage} />
      </main>
      <Footer />
    </div>
  );
}

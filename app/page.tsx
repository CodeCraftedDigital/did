import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Applications from "@/components/Applications";
import HowItWorks from "@/components/HowItWorks";
import Performance from "@/components/Performance";
import FieldProof from "@/components/FieldProof";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Applications />
        <HowItWorks />
        <Performance />
        <FieldProof />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

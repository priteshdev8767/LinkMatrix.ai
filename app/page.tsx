import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import BentoGrid from "@/components/BentoGrid";
import InteractiveDemo from "@/components/InteractiveDemo";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030014] text-slate-100 overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
      {/* Dynamic Background Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Page Elements */}
      <Header />
      <main>
        <Hero />
        <Integrations />
        <BentoGrid />
        <InteractiveDemo />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

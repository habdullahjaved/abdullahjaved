import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="min-h-screen">
        <Hero />
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-32">
          <About />
          <Experience />
          <Contact />
        </div>
      </main>
    </>
  );
}

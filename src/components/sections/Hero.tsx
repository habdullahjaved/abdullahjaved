"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-16 px-6 max-w-6xl mx-auto mt-10"
    >
      {/* LEFT CONTENT */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Full-Stack Developer
          <span className="block text-[#2559bd]">Based in Dubai</span>
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-md mx-auto md:mx-0">
          I build SEO-optimized websites, business automation systems, and
          scalable digital products using Next.js, React, Laravel, MySQL, and
          modern cloud technologies.
        </p>

        <div className="flex justify-center md:justify-start gap-4">
          <Button asChild size="lg">
            <a href="#contact">Hire Me</a>
          </Button>

          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/habdullahjaved" target="_blank">
              GitHub
            </a>
          </Button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex-1 flex justify-center">
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border border-white/10">
          <Image
            src="/Abdullah-Javed.jpg"
            alt="Abdullah Javed"
            width={256}
            height={256}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

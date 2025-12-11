export default function Experience() {
  return (
    <section id="experience" className="space-y-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-[#2559bd] text-center md:text-left">
        Experience
      </h2>

      <div className="space-y-4">
        <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-xl">
            Luxury Art Transport – Full-Stack Developer
          </h3>
          <p className="opacity-70 text-sm">Jun 2024 – Present · Dubai</p>
          <ul className="list-disc pl-6 mt-3 space-y-1 text-sm opacity-90">
            <li>Built 3 SEO-optimized production websites</li>
            <li>Developed rental & booking systems using Next.js + Laravel</li>
            <li>Integrated Stripe payments & multilingual support</li>
          </ul>
        </div>

        <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-xl">
            Pace Technologies – Software Engineer
          </h3>
          <p className="opacity-70 text-sm">Aug 2022 – Jun 2024 · Islamabad</p>
          <ul className="list-disc pl-6 mt-3 space-y-1 text-sm opacity-90">
            <li>Built enterprise healthcare platforms serving 1,000+ users</li>
            <li>Frontend + API integrations with React + Laravel</li>
            <li>Improved workflows reducing data entry time by 30%</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

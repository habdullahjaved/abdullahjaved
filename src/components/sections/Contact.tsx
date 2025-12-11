"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    setLoading(false);
    setStatus(
      res.ok ? "Message sent successfully!" : "Failed to send message."
    );
  }

  return (
    <section id="contact" className="space-y-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-[#2559bd] text-center md:text-left">
        Contact
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
          <input
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full p-3 border rounded"
          />
          <Button disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
          {status && <p className="text-sm opacity-70">{status}</p>}
        </form>

        {/* CONTACT DETAILS */}
        <div className="flex-1 space-y-3 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:habdullahjaved560@gmail.com" className="underline">
              habdullahjaved560@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+971552874167" className="underline">
              +971 55 287 4167
            </a>
          </p>
          <p>
            <strong>Location:</strong> Dubai, UAE
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/habdullahjaved"
              target="_blank"
              className="underline"
            >
              github.com/habdullahjaved
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

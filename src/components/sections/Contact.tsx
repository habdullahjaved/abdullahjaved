"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Backend response:", data, "HTTP OK:", res.ok);

      if (res.ok && data.status === 1) {
        setStatus({ type: "success", message: data.message });
        e.currentTarget.reset();
      } else {
        setStatus({
          type: "error",
          message: data.message || "Failed to send message.",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", message: "Something went wrong. Try again." });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 5000);
    }
  }

  return (
    <section id="contact" className="space-y-8 max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-bold text-[#2559bd] text-center md:text-left">
        Contact
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
        >
          <input
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#2559bd]"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#2559bd]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#2559bd]"
            rows={5}
          />

          <Button disabled={loading} className="mt-2">
            {loading ? "Sending..." : "Send Message"}
          </Button>

          {status && (
            <div
              className={`mt-2 p-3 rounded ${
                status.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {status.message}
            </div>
          )}
        </form>

        {/* CONTACT DETAILS */}
        <div className="flex-1 space-y-4 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:habdullahjaved560@gmail.com"
              className="underline text-[#2559bd]"
            >
              habdullahjaved560@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+971552874167" className="underline text-[#2559bd]">
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
              className="underline text-[#2559bd]"
            >
              github.com/habdullahjaved
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

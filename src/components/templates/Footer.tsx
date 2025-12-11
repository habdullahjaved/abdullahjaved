export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-gray-700 dark:text-gray-300">
        {/* Left: Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Abdullah Javed. All rights reserved.
        </p>

        {/* Right: Links */}
        <div className="flex gap-6 mt-3 md:mt-0 justify-center md:justify-end">
          <a
            href="https://github.com/habdullahjaved"
            target="_blank"
            className="hover:text-blue-500 transition"
          >
            GitHub
          </a>
          <a
            href="mailto:habdullahjaved560@gmail.com"
            className="hover:text-blue-500 transition"
          >
            Email
          </a>
          <a href="#contact" className="hover:text-blue-500 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-black flex items-center justify-center text-gray-300 ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Branding */}
        <h2 className="text-xl font-bold text-white">Prompt Improver</h2>
        <p className="text-sm text-gray-400 mt-1">
          The extension that upgrades your chatbot prompts instantly.
        </p>

        {/* Divider (optional) */}
        <div className="w-16 h-[1px] bg-gray-600 my-4"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Prompt Improver. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-800 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} نام شما. تمامی حقوق محفوظ است.</p>
        <p>ساخته شده با Next.js و Tailwind</p>
      </div>
    </footer>
  );
}

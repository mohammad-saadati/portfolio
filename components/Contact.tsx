"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your API route
    setStatus("Sending...");

    // Simulating API call
    setTimeout(() => {
      setStatus("Message Sent! I'll get back to you soon.");
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-zinc-900/50 border-t border-zinc-800"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">راه های ارتباطی</h2>
          <p className="text-zinc-400 mb-10">
           جهت رزرو جلسه پیام ارسال کنید.
          </p>

          {/* <form onSubmit={handleSubmit} className="space-y-4 text-right mb-12">
            <div>
              <input
                type="text"
                placeholder="نام شما"
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="آدرس ایمیل"
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="در مورد وضعیت فعلی خود و آنچه نیاز به کمک دارید بگویید..."
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary hover:bg-indigo-500 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Send size={18} />
              <span>{status || "ارسال پیام"}</span>
            </button>
          </form> */}

          <div className="flex justify-center gap-6">
            <a
              href="mailto:saadati.m.b@example.com"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail size={20} /> ایمیل
            </a>
            {/* <a
              href="#"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Linkedin size={20} /> لینکدین
            </a> */}
            <a
              href="https://t.me/mohammadsaadati01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Send size={20} /> تلگرام
            </a>
            <a
              href="https://eitaa.com/mosaadati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Send size={20} /> ایتا
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

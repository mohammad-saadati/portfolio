"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl z-10"
      >
        <img
          src="/images/profile.png"
          alt="Mentor"
          width={400}
          height={600}
          className="rounded mb-6 mx-auto"
        />
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 text-sm text-zinc-300 mb-6">
          <Sparkles size={14} className="text-primary" />
          <span>8+ سال تجربه مهندسی نرم افزار</span>
        </div>

        <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
          مسیر شغلی خود را <br />
          <span className="bg-clip-text bg-gradient-to-r from-primary to-accent">
            با اطمینان هدایت کنید
          </span>
        </h1>

        <p className="text-lg text-center md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          منتورینگ تخصصی برای دانشجویان و تازه‌کاران. از سردرگمی دانشگاهی به
          وضوح حرفه‌ای. بیایید نقشه راه شما را بسازیم.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
          >
            رزرو جلسه
          </a>
          <a
            href="#about"
            className="px-8 py-3 border border-zinc-700 rounded-full hover:bg-zinc-800 transition-colors text-zinc-300"
          >
            بیشتر بدانید
          </a>
        </div>
      </motion.div>

      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 mb-10"
      >
        <ArrowDown className="text-zinc-600" size={24} />
      </motion.div> */}
    </section>
  );
}

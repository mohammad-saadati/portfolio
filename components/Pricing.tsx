"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    title: "آشنایی با رشته کامپیوتر",
    price: "۱,۰۰۰,۰۰۰",
    currency: "تومان",
    duration: "۱ ساعت",
    popular:false,
    audience: "دانشجویان و علاقه‌مندان",
    features: [
      "آشنایی با مسیرهای شغلی مختلف",
      "بررسی تحصیلات و مهارت‌های مورد نیاز",
      "راهنمایی در انتخاب تخصص",
      "پاسخ به سوالات و ابهامات",
    ],
  },
  {
    title: "ورود به بازار کار",
    price: "۱,۵۰۰,۰۰۰",
    currency: "تومان",
    duration: "۱ ساعت",
    popular:false,
    audience: "فارغ‌التحصیلان و تازه‌کاران",
    features: [
      "بررسی جامع رزومه و نمونه کارها",
      "استراتژی جستجوی شغلی",
      "آماده‌سازی برای مصاحبه‌های فنی",
      "بحث درباره فرصت‌های شغلی",
      "راهنمایی در بافت‌سازی حرفه‌ای",
    ],
  },
  {
    title: "آمادگی مصاحبه و بررسی رزومه",
    price: "۸,۰۰۰,۰۰۰",
    currency: "تومان",
    duration: "۱ ساعت",
    popular:false,
    audience: "متقاضیان استخدام",
    features: [
      "بررسی دقیق رزومه و تصحیح",
      "شبیه‌سازی مصاحبه فنی",
      "پاسخ به سوالات رایج مصاحبه",
      "بهبود مهارت‌های ارتباطی",
      "مشاوره درباره مذاکره حقوق",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            جلسات منتورینگ
          </h2>
          <p className="text-zinc-400">در آینده خود سرمایه‌گذاری کنید.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 border ${
                tier?.popular
                  ? "bg-gradient-to-b from-zinc-900 to-zinc-950 border-primary"
                  : "bg-zinc-900 border-zinc-800"
              }`}
            >
              {tier?.popular && (
                <span className="absolute top-0 left-4 -translate-y-1/2 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">
                  محبوب
                </span>
              )}
              <h3 className="text-xl font-bold text-zinc-200">{tier.title}</h3>
              <p className="text-zinc-500 text-sm mb-6">{tier.audience}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-zinc-400"> {tier.currency}</span>
                <div className="text-sm text-zinc-500 mt-2">
                  {tier.duration}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-zinc-300">
                    <Check size={16} className="text-green-400" />
                    {f}
                  </li>
                ))}
              </ul>
              {/* <button className="w-full py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
                اکنون رزرو کنید
              </button> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

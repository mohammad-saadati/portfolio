"use client";

import { motion } from "framer-motion";
import { Map, Code, Briefcase, GraduationCap } from "lucide-react";

const services = [
  {
    icon: <GraduationCap className="text-primary mb-4" size={32} />,
    title: "دیدگاه دانشگاهی",
    desc: "درک آنچه دانشگاه واقعاً آموزش می‌دهد در مقابل آنچه صنعت تقاضا می‌کند.",
  },
  {
    icon: <Map className="text-accent mb-4" size={32} />,
    title: "نقشه راه شغلی",
    desc: "راهنمایی مرحله به مرحله در مورد فناوری‌هایی که باید یاد بگیرید و پروژه‌هایی که باید بسازید.",
  },
  {
    icon: <Code className="text-primary mb-4" size={32} />,
    title: "راهنمایی درک مسیرهای فناوری",
    desc: "فرانت‌اند، بک‌اند، دواپس و هرکدوم دقیقاً چی هستن، چه کاری انجام میدن و برای هر کدوم چه مسیری رو باید طی کرد.",
  },
  {
    icon: <Briefcase className="text-accent mb-4" size={32} />,
    title: "آمادگی شغلی",
    desc: " بررسی رزومه , نمونه کارها و مصاحبه‌های آزمایشی برای فارغ‌التحصیلان و کارجویان",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            چگونه می‌توانم به شما کمک کنم
          </h2>
          <p className="text-zinc-400">پر کردن شکاف بین یادگیری و کسب درآمد.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

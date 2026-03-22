"use client";

import { motion } from "framer-motion";

const companies = [
  { name: "Basalam.com", url: "https://basalam.com/" },
  { name: "Dewzilla", url: "" },
  { name: "Taxmaro", url: "https://www.taxmaro.com/" },
  { name: "IranBroker", url: "https://iranbroker.net/" },
  { name: "Exino.com", url: "https://exino.org/" },
  { name: "Didanist.com", url: "https://didanist.com/" },
  { name: "Goftomeet.com", url: "https://goftomeet.com/" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            شرکت‌هایی که با آنها کار کرده‌ام
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            تجربه واقعی از استارتاپ‌ها تا مقیاس‌پذیری.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex items-center justify-center text-center hover:border-primary transition-colors h-32"
            >
              {company.url ? (
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-zinc-200 hover:text-primary transition-colors"
                >
                  {company.name}
                </a>
              ) : (
                <span className="font-semibold text-zinc-200">
                  {company.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

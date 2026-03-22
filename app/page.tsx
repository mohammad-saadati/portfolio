import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 mix-blend-multiply" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20 mix-blend-multiply" />

      <Navbar />

      <Hero />

      <div id="about" className="scroll-mt-20">
        <section className="py-24 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">درباره من</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            اگه می‌خوای از صفر به جایی برسی که پروژه‌های واقعی بگیری، درآمد
             داشته باشی و تو بازار کار گم نشی، مسیرشو من با تجربه واقعی بهت
            نشون می‌دم. ۸+ سال تجربه واقعی تو پروژه‌های بزرگ و استارتاپی دارم و
            دقیق می‌دونم کجاها وقتتو هدر میدی و کجا باید تمرکز کنی. یه جلسه
            مشاوره می‌تونه مسیر چند ساله‌تو کوتاه کنه—اگه جدی هستی، این
            همون نقطه شروعته.
          </p>
        </section>
      </div>

      <Experience />
      <Services />
      <Pricing />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}

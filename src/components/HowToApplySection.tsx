import { motion } from "framer-motion";
import { howToApply } from "@/content/site-data";

const HowToApplySection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
            Information
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-bold text-center mb-16"
        >
          How to <span className="gold-gradient-text">Apply?</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto grid gap-8">
          {howToApply.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-6 items-start glass-dark rounded-xl p-8 golden-aura"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="font-serif text-xl font-bold text-primary">
                  {item.step}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToApplySection;

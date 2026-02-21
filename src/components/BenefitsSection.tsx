import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { benefits } from "@/content/site-data";
import benefitsImg from "@/assets/benefits-trading.jpg";

const BenefitsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
            Benefits of Enrolling
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-bold text-center mb-8"
        >
          Join the Most <span className="gold-gradient-text">Simplified</span>{" "}
          Trading Course
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-center text-muted-foreground font-sans leading-relaxed mb-14"
        >
          Dr D Academy's trading course teaches you the forex market from the
          basics—how the market operates to how you can earn by applying logical
          thinking. Our simplified strategies will precisely guide you toward
          financial independence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-3 glass-dark rounded-lg p-4 golden-aura"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-sans text-sm">{b}</span>
              </motion.div>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden gold-border-glow">
            <img
              src={benefitsImg}
              alt="Professional trading setup"
              className="w-full h-80 object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-sans font-semibold rounded-lg pulse-gold hover:brightness-110 transition-all duration-300"
          >
            Get Started Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;

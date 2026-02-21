import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-8">
              Welcome to{" "}
              <span className="gold-gradient-text">Dr D Academy</span>
            </h2>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-6">
              Dr D Academy is the premier trading institute that provides the best
              online and physical forex market education. It is an initiative for
              the ambitious generation, willing to step forward and achieve
              financial independence.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              <strong className="text-foreground">
                Trading is often considered a business not suitable for everyone,
                but this is a myth.
              </strong>{" "}
              Our program focuses on teaching long-tested strategies that have
              consistently proven to be profitable across multiple market
              conditions.
            </p>
            <a
              href="#courses"
              className="inline-block px-8 py-3 border border-primary/40 text-primary font-sans font-medium rounded-lg golden-aura hover:bg-primary/10 transition-all duration-300"
            >
              Explore Programs
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-dark rounded-2xl p-10 golden-aura"
          >
            <div className="mb-8">
              <h3 className="font-serif text-2xl font-bold mb-2">Dr. D</h3>
              <p className="text-primary font-sans text-sm tracking-wide">
                Founder & Lead Mentor — Dr D Academy
              </p>
            </div>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Dr D Academy was founded by Dr. D, an expert with over a decade of
              experience in the field of trading. Being the best in this
              profession, he decided to share his knowledge with others. Our goal
              is to protect people from fraudulent schemes in the market and
              improve their lives by educating them to earn independently. Our team
              of experienced and skillful mentors provide true firsthand
              professional trading experience and techniques. We carefully educate,
              monitor, and guide individuals until they are consistently profitable.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

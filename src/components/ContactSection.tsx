import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Our Address", value: "Dr D Academy, Headquarters" },
  { icon: Mail, label: "E-mail", value: "info@drdacademy.com" },
  { icon: Phone, label: "Contact", value: "+92 315 2191891" },
  { icon: Clock, label: "Hours of Operation", value: "10:00 AM - 07:00 PM" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
    alert("Thank you for your interest! We will contact you shortly.");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
            Contact Details
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Get in <span className="gold-gradient-text">Touch</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-foreground">
                    {info.label}
                  </h4>
                  <p className="text-muted-foreground font-sans text-sm">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-dark rounded-2xl p-8 space-y-6"
          >
            <h3 className="font-serif text-2xl font-bold mb-2">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground font-sans text-sm mb-6">
              Fill up the form and our team will get back to you within 24 hours.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full bg-transparent border-b border-border px-0 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:shadow-[0_10px_10px_-5px_rgba(212,175,55,0.2)] focus:outline-none transition-all duration-300"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full bg-transparent border-b border-border px-0 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:shadow-[0_10px_10px_-5px_rgba(212,175,55,0.2)] focus:outline-none transition-all duration-300"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-transparent border-b border-border px-0 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:shadow-[0_10px_10px_-5px_rgba(212,175,55,0.2)] focus:outline-none transition-all duration-300"
            />

            <input
              type="tel"
              placeholder="Phone / Mobile"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full bg-transparent border-b border-border px-0 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:shadow-[0_10px_10px_-5px_rgba(212,175,55,0.2)] focus:outline-none transition-all duration-300"
            />

            <textarea
              placeholder="Your Message"
              rows={3}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-transparent border-b border-border px-0 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:shadow-[0_10px_10px_-5px_rgba(212,175,55,0.2)] focus:outline-none transition-all duration-300 resize-none"
            />

            <button
              type="submit"
              className="w-full px-10 py-4 bg-primary text-primary-foreground font-sans font-semibold rounded-lg pulse-gold hover:brightness-110 transition-all duration-300"
            >
              Submit Application
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

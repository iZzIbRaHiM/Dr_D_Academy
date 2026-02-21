import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/content/site-data";

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
            News & Insights
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Latest <span className="gold-gradient-text">Publications</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-dark rounded-xl overflow-hidden golden-aura group cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                <span className="font-serif text-6xl text-primary/30 group-hover:text-primary/50 transition-colors">
                  "
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="font-sans text-xs">{post.date}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-primary font-sans text-sm font-medium">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

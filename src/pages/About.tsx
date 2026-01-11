import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Target, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Simplicity First",
      description: "We believe nutrition tracking should be effortless. No complicated logging, no endless databases—just snap and know.",
    },
    {
      icon: Heart,
      title: "Health Awareness",
      description: "Our mission is to help people make informed food choices by providing instant, accurate nutritional information.",
    },
    {
      icon: Lightbulb,
      title: "AI Innovation",
      description: "We leverage cutting-edge AI technology to recognize foods and estimate nutritional content with remarkable accuracy.",
    },
    {
      icon: Users,
      title: "For Everyone",
      description: "Whether you're a fitness enthusiast, managing a health condition, or simply curious—CalorieAI is designed for you.",
    },
  ];

  return (
    <div className="min-h-screen gradient-hero flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">CalorieAI</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to make nutrition tracking effortless. Using advanced AI technology, 
              we help you understand what's in your food without the hassle of manual logging.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-border shadow-card overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  In a world where food choices are abundant but nutritional awareness often falls short, 
                  CalorieAI bridges the gap. We believe everyone deserves to know what they're eating, 
                  and it shouldn't require a degree in nutrition or hours of manual tracking.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                  By harnessing the power of artificial intelligence, we've created a tool that transforms 
                  a simple photo into actionable nutritional insights—empowering you to make better choices, 
                  one meal at a time.
                </p>
              </div>
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12"
            >
              What We Stand For
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:shadow-card transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-soft">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Start Your Health Journey Today
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join the movement towards smarter, simpler nutrition tracking.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/analyzer">
                Try CalorieAI Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Zap, BarChart3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroFood from "@/assets/hero-food.jpg";

const Index = () => {
  const features = [
    {
      icon: Camera,
      title: "Snap & Analyze",
      description: "Simply take a photo of your meal using your phone or upload an image.",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Our AI processes your image in seconds to identify food items.",
    },
    {
      icon: BarChart3,
      title: "Macro Breakdown",
      description: "Get detailed protein, carbs, fat, and calorie information instantly.",
    },
  ];

  const stats = [
    { value: "99%", label: "Accuracy" },
    { value: "2s", label: "Analysis Time" },
    { value: "10K+", label: "Foods Recognized" },
  ];

  return (
    <div className="min-h-screen gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                AI-Powered Nutrition Analysis
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
                Know Your Meal's{" "}
                <span className="text-gradient">Nutrition</span>{" "}
                Instantly
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Snap a photo of any meal and let our AI analyze its nutritional content. 
                Get accurate macros in seconds—no manual logging required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/analyzer">
                    Try It Free
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/how-it-works">See How It Works</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-border">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-card">
                <img
                  src={heroFood}
                  alt="Healthy meal bowl with fresh ingredients"
                  className="w-full aspect-[4/3] object-cover"
                />
                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-card/95 backdrop-blur-sm shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                        <Zap className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Analysis Complete</p>
                        <p className="text-xs text-muted-foreground">485 kcal • 32g protein</p>
                      </div>
                    </div>
                    <div className="text-xs text-primary font-medium">Just now</div>
                  </div>
                </motion.div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-8 -right-8 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -z-10 -bottom-4 -left-4 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How CalorieAI Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to understand your meal's nutritional value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative p-8 rounded-2xl bg-background border border-border hover:shadow-card transition-shadow group"
              >
                <div className="absolute top-8 right-8 text-6xl font-bold text-muted/30">
                  {index + 1}
                </div>
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-soft group-hover:shadow-glow transition-shadow">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/analyzer">
                Start Analyzing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl gradient-primary p-8 md:p-16 text-center"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Track Smarter?
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Join thousands of users who have simplified their nutrition tracking 
                with CalorieAI. No sign-up required—start analyzing instantly.
              </p>
              <Button
                variant="secondary"
                size="xl"
                className="bg-card text-foreground hover:bg-card/90"
                asChild
              >
                <Link to="/analyzer">
                  Analyze Your First Meal
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-background/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-background/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

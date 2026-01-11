import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Camera, Brain, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: "Capture Your Meal",
      description: "Take a photo of your meal using your phone's camera or upload an existing image from your gallery. Our system supports all common image formats.",
      tips: [
        "Use natural lighting for best results",
        "Capture the entire plate from above",
        "Include all items you plan to eat",
      ],
    },
    {
      icon: Brain,
      title: "AI Analyzes the Image",
      description: "Our advanced AI model processes your image in seconds, identifying individual food items, portions, and ingredients with high accuracy.",
      tips: [
        "Recognizes 10,000+ food items",
        "Estimates portion sizes automatically",
        "Works with home-cooked and restaurant meals",
      ],
    },
    {
      icon: BarChart3,
      title: "Get Your Results",
      description: "Receive a detailed breakdown of macronutrients including calories, protein, carbohydrates, and fat. All data is presented in an easy-to-understand format.",
      tips: [
        "Instant nutritional breakdown",
        "Clear macro visualization",
        "No manual input required",
      ],
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
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              How <span className="text-gradient">CalorieAI</span> Works
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From photo to nutritional insights in three simple steps
            </p>
          </motion.div>

          {/* Steps */}
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl bg-card border border-border shadow-soft">
                  {/* Step Number & Icon */}
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
                        <step.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[2rem] top-full w-0.5 h-8 bg-border" />
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Try It Yourself?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Experience the power of AI-driven nutrition analysis. No sign-up required.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/analyzer">
                Start Analyzing
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

export default HowItWorks;

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageUploader from "@/components/ImageUploader";

const Analyzer = () => {
  return (
    <div className="min-h-screen gradient-hero flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Analysis
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Analyze Your Meal
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Upload a photo of your meal or take one with your camera. 
              Our AI will analyze it and provide detailed nutritional information.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ImageUploader />
          </motion.div>

          {/* Tips Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <h3 className="text-lg font-semibold text-foreground text-center mb-6">
              Tips for Best Results
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { emoji: "📸", text: "Use good lighting" },
                { emoji: "🍽️", text: "Capture the full plate" },
                { emoji: "📐", text: "Shoot from above" },
              ].map((tip, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <span className="text-2xl">{tip.emoji}</span>
                  <span className="text-sm text-muted-foreground">{tip.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Analyzer;

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Camera, X, Loader2, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import NutritionResults, { NutritionData } from "./NutritionResults";
import { config } from "@/config";

const ImageUploader = () => {
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<NutritionData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (!selectedFile.type.startsWith("image/")) {
        setError("Please select an image file");
        return;
      }
      setFile(selectedFile);
      setImage(URL.createObjectURL(selectedFile));
      setResults(null);
      setError(null);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      if (!droppedFile.type.startsWith("image/")) {
        setError("Please drop an image file");
        return;
      }
      setFile(droppedFile);
      setImage(URL.createObjectURL(droppedFile));
      setResults(null);
      setError(null);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const clearImage = useCallback(() => {
    setImage(null);
    setFile(null);
    setResults(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (cameraInputRef.current) cameraInputRef.current.value = "";
  }, []);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const analyzeImage = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    setError(null);

    try {
      // Convert file to base64
      const base64Image = await fileToBase64(file);

      // Send to webhook
      const response = await fetch(config.NUTRITION_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: base64Image,
          filename: file.name,
          mimeType: file.type,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const data = await response.json();
      
      // Handle the response format - it comes as an array with output property
      let nutritionData: NutritionData;
      
      if (Array.isArray(data) && data[0]?.output) {
        nutritionData = data[0].output;
      } else if (data.output) {
        nutritionData = data.output;
      } else if (data.status && data.food && data.total) {
        nutritionData = data;
      } else {
        throw new Error("Invalid response format from server");
      }

      setResults(nutritionData);
    } catch (err) {
      console.error("Analysis error:", err);
      setError(
        err instanceof Error 
          ? `Failed to analyze image: ${err.message}` 
          : "Failed to analyze image. Please try again."
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <AnimatePresence mode="wait">
        {!image ? (
          <motion.div
            key="uploader"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="relative border-2 border-dashed border-border rounded-2xl p-8 bg-card hover:border-primary/50 transition-colors cursor-pointer group"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <ImageIcon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="text-center">
                <p className="text-foreground font-medium mb-1">
                  Drop your meal photo here
                </p>
                <p className="text-sm text-muted-foreground">
                  or use the buttons below
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="w-5 h-5" />
                  Upload Image
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  onClick={() => cameraInputRef.current?.click()}
                >
                  <Camera className="w-5 h-5" />
                  Take Photo
                </Button>
              </div>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <input
              ref={cameraInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleFileChange}
              className="hidden"
            />
          </motion.div>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Image Preview */}
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={image}
                alt="Meal preview"
                className="w-full aspect-[4/3] object-cover"
              />
              <button
                onClick={clearImage}
                className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                aria-label="Remove image"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Analyze Button */}
            {!results && (
              <Button
                variant="hero"
                size="xl"
                className="w-full"
                onClick={analyzeImage}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Analyze Nutrition"
                )}
              </Button>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 rounded-xl bg-destructive/10 border border-destructive/20"
              >
                <p className="text-sm text-destructive text-center">{error}</p>
              </motion.div>
            )}

            {/* Results */}
            {results && <NutritionResults data={results} />}

            {/* Try Another */}
            {results && (
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={clearImage}
              >
                Analyze Another Meal
              </Button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageUploader;

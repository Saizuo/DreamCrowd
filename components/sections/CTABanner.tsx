"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ChevronRight, Rocket, ArrowRight } from "lucide-react";

const CTABanner: React.FC = () => {
  const purpleGradientButtonStyles = {
    background: `linear-gradient(135deg, #a855f7 0%, #9333ea 25%, #7c3aed 50%, #6d28d9 75%, #5b21b6 100%)`,
    boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)",
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-purple-900/10" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-white/10 relative overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-violet-500/10 rounded-3xl" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-violet-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                <span className="text-white">Ready to Launch</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Your Dream?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12"
              >
                Join thousands of entrepreneurs who've turned their ideas into funded startups. 
                <span className="text-white font-semibold"> Your journey starts here.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Button
                  size="lg"
                  className="text-white font-semibold border-0 hover:scale-105 transition-all duration-300 relative overflow-hidden px-12 py-6 text-lg rounded-full"
                  style={purpleGradientButtonStyles}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Start Your Campaign
                    <ChevronRight className="w-5 h-5" />
                  </span>
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="rounded-full font-semibold text-white/90 border-2 border-purple-400/30 hover:bg-purple-400/10 hover:text-white hover:border-purple-400/50 transition-all duration-300 px-12 py-6 text-lg backdrop-blur-sm"
                >
                  <span className="flex items-center gap-3">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-12 pt-8 border-t border-white/10"
              >
                <p className="text-white/60 text-sm">
                  🚀 <span className="text-white/80">Launch in minutes</span> • 
                  🤖 <span className="text-white/80">AI-powered matching</span> • 
                  🔒 <span className="text-white/80">Bank-level security</span>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles, ArrowRight, Users, TrendingUp, Award } from "lucide-react";
import Link from "next/link";

const gradientTextStyles = {
  background: `linear-gradient(
    135deg,
    #a855f7 0%,
    #9333ea 25%,
    #7c3aed 50%,
    #6d28d9 75%,
    #5b21b6 100%
  )`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const gradientButtonStyles = {
  background: `linear-gradient(
    135deg,
    #a855f7 0%,
    #9333ea 25%,
    #7c3aed 50%,
    #6d28d9 75%,
    #5b21b6 100%
  )`,
  boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)",
};

const successStories = [
  {
    company: "EcoTech Solutions",
    founder: "Sarah Chen",
    amount: "$2.5M",
    category: "Sustainability",
    description: "Revolutionary solar panel technology"
  },
  {
    company: "HealthAI",
    founder: "Dr. Marcus Rodriguez",
    amount: "$5M",
    category: "Healthcare",
    description: "AI-powered diagnostic platform"
  },
  {
    company: "FinanceFlow",
    founder: "Emma Wilson",
    amount: "$1.8M",
    category: "FinTech",
    description: "Next-gen payment processing"
  }
];

export default function SuccessPage() {
  const [currentStory, setCurrentStory] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-redirect to discover page after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/discover';
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-purple-900/5" />
      <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        {/* Success Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Welcome to </span>
            <span style={gradientTextStyles}>DreamCrowd!</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            🎉 Your account has been successfully created! You're now part of an exclusive community 
            of visionary entrepreneurs and smart investors.
          </p>
        </motion.div>

        {/* Success Stories Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            <Sparkles className="w-6 h-6 inline mr-2 text-purple-400" />
            Recent Success Stories
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <motion.div
              key={currentStory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {successStories[currentStory].company}
              </h3>
              <p className="text-white/70 mb-4">
                Founded by {successStories[currentStory].founder}
              </p>
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {successStories[currentStory].amount}
              </div>
              <p className="text-white/60 mb-4">
                {successStories[currentStory].description}
              </p>
              <span className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                {successStories[currentStory].category}
              </span>
            </motion.div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentStory ? 'bg-purple-400 scale-125' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">75,000+</div>
            <div className="text-white/60 text-sm">Active Members</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <Award className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">87%</div>
            <div className="text-white/60 text-sm">Success Rate</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">$250M+</div>
            <div className="text-white/60 text-sm">Total Funded</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/discover">
              <Button
                size="lg"
                className="text-white font-semibold border-0 hover:scale-105 transition-all duration-300 px-8 py-3 rounded-full"
                style={gradientButtonStyles}
              >
                <span className="flex items-center gap-2">
                  Explore Opportunities <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </Link>
            
            <Link href="/success">
              <Button 
                variant="ghost" 
                className="rounded-full font-semibold text-white/90 border-2 border-purple-400/30 hover:bg-purple-400/10 hover:text-white hover:border-purple-400/50 transition-all duration-300 px-8 py-3"
              >
                Go to Dashboard
              </Button>
            </Link>
          </div>
          
          <p className="text-white/50 text-sm mt-6">
            Redirecting to discovery page in <span className="text-purple-400">10 seconds</span>...
          </p>
        </motion.div>
      </div>
    </div>
  );
}
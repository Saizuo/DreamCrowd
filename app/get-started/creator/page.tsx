"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Lightbulb, Zap, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function CreatorWelcome() {
  const benefits = [
    {
      icon: Lightbulb,
      title: "AI-Powered Pitch Analysis",
      description: "Get instant feedback and optimization suggestions for your pitch"
    },
    {
      icon: Zap,
      title: "Smart Investor Matching",
      description: "Connect with investors who align with your vision and industry"
    },
    {
      icon: Target,
      title: "Milestone Tracking",
      description: "Set goals, track progress, and showcase your achievements"
    },
    {
      icon: TrendingUp,
      title: "Growth Resources",
      description: "Access tools, templates, and guidance to scale your business"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950 relative overflow-hidden pt-24 pb-12">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-purple-900/5" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Navigation */}
      <nav className="relative z-10 px-6 pb-6">
        <Link href="/get-started" className="text-white/80 hover:text-white transition-colors duration-300">
          ← Back to Selection
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Turn Your </span>
            <span style={gradientTextStyles}>Dream Into Reality</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Join thousands of entrepreneurs who've successfully raised funding through our AI-powered platform
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-400/20 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/70 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-white mb-2">$2.5B+</p>
              <p className="text-white/70">Total Raised</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-2">5,000+</p>
              <p className="text-white/70">Successful Founders</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-2">90%</p>
              <p className="text-white/70">Success Rate</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link href="/get-started/creator/info">
            <Button
              size="lg"
              className="text-white font-semibold border-0 hover:scale-105 transition-all duration-300 px-12 py-4 text-xl rounded-full"
              style={gradientButtonStyles}
            >
              <span className="flex items-center gap-3">
                Start Your Journey <ChevronRight className="w-6 h-6" />
              </span>
            </Button>
          </Link>
          <p className="text-white/60 text-sm mt-6">
            Build your founder profile in under 10 minutes
          </p>
        </motion.div>
      </div>
    </div>
  );
}

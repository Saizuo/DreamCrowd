"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, TrendingUp, FileCheck, Target, Users, BarChart3, Shield } from "lucide-react";
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

const features = [
  {
    icon: FileCheck,
    title: "Curated Deal Flow",
    description: "Access pre-screened, high-quality investment opportunities"
  },
  {
    icon: Target,
    title: "Smart Matching",
    description: "AI-powered matching with startups that fit your criteria"
  },
  {
    icon: BarChart3,
    title: "Due Diligence Tools",
    description: "Comprehensive analytics and evaluation frameworks"
  },
  {
    icon: Users,
    title: "Portfolio Management",
    description: "Track and manage your investments in one place"
  },
  {
    icon: Shield,
    title: "Verified Startups",
    description: "All startups undergo thorough verification processes"
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Stay informed with real-time market data and trends"
  }
];

export default function InvestorOnboarding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950 relative overflow-hidden pt-24 pb-12">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-purple-900/5" />
      <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

      {/* Navigation */}
      <nav className="relative z-10 px-6 pb-6">
        <Link href="/get-started" className="text-white/80 hover:text-white transition-colors duration-300">
          <ChevronLeft className="w-5 h-5 inline mr-2" />
          Back to Selection
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Welcome, </span>
            <span style={gradientTextStyles}>Investor</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join our exclusive network of investors and discover the next generation of groundbreaking startups
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Complete Profile</h3>
              <p className="text-white/70 text-sm">Tell us about your investment preferences and criteria</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Get Matched</h3>
              <p className="text-white/70 text-sm">Our AI finds startups that match your investment criteria</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Review & Connect</h3>
              <p className="text-white/70 text-sm">Review opportunities and connect with founders</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Invest & Track</h3>
              <p className="text-white/70 text-sm">Make investments and track your portfolio</p>
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
          <Link href="/get-started/investor/info">
            <Button
              size="lg"
              className="text-white font-semibold border-0 hover:scale-105 transition-all duration-300 px-12 py-4 text-lg rounded-full"
              style={gradientButtonStyles}
            >
              <span className="flex items-center gap-3">
                Start Your Journey <ChevronRight className="w-5 h-5" />
              </span>
            </Button>
          </Link>
          <p className="text-white/60 text-sm mt-4">
            Join thousands of investors already on the platform
          </p>
        </motion.div>
      </div>
    </div>
  );
}

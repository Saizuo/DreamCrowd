"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  TrendingUp, 
  Shield, 
  Target, 
  Users, 
  FileCheck, 
  Search, 
  BarChart3,
  ChevronRight,
  Sparkles
} from "lucide-react";
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

const userTypes = [
  {
    type: "creator",
    title: "Dream Creator",
    subtitle: "I have an idea or project that needs funding",
    icon: Lightbulb,
    route: "/get-started/creator", // Route to creator page
    features: [
      { icon: Sparkles, text: "AI-powered pitch analysis" },
      { icon: Users, text: "Smart investor matching" },
      { icon: Shield, text: "Secure funding process" },
      { icon: Target, text: "Milestone tracking" }
    ],
    gradient: "from-purple-500/20 to-violet-500/20"
  },
  {
    type: "investor",
    title: "Investor",
    subtitle: "I'm looking to invest in promising ideas",
    icon: TrendingUp,
    route: "/get-started/investor", // Route to investor page
    features: [
      { icon: FileCheck, text: "Curated deal flow" },
      { icon: Search, text: "Verified projects" },
      { icon: BarChart3, text: "Due diligence tools" },
      { icon: Target, text: "Portfolio management" }
    ],
    gradient: "from-violet-500/20 to-purple-500/20"
  }
];

const GetStarted: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950 relative overflow-hidden pt-20 pb-12">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-purple-900/5" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-3xl animate-pulse delay-2000" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Welcome to </span>
            <span style={gradientTextStyles}>DreamCrowd</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Let's get you started on your journey
          </p>
        </motion.div>

        {/* User Type Selection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12">
            I am a...
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {userTypes.map((userType, index) => (
              <motion.div
                key={userType.type}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`relative group cursor-pointer`}
                onMouseEnter={() => setHoveredCard(userType.type)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedType(userType.type)}
              >
                <div className={`
                  bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 
                  transition-all duration-300 hover:bg-white/10 hover:border-purple-400/30
                  hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20
                  ${selectedType === userType.type ? 'ring-2 ring-purple-400/50' : ''}
                `}>
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`
                      w-16 h-16 rounded-2xl bg-gradient-to-br ${userType.gradient} 
                      flex items-center justify-center border border-white/10
                    `}>
                      <userType.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {userType.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {userType.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {userType.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature.text}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + featureIndex * 0.1 }}
                        className="flex items-center gap-3 text-white/90"
                      >
                        <div className="w-8 h-8 rounded-lg bg-purple-400/20 flex items-center justify-center">
                          <feature.icon className="w-4 h-4 text-purple-400" />
                        </div>
                        <span className="font-medium">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Button - Now routes to the correct page */}
                  <Link href={userType.route}>
                    <Button
                      className={`
                        w-full text-white font-semibold border-0 hover:scale-105 
                        transition-all duration-300 relative overflow-hidden 
                        px-8 py-4 text-lg rounded-full
                        ${selectedType === userType.type ? 'opacity-100' : 'opacity-90'}
                      `}
                      style={gradientButtonStyles}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Get Started <ChevronRight className="w-5 h-5" />
                      </span>
                    </Button>
                  </Link>
                </div>

                {/* Hover effect overlay */}
                <AnimatePresence>
                  {hoveredCard === userType.type && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-3xl border border-purple-400/30 pointer-events-none"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            Don't worry, you can always change your selection later. 
            We're here to support both creators and investors in building the future together.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GetStarted;

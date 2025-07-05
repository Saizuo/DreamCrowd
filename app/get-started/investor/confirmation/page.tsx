"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Mail, Calendar, Users, TrendingUp, ArrowRight } from "lucide-react";
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

export default function InvestorConfirmation() {
  const nextSteps = [
    {
      icon: Mail,
      title: "Check Your Email",
      description: "We've sent you a verification email to activate your account"
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a brief onboarding call with our team to get started"
    },
    {
      icon: Users,
      title: "Start Networking",
      description: "Connect with other investors and explore opportunities"
    },
    {
      icon: TrendingUp,
      title: "Discover Deals",
      description: "Browse curated investment opportunities matched to your profile"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950 relative overflow-hidden pt-24 pb-12">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-purple-900/5" />
      <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Progress Bar - Completed */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div className="w-12 h-1 bg-purple-500"></div>
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div className="w-12 h-1 bg-purple-500"></div>
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div className="w-12 h-1 bg-purple-500"></div>
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span style={gradientTextStyles}>Welcome to DreamCrowd!</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Your investor profile has been successfully created. You're now part of our exclusive network.
          </p>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">What's Next?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {nextSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-400/20 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/70 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/investor/dashboard">
              <Button
                size="lg"
                className="text-white font-semibold border-0 hover:scale-105 transition-all duration-300 px-10 py-4 text-lg rounded-full"
                style={gradientButtonStyles}
              >
                <span className="flex items-center gap-3">
                  Go to Dashboard <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </Link>
            
            <Button 
              variant="ghost" 
              className="rounded-full font-semibold text-white/90 border-2 border-purple-400/30 hover:bg-purple-400/10 hover:text-white hover:border-purple-400/50 transition-all duration-300 px-10 py-4 text-lg backdrop-blur-sm"
            >
              Schedule Onboarding Call
            </Button>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-3">🎉 Exclusive Benefits Unlocked</h3>
            <ul className="text-white/70 space-y-2 text-left">
              <li>• Access to pre-screened, high-quality startups</li>
              <li>• AI-powered investment matching</li>
              <li>• Priority access to funding rounds</li>
              <li>• Dedicated investor support team</li>
              <li>• Monthly investor networking events</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
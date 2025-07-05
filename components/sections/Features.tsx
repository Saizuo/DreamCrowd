"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, DollarSign, Target, Zap, Shield, Award, Globe } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";

const blueGradientTextStyles = {
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

const stats = [
  { label: "Projects Funded", value: "2.5M+", icon: DollarSign },
  { label: "Success Rate", value: "87%", icon: TrendingUp },
  { label: "Active Investors", value: "50,000+", icon: Users },
  { label: "Countries", value: "120+", icon: Globe },
];

const features = [
  {
    icon: Zap,
    title: "AI-Powered Analysis",
    description: "Our advanced AI analyzes your pitch and provides real-time feedback to optimize your chances of success.",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Users,
    title: "Smart Investor Matching",
    description: "Connect with investors who are genuinely interested in your industry and stage of development.",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Enterprise-grade security ensures your sensitive business information remains protected.",
    color: "from-purple-600 to-violet-600"
  },
  {
    icon: Target,
    title: "Milestone Tracking",
    description: "Set goals, track progress, and show investors exactly how you're growing your business.",
    color: "from-violet-600 to-purple-600"
  },
  {
    icon: Award,
    title: "Due Diligence Tools",
    description: "Comprehensive tools for both founders and investors to streamline the funding process.",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Access real-time market data and trends to make informed decisions about your startup.",
    color: "from-violet-500 to-purple-500"
  }
];

const AnimatedCounter: React.FC<{ value: string; duration?: number }> = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      // Extract numeric value
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
      
      if (numericValue > 0) {
        const startTime = Date.now();
        const startValue = 0;
        
        const animate = () => {
          const now = Date.now();
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentValue = startValue + (numericValue - startValue) * easeOut;
          
          setCount(currentValue);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(numericValue);
          }
        };
        
        requestAnimationFrame(animate);
      }
    }
  }, [isInView, value, duration]);

  const formatValue = (num: number) => {
    if (value.includes('M')) {
      return `${num.toFixed(1)}M+`;
    } else if (value.includes('%')) {
      return `${Math.round(num)}%`;
    } else if (value.includes(',')) {
      return `${Math.round(num).toLocaleString()}+`;
    } else if (value.includes('+')) {
      return `${Math.round(num)}+`;
    }
    return Math.round(num).toString();
  };

  return <span ref={ref}>{formatValue(count)}</span>;
};

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-violet-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Our Platform Impact Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Our Platform</span>
            <br />
            <span style={blueGradientTextStyles}>Impact</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Real results from real entrepreneurs. See how DreamCrowd is transforming 
            the way startups connect with investors.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard 
                className="p-6 h-full hover:scale-105 transition-all duration-300"
                spotlightColor="rgba(168, 85, 247, 0.15)"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Why Choose</span>
            <br />
            <span style={blueGradientTextStyles}>DreamCrowd</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our platform provides everything you need to successfully fund your startup
            and connect with the right investors.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard 
                className="p-8 h-full hover:scale-105 transition-all duration-300"
                spotlightColor="rgba(168, 85, 247, 0.15)"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

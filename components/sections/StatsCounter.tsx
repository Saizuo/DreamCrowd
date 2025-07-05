"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, DollarSign, Globe, Award, Target } from "lucide-react";

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

const stats = [
  {
    label: "Total Funding Raised",
    value: "250M+",
    icon: DollarSign,
    color: "text-purple-400",
    bgColor: "bg-purple-400/20",
    description: "Across all projects"
  },
  {
    label: "Success Rate",
    value: "87%",
    icon: Award,
    color: "text-violet-400",
    bgColor: "bg-violet-400/20",
    description: "Projects funded"
  },
  {
    label: "Active Users",
    value: "75000+",
    icon: Users,
    color: "text-purple-400",
    bgColor: "bg-purple-400/20",
    description: "Creators & investors"
  },
  {
    label: "Countries",
    value: "120+",
    icon: Globe,
    color: "text-fuchsia-400",
    bgColor: "bg-fuchsia-400/20",
    description: "Global reach"
  },
  {
    label: "Average Deal Size",
    value: "500K+",
    icon: Target,
    color: "text-violet-400",
    bgColor: "bg-violet-400/20",
    description: "Per funding round"
  },
  {
    label: "Time to Fund",
    value: "45",
    icon: TrendingUp,
    color: "text-purple-400",
    bgColor: "bg-purple-400/20",
    description: "Days average"
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
      return `${num.toFixed(0)}M+`;
    } else if (value.includes('K')) {
      return `${Math.round(num)}K+`;
    } else if (value.includes('%')) {
      return `${Math.round(num)}%`;
    } else if (value.includes('+')) {
      return `${Math.round(num).toLocaleString()}+`;
    }
    return Math.round(num).toString();
  };

  return <span ref={ref}>{formatValue(count)}</span>;
};

const StatsCounter: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-purple-900/5" />
      <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-3xl animate-pulse delay-2000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Platform </span>
            <span style={gradientTextStyles}>Performance</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Numbers that speak for themselves. See how DreamCrowd is revolutionizing 
            startup funding worldwide.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 rounded-2xl ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
              
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} />
                </p>
                <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-white/60 text-sm">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join the Future of Startup Funding
            </h3>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              These numbers represent real entrepreneurs who turned their dreams into reality 
              and investors who found their next big opportunity. Your success story could be next.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;

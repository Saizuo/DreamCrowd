"use client";
import { motion } from "framer-motion";
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Users, 
  Zap, 
  Target,
  BarChart3,
  Lock,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Our advanced AI evaluates business models, market potential, and growth opportunities with precision.",
    color: "from-purple-400 to-violet-400"
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Access real-time market data and trends to make informed investment decisions.",
    color: "from-violet-400 to-purple-400"
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Bank-level security ensures your investments and personal data are always protected.",
    color: "from-purple-400 to-fuchsia-400"
  },
  {
    icon: Users,
    title: "Smart Matching",
    description: "Connect with investors or startups that align with your goals and values.",
    color: "from-fuchsia-400 to-purple-400"
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Launch campaigns and start raising capital in minutes, not months.",
    color: "from-purple-400 to-violet-400"
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach the right investors with laser-focused campaign targeting.",
    color: "from-violet-400 to-purple-400"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track your campaign performance with detailed analytics and insights.",
    color: "from-purple-400 to-fuchsia-400"
  },
  {
    icon: Lock,
    title: "Compliance Ready",
    description: "Built-in compliance tools ensure all transactions meet regulatory requirements.",
    color: "from-fuchsia-400 to-purple-400"
  },
  {
    icon: Sparkles,
    title: "Innovation Hub",
    description: "Discover groundbreaking startups and innovative investment opportunities.",
    color: "from-purple-400 to-violet-400"
  }
];

const FeatureGrid: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-purple-900/5" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
      
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
            <span className="text-white">Powerful</span>
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"> Features</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Everything you need to launch, fund, and scale your startup with confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300 h-full hover:bg-white/10">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Filter, 
  DollarSign, 
  Building, 
  TrendingUp, 
  Bell, 
  Eye,
  Calendar,
  Star,
  FileText,
  Search,
  Award,
  MessageSquare,
  BarChart3,
  Target,
  Users,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

export default function InvestorDashboard() {
  const [activeFilter, setActiveFilter] = useState("all");

  const stats = [
    {
      label: "Total Invested",
      value: "$2.5M",
      icon: DollarSign,
      color: "text-purple-400",
      bgColor: "bg-purple-400/20"
    },
    {
      label: "Portfolio Companies",
      value: "12",
      icon: Building,
      color: "text-violet-400",
      bgColor: "bg-violet-400/20"
    },
    {
      label: "Avg. ROI",
      value: "3.2x",
      icon: TrendingUp,
      color: "text-purple-400",
      bgColor: "bg-purple-400/20"
    },
    {
      label: "New Matches",
      value: "24",
      icon: Bell,
      color: "text-fuchsia-400",
      bgColor: "bg-fuchsia-400/20"
    }
  ];

  const opportunities = [
    {
      id: 1,
      name: "DreamCrowd - AI-Powered Investment Platform",
      score: 95,
      category: "AI/ML",
      industry: "FinTech",
      sector: "B2B SaaS",
      fundingGoal: "$2.5M",
      stage: "Series A",
      marketSize: "$12.8B",
      founderExp: "15+ years",
      description: "Revolutionary AI platform connecting visionary creators with smart investors"
    },
    {
      id: 2,
      name: "DreamCrowd Analytics - Investment Intelligence",
      score: 88,
      category: "Data Analytics",
      industry: "FinTech",
      sector: "B2B",
      fundingGoal: "$1.2M",
      stage: "Seed Extension",
      marketSize: "$8.4B",
      founderExp: "12+ years",
      description: "Advanced analytics suite for investment decision making and portfolio optimization"
    },
    {
      id: 3,
      name: "DreamCrowd Mobile - Creator-Investor Network",
      score: 92,
      category: "Mobile",
      industry: "Social Network",
      sector: "B2C",
      fundingGoal: "$1.8M",
      stage: "Series A",
      marketSize: "$15.2B",
      founderExp: "10+ years",
      description: "Mobile-first platform empowering the next generation of entrepreneurs"
    }
  ];

  const quickActions = [
    {
      name: "Browse All Projects",
      icon: Search,
      color: "from-purple-500 to-violet-500",
      description: "Explore investment opportunities"
    },
    {
      name: "Messages (8 new)",
      icon: MessageSquare,
      color: "from-violet-500 to-fuchsia-500",
      description: "Connect with founders"
    },
    {
      name: "Portfolio Reports",
      icon: BarChart3,
      color: "from-purple-600 to-purple-400",
      description: "View performance analytics"
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-purple-400";
    if (score >= 80) return "text-violet-400";
    return "text-fuchsia-400";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return "bg-purple-400/20";
    if (score >= 80) return "bg-violet-400/20";
    return "bg-fuchsia-400/20";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950 pt-24 pb-12">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-purple-900/5" />
      <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Investor Dashboard
            </h1>
            <p className="text-white/70 text-lg">
              Discover your next investment opportunity.
            </p>
          </div>
          <Button
            className="mt-4 md:mt-0 text-white font-semibold border-0 hover:scale-105 transition-all duration-300 px-8 py-3 rounded-full"
            style={gradientButtonStyles}
          >
            <Filter className="w-5 h-5 mr-2" />
            Filter Opportunities
          </Button>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <TrendingUp className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Curated Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Curated Opportunities</h2>
          <div className="space-y-6">
            {opportunities.map((opportunity, index) => (
              <div
                key={opportunity.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start gap-4 mb-4 lg:mb-0">
                    <div className={`w-16 h-16 rounded-2xl ${getScoreBgColor(opportunity.score)} flex items-center justify-center`}>
                      <span className={`text-2xl font-bold ${getScoreColor(opportunity.score)}`}>
                        {opportunity.score}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{opportunity.name}</h3>
                      <p className="text-white/60 text-sm mb-2">{opportunity.description}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium">
                          {opportunity.category}
                        </span>
                        <span className="px-2 py-1 bg-violet-500/20 text-violet-400 rounded-full text-xs font-medium">
                          {opportunity.industry}
                        </span>
                        <span className="px-2 py-1 bg-fuchsia-500/20 text-fuchsia-400 rounded-full text-xs font-medium">
                          {opportunity.sector}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-white">
                      {opportunity.score}/100
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-lg font-bold text-white">
                      {opportunity.fundingGoal}
                    </p>
                    <p className="text-white/60 text-sm">Funding Goal</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-white">{opportunity.stage}</p>
                    <p className="text-white/60 text-sm">Stage</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-white">{opportunity.marketSize}</p>
                    <p className="text-white/60 text-sm">Market Size</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-white">{opportunity.founderExp}</p>
                    <p className="text-white/60 text-sm">Founder Experience</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="ghost"
                      className="text-white/90 border border-purple-400/30 hover:bg-purple-400/10 hover:text-white transition-all duration-300 text-sm"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="ghost"
                      className="text-white/90 border border-purple-400/30 hover:bg-purple-400/10 hover:text-white transition-all duration-300 text-sm"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Call
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <button
                key={action.name}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105 text-left group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{action.name}</h3>
                <p className="text-white/60 text-sm">{action.description}</p>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

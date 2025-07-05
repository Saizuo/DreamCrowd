"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Plus, 
  DollarSign, 
  Users, 
  TrendingUp, 
  MessageSquare, 
  Eye,
  Clock,
  Star,
  FileText,
  Search,
  Award,
  Calendar,
  Target,
  Activity
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

const CreatorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    {
      label: "Total Raised",
      value: "$2.5M",
      icon: DollarSign,
      color: "text-purple-400",
      bgColor: "bg-purple-400/20"
    },
    {
      label: "Active Investors",
      value: "28",
      icon: Users,
      color: "text-violet-400",
      bgColor: "bg-violet-400/20"
    },
    {
      label: "Avg. Score",
      value: "95%",
      icon: Award,
      color: "text-purple-400",
      bgColor: "bg-purple-400/20"
    },
    {
      label: "Messages",
      value: "42",
      icon: MessageSquare,
      color: "text-fuchsia-400",
      bgColor: "bg-fuchsia-400/20"
    }
  ];

  const projects = [
    {
      id: 1,
      name: "DreamCrowd - AI-Powered Investment Platform",
      status: "Active",
      statusColor: "bg-purple-500",
      raised: 2500000,
      target: 5000000,
      investors: 28,
      daysLeft: 45,
      score: 95,
      description: "Revolutionary AI platform connecting visionary creators with smart investors"
    },
    {
      id: 2,
      name: "DreamCrowd Mobile - Creator Network App",
      status: "Under Review",
      statusColor: "bg-violet-500",
      raised: 0,
      target: 1200000,
      investors: 0,
      daysLeft: 60,
      score: 88,
      description: "Mobile-first platform empowering the next generation of entrepreneurs"
    }
  ];

  const quickActions = [
    {
      name: "Submit New Idea",
      icon: Plus,
      color: "from-purple-500 to-violet-500",
      description: "Share your next big idea"
    },
    {
      name: "Find Investors",
      icon: Search,
      color: "from-violet-500 to-fuchsia-500",
      description: "Connect with potential investors"
    },
    {
      name: "View Documents",
      icon: FileText,
      color: "from-purple-600 to-purple-400",
      description: "Access legal documents"
    }
  ];

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
              Creator Dashboard
            </h1>
            <p className="text-white/70 text-lg">
              Welcome back! Here's your DreamCrowd project overview.
            </p>
          </div>
          <Button
            className="mt-4 md:mt-0 text-white font-semibold border-0 hover:scale-105 transition-all duration-300 px-8 py-3 rounded-full"
            style={gradientButtonStyles}
          >
            <Plus className="w-5 h-5 mr-2" />
            Submit New Idea
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

        {/* Your Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Your DreamCrowd Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex items-center gap-3 mb-4 lg:mb-0">
                    <div className={`w-3 h-3 rounded-full ${project.statusColor}`} />
                    <div>
                      <h3 className="text-xl font-bold text-white">{project.name}</h3>
                      <p className="text-white/60 text-sm">{project.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Active' 
                        ? 'bg-purple-500/20 text-purple-400' 
                        : 'bg-violet-500/20 text-violet-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">
                      ${project.raised.toLocaleString()}
                    </p>
                    <p className="text-white/60 text-sm">
                      of ${project.target.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">{project.investors}</p>
                    <p className="text-white/60 text-sm">investors</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">{project.daysLeft}</p>
                    <p className="text-white/60 text-sm">days left</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-400">{project.score}/100</p>
                    <p className="text-white/60 text-sm">AI Score</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="ghost"
                      className="text-white/90 border border-purple-400/30 hover:bg-purple-400/10 hover:text-white transition-all duration-300 text-sm"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-white/90 border border-purple-400/30 hover:bg-purple-400/10 hover:text-white transition-all duration-300 text-sm"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Messages
                    </Button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-violet-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(project.raised / project.target) * 100}%` }}
                  />
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
};

export default CreatorDashboard;

"use client";
import { motion } from "framer-motion";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import { 
  BookOpen, 
  TrendingUp, 
  Users, 
  Shield,
  Lightbulb,
  Target,
  Calendar,
  Clock,
  ArrowRight,
  Play,
  FileText,
  BarChart3
} from "lucide-react";

const blueGradientTextStyles = {
  background: `linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}

const categories = [
  {
    icon: Lightbulb,
    title: "Startup Guides",
    count: "24 articles",
    color: "text-yellow-400",
    bgColor: "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30"
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    count: "18 articles",
    color: "text-green-400",
    bgColor: "from-green-500/20 to-green-600/20 border-green-500/30"
  },
  {
    icon: Users,
    title: "Investor Relations",
    count: "15 articles",
    color: "text-blue-400",
    bgColor: "from-blue-500/20 to-blue-600/20 border-blue-500/30"
  },
  {
    icon: Shield,
    title: "Legal & Compliance",
    count: "12 articles",
    color: "text-purple-400",
    bgColor: "from-purple-500/20 to-purple-600/20 border-purple-500/30"
  }
];

const featuredArticles = [
  {
    title: "The Complete Guide to Startup Valuation in 2024",
    excerpt: "Learn how to value your startup accurately and present compelling numbers to investors.",
    category: "Startup Guides",
    readTime: "8 min read",
    date: "Dec 15, 2025",
    type: "article",
    featured: true
  },
  {
    title: "How AI is Changing Investment Decisions",
    excerpt: "Discover how artificial intelligence is revolutionizing the way investors evaluate opportunities.",
    category: "Market Insights",
    readTime: "6 min read",
    date: "Dec 12, 2025",
    type: "article"
  },
  {
    title: "Pitch Deck Masterclass",
    excerpt: "Create compelling pitch decks that capture investor attention and secure funding.",
    category: "Startup Guides", 
    readTime: "45 min watch",
    date: "Dec 10, 2025",
    type: "video"
  },
  {
    title: "Understanding Term Sheets: A Founder's Guide",
    excerpt: "Navigate the complex world of investment terms and negotiate better deals.",
    category: "Legal & Compliance",
    readTime: "10 min read", 
    date: "Dec 8, 2025",
    type: "article"
  },
  {
    title: "Market Trends Report: Q4 2025",
    excerpt: "Comprehensive analysis of funding trends and market opportunities.",
    category: "Market Insights",
    readTime: "12 min read",
    date: "Dec 5, 2025",
    type: "report"
  },
  {
    title: "Building Investor Relationships That Last",
    excerpt: "Best practices for maintaining strong relationships with your investors post-funding.",
    category: "Investor Relations",
    readTime: "7 min read",
    date: "Dec 3, 2025",
    type: "article"
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'video':
      return Play;
    case 'report':
      return BarChart3;
    default:
      return FileText;
  }
};

const Resources: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/5 to-black"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            <span className="text-white">Knowledge</span>
            <br />
            <span style={blueGradientTextStyles}>Hub</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Expert insights, guides, and resources to help you navigate the startup 
            and investment landscape successfully.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard 
                className="p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
                spotlightColor="rgba(59, 130, 246, 0.1)"
              >
                <div className="text-center">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.bgColor} mb-4`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{category.title}</h3>
                  <p className="text-white/60 text-sm">{category.count}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-400" />
            Featured Article
          </h3>
          
          <SpotlightCard 
            className="p-8 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            spotlightColor="rgba(59, 130, 246, 0.15)"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    {featuredArticles[0].category}
                  </span>
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <Calendar className="w-4 h-4" />
                    {featuredArticles[0].date}
                  </div>
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <Clock className="w-4 h-4" />
                    {featuredArticles[0].readTime}
                  </div>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  {featuredArticles[0].title}
                </h4>
                
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  {featuredArticles[0].excerpt}
                </p>
                
                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium">
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="lg:w-80 h-48 lg:h-auto bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg border border-blue-500/20 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-blue-400/50" />
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Latest Resources</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.slice(1).map((article, index) => {
              const TypeIcon = getTypeIcon(article.type);
              
              return (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SpotlightCard 
                    className="p-6 h-full hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                    spotlightColor="rgba(59, 130, 246, 0.1)"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2 py-1 rounded text-xs font-medium bg-gray-500/20 text-gray-400">
                          {article.category}
                        </span>
                        <TypeIcon className="w-4 h-4 text-blue-400" />
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                        {article.title}
                      </h4>
                      
                      <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-4 text-white/50 text-xs">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>
                        
                        <ArrowRight className="w-4 h-4 text-blue-400" />
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <SpotlightCard 
            className="p-8 inline-block"
            spotlightColor="rgba(59, 130, 246, 0.2)"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-white/70 mb-6 max-w-md">
              Get the latest insights, guides, and market updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
              />
              <button
                className="px-6 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105"
                style={{ background: `linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)` }}
              >
                Subscribe
              </button>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
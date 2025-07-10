"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Grid, List, TrendingUp, Clock, DollarSign, Users, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { mockCompanies, categories, sortOptions, Company } from "@/lib/mockData";

const CompanyCard: React.FC<{ company: Company; viewMode: "grid" | "list" }> = ({ company, viewMode }) => {
  const fundingPercentage = (company.currentFunding / company.fundingGoal) * 100;
  
  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-[1.02]"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <img
              src={company.logo}
              alt={company.name}
              className="w-20 h-20 rounded-2xl object-cover"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{company.name}</h3>
                  {company.featured && (
                    <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                  {company.trending && (
                    <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full text-xs font-medium">
                      Trending
                    </span>
                  )}
                </div>
                <p className="text-white/70 text-sm mb-2">{company.shortIntro}</p>
                <div className="flex items-center gap-4 text-sm text-white/60">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {company.location}
                  </span>
                  <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs">
                    {company.category}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2 mt-4 md:mt-0">
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">
                    ${(company.currentFunding / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-sm text-white/60">
                    of ${(company.fundingGoal / 1000000).toFixed(1)}M
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-white/60">
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {company.backers}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {company.daysLeft}d
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {company.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/10 text-white/70 px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-violet-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(fundingPercentage, 100)}%` }}
                  />
                </div>
                <Link href={`/company/${company.id}`}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105"
    >
      <div className="relative">
        <img
          src={company.coverImage}
          alt={company.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          {company.featured && (
            <span className="bg-purple-500/80 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
              Featured
            </span>
          )}
          {company.trending && (
            <span className="bg-orange-500/80 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
              Trending
            </span>
          )}
        </div>
        <div className="absolute bottom-4 left-4">
          <img
            src={company.logo}
            alt={company.name}
            className="w-16 h-16 rounded-xl object-cover border-2 border-white/20"
          />
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white">{company.name}</h3>
          <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs font-medium">
            {company.category}
          </span>
        </div>
        
        <p className="text-white/70 text-sm mb-4 line-clamp-2">{company.shortIntro}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {company.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="bg-white/10 text-white/70 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/60">Progress</span>
            <span className="text-white font-medium">{Math.round(fundingPercentage)}%</span>
          </div>
          
          <div className="w-full bg-white/10 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-violet-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(fundingPercentage, 100)}%` }}
            />
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-white/60">
              <DollarSign className="w-3 h-3" />
              <span>${(company.currentFunding / 1000000).toFixed(1)}M raised</span>
            </div>
            <div className="flex items-center gap-1 text-white/60">
              <Clock className="w-3 h-3" />
              <span>{company.daysLeft} days left</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1 text-white/60 text-sm">
              <Users className="w-3 h-3" />
              <span>{company.backers} backers</span>
            </div>
            <Link href={`/company/${company.id}`}>
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function DiscoverPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredAndSortedCompanies = useMemo(() => {
    let filtered = mockCompanies;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(company =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.shortIntro.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(company => company.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case "trending":
        filtered.sort((a, b) => {
          if (a.trending && !b.trending) return -1;
          if (!a.trending && b.trending) return 1;
          return 0;
        });
        break;
      case "popular":
        filtered.sort((a, b) => b.backers - a.backers);
        break;
      case "funding":
        filtered.sort((a, b) => b.currentFunding - a.currentFunding);
        break;
      case "ending":
        filtered.sort((a, b) => a.daysLeft - b.daysLeft);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950 pt-20 pb-12">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-purple-900/5" />
      <div className="absolute top-40 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Discover </span>
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore groundbreaking companies and projects seeking investment. 
            Find your next big opportunity.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                  <Input
                    placeholder="Search companies, technologies, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-purple-400/50"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex-shrink-0">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-white/10 border border-white/20 text-white rounded-lg px-4 py-2 focus:border-purple-400/50 focus:outline-none"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div className="flex-shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white/10 border border-white/20 text-white rounded-lg px-4 py-2 focus:border-purple-400/50 focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-slate-800">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex-shrink-0">
                <div className="flex bg-white/10 rounded-lg border border-white/20">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-l-lg transition-all duration-300 ${
                      viewMode === "grid" 
                        ? "bg-purple-500/30 text-purple-400" 
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-r-lg transition-all duration-300 ${
                      viewMode === "list" 
                        ? "bg-purple-500/30 text-purple-400" 
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <p className="text-white/70">
              Showing {filteredAndSortedCompanies.length} companies
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-white/60">
                {filteredAndSortedCompanies.filter(c => c.trending).length} trending
              </span>
            </div>
          </div>
        </motion.div>

        {/* Companies Grid/List */}
        <div className={`${
          viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "space-y-6"
        }`}>
          {filteredAndSortedCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CompanyCard company={company} viewMode={viewMode} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAndSortedCompanies.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
              <Search className="w-8 h-8 text-white/60" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No companies found</h3>
            <p className="text-white/60 mb-8">
              Try adjusting your search criteria or explore different categories.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSortBy("newest");
              }}
              variant="ghost"
              className="text-purple-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

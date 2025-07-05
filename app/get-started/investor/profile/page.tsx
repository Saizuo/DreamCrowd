"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Upload, Camera, DollarSign, Target, TrendingUp, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

// Define proper interface for form data
interface FormData {
  profilePicture: File | null;
  bio: string;
  experience: string;
  investmentRange: string;
  investmentStage: string;
  investmentTypes: string[];
  portfolioSize: string;
  geographicFocus: string;
  riskTolerance: string;
  timeCommitment: string;
  industries: string[];
  investmentCriteria: string;
  checkSize: string;
}

export default function InvestorProfile() {
  const [formData, setFormData] = useState<FormData>({
    profilePicture: null,
    bio: "",
    experience: "",
    investmentRange: "",
    investmentStage: "",
    investmentTypes: [],
    portfolioSize: "",
    geographicFocus: "",
    riskTolerance: "",
    timeCommitment: "",
    industries: [],
    investmentCriteria: "",
    checkSize: ""
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Updated function signature to handle all input types
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        profilePicture: file
      });
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIndustryToggle = (industry: string) => {
    const updatedIndustries = formData.industries.includes(industry)
      ? formData.industries.filter(i => i !== industry)
      : [...formData.industries, industry];
    
    setFormData({
      ...formData,
      industries: updatedIndustries
    });
  };

  const handleInvestmentTypeToggle = (type: string) => {
    const updatedTypes = formData.investmentTypes.includes(type)
      ? formData.investmentTypes.filter(t => t !== type)
      : [...formData.investmentTypes, type];
    
    setFormData({
      ...formData,
      investmentTypes: updatedTypes
    });
  };

  const industries = [
    "AI/ML", "FinTech", "Healthcare", "EdTech", "CleanTech", "SaaS", 
    "E-commerce", "Biotech", "Cybersecurity", "Real Estate", "Gaming", 
    "Social Impact", "Food & Beverage", "Fashion", "Transportation", "Energy"
  ];

  const investmentTypes = [
    "Equity", "Debt", "Convertible", "SAFE", "Revenue Share", "Royalty"
  ];

  const investmentStages = [
    "Pre-Seed", "Seed", "Series A", "Series B", "Series C", "Later Stage", "All Stages"
  ];

  const isFormValid = formData.bio && formData.experience && formData.investmentRange && formData.investmentStage;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950 relative overflow-hidden pt-24 pb-12">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-purple-900/5" />
      <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

      {/* Navigation */}
      <nav className="relative z-10 px-6 pb-6">
        <Link href="/get-started/investor/info" className="text-white/80 hover:text-white transition-colors duration-300">
          <ChevronLeft className="w-5 h-5 inline mr-2" />
          Back
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Progress Bar */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
              <span className="text-white text-sm font-medium">1</span>
            </div>
            <div className="w-12 h-1 bg-purple-500"></div>
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
              <span className="text-white text-sm font-medium">2</span>
            </div>
            <div className="w-12 h-1 bg-purple-500"></div>
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
              <span className="text-white text-sm font-medium">3</span>
            </div>
            <div className="w-12 h-1 bg-purple-500/30"></div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white/60 text-sm font-medium">4</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span style={gradientTextStyles}>Your Investment Profile</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Tell us about your investment preferences and experience
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8"
        >
          {/* Profile Picture */}
          <div className="mb-8">
            <label className="block text-white/90 font-medium mb-4">Profile Picture</label>
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-dashed border-white/30 flex items-center justify-center overflow-hidden">
                {previewImage ? (
                  <img src={previewImage} alt="Preview" className="w-full h-full object-cover rounded-full" />
                ) : (
                  <Camera className="w-8 h-8 text-white/50" />
                )}
              </div>
              <div>
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    className="text-white/90 border border-purple-400/30 hover:bg-purple-400/10 hover:text-white transition-all duration-300"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                </label>
                <p className="text-white/60 text-sm mt-2">JPG, PNG or GIF (max 5MB)</p>
              </div>
            </div>
          </div>

          {/* Personal Bio */}
          <div className="mb-8">
            <label className="block text-white/90 font-medium mb-2">Personal Bio *</label>
            <Textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 min-h-[100px]"
              placeholder="Tell us about yourself, your background, and what drives you as an investor..."
            />
          </div>

          {/* Investment Experience */}
          <div className="mb-8">
            <label className="block text-white/90 font-medium mb-2">Investment Experience *</label>
            <Textarea
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 min-h-[100px]"
              placeholder="Share your investment experience, previous investments, or relevant background..."
            />
          </div>

          {/* Investment Range & Stage */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-white/90 font-medium mb-2">Investment Range *</label>
              <select
                name="investmentRange"
                value={formData.investmentRange}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 focus:border-purple-400 focus:outline-none"
              >
                <option value="" className="bg-gray-800 text-white">Select your typical investment range</option>
                <option value="1k-10k" className="bg-gray-800 text-white">$1K - $10K</option>
                <option value="10k-50k" className="bg-gray-800 text-white">$10K - $50K</option>
                <option value="50k-100k" className="bg-gray-800 text-white">$50K - $100K</option>
                <option value="100k-500k" className="bg-gray-800 text-white">$100K - $500K</option>
                <option value="500k-1m" className="bg-gray-800 text-white">$500K - $1M</option>
                <option value="1m+" className="bg-gray-800 text-white">$1M+</option>
              </select>
            </div>
            <div>
              <label className="block text-white/90 font-medium mb-2">Preferred Investment Stage *</label>
              <select
                name="investmentStage"
                value={formData.investmentStage}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 focus:border-purple-400 focus:outline-none"
              >
                <option value="" className="bg-gray-800 text-white">Select preferred stage</option>
                {investmentStages.map((stage) => (
                  <option key={stage} value={stage} className="bg-gray-800 text-white">{stage}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Investment Types */}
          <div className="mb-8">
            <label className="block text-white/90 font-medium mb-4">Investment Types</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {investmentTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleInvestmentTypeToggle(type)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm ${
                    formData.investmentTypes.includes(type)
                      ? 'bg-purple-500/20 border-purple-400 text-purple-400'
                      : 'bg-white/5 border-white/20 text-white/70 hover:border-purple-400/50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio & Geographic Focus */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-white/90 font-medium mb-2">Portfolio Size</label>
              <select
                name="portfolioSize"
                value={formData.portfolioSize}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 focus:border-purple-400 focus:outline-none"
              >
                <option value="" className="bg-gray-800 text-white">Select current portfolio size</option>
                <option value="0" className="bg-gray-800 text-white">Just starting</option>
                <option value="1-5" className="bg-gray-800 text-white">1-5 investments</option>
                <option value="6-15" className="bg-gray-800 text-white">6-15 investments</option>
                <option value="16-30" className="bg-gray-800 text-white">16-30 investments</option>
                <option value="30+" className="bg-gray-800 text-white">30+ investments</option>
              </select>
            </div>
            <div>
              <label className="block text-white/90 font-medium mb-2">Geographic Focus</label>
              <select
                name="geographicFocus"
                value={formData.geographicFocus}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 focus:border-purple-400 focus:outline-none"
              >
                <option value="" className="bg-gray-800 text-white">Select geographic focus</option>
                <option value="local" className="bg-gray-800 text-white">Local/Regional</option>
                <option value="national" className="bg-gray-800 text-white">National</option>
                <option value="international" className="bg-gray-800 text-white">International</option>
                <option value="global" className="bg-gray-800 text-white">Global</option>
              </select>
            </div>
          </div>

          {/* Risk Tolerance & Time Commitment */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-white/90 font-medium mb-2">Risk Tolerance</label>
              <select
                name="riskTolerance"
                value={formData.riskTolerance}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 focus:border-purple-400 focus:outline-none"
              >
                <option value="" className="bg-gray-800 text-white">Select risk tolerance</option>
                <option value="conservative" className="bg-gray-800 text-white">Conservative</option>
                <option value="moderate" className="bg-gray-800 text-white">Moderate</option>
                <option value="aggressive" className="bg-gray-800 text-white">Aggressive</option>
                <option value="high-risk" className="bg-gray-800 text-white">High Risk/High Reward</option>
              </select>
            </div>
            <div>
              <label className="block text-white/90 font-medium mb-2">Time Commitment</label>
              <select
                name="timeCommitment"
                value={formData.timeCommitment}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 focus:border-purple-400 focus:outline-none"
              >
                <option value="" className="bg-gray-800 text-white">Select time commitment</option>
                <option value="passive" className="bg-gray-800 text-white">Passive investor</option>
                <option value="advisor" className="bg-gray-800 text-white">Advisor role</option>
                <option value="mentor" className="bg-gray-800 text-white">Active mentor</option>
                <option value="board" className="bg-gray-800 text-white">Board participation</option>
              </select>
            </div>
          </div>

          {/* Industries of Interest */}
          <div className="mb-8">
            <label className="block text-white/90 font-medium mb-4">Industries of Interest</label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {industries.map((industry) => (
                <button
                  key={industry}
                  type="button"
                  onClick={() => handleIndustryToggle(industry)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm ${
                    formData.industries.includes(industry)
                      ? 'bg-purple-500/20 border-purple-400 text-purple-400'
                      : 'bg-white/5 border-white/20 text-white/70 hover:border-purple-400/50'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          {/* Investment Criteria */}
          <div className="mb-8">
            <label className="block text-white/90 font-medium mb-2">Investment Criteria</label>
            <Textarea
              name="investmentCriteria"
              value={formData.investmentCriteria}
              onChange={handleInputChange}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 min-h-[120px]"
              placeholder="What do you look for in an investment? (e.g., team quality, market size, traction, revenue model...)"
            />
          </div>

          {/* Check Size */}
          <div className="mb-8">
            <label className="block text-white/90 font-medium mb-2">Typical Check Size</label>
            <Input
              name="checkSize"
              value={formData.checkSize}
              onChange={handleInputChange}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
              placeholder="e.g., $25,000"
            />
          </div>

          {/* Investment Information */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              Investment Approach
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/90 font-medium mb-2">Investment Philosophy</label>
                <Textarea
                  name="investmentPhilosophy"
                  value={formData.investmentCriteria}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 min-h-[100px]"
                  placeholder="What's your investment philosophy? What drives your investment decisions?"
                />
              </div>
              <div>
                <label className="block text-white/90 font-medium mb-2">Value Add</label>
                <Textarea
                  name="valueAdd"
                  value={formData.investmentCriteria}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 min-h-[100px]"
                  placeholder="How do you help startups beyond capital? (mentorship, connections, expertise...)"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link href={isFormValid ? "/get-started/investor/confirmation" : "#"}>
            <Button
              size="lg"
              disabled={!isFormValid}
              className={`text-white font-semibold border-0 hover:scale-105 transition-all duration-300 px-12 py-4 text-lg rounded-full ${
                !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              style={isFormValid ? gradientButtonStyles : { background: '#6b7280' }}
            >
              <span className="flex items-center gap-3">
                Complete Profile <ChevronRight className="w-5 h-5" />
              </span>
            </Button>
          </Link>
          <p className="text-white/60 text-sm mt-4">
            Step 3 of 4 - Almost there!
          </p>
        </motion.div>
      </div>
    </div>
  );
}

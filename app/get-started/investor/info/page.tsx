"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  twitter: string;
  website: string;
  company: string;
  title: string;
}

export default function InvestorInfo() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    linkedIn: "",
    twitter: "",
    website: "",
    company: "",
    title: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.phone && formData.location;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950 relative overflow-hidden pt-24 pb-12">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-purple-900/5" />
      <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

      {/* Navigation */}
      <nav className="relative z-10 px-6 pb-6">
        <Link href="/get-started/investor" className="text-white/80 hover:text-white transition-colors duration-300">
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
            <div className="w-12 h-1 bg-purple-500/30"></div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white/60 text-sm font-medium">3</span>
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
            <span style={gradientTextStyles}>Tell Us About You</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Let's start with your basic information
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white/90 font-medium mb-2">First Name *</label>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                placeholder="Your first name"
              />
            </div>
            <div>
              <label className="block text-white/90 font-medium mb-2">Last Name *</label>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                placeholder="Your last name"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-white/90 font-medium mb-2">Email Address *</label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white/90 font-medium mb-2">Phone Number *</label>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label className="block text-white/90 font-medium mb-2">Location *</label>
              <Input
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                placeholder="City, Country"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white/90 font-medium mb-2">Company/Organization</label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label className="block text-white/90 font-medium mb-2">Title/Role</label>
              <Input
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                placeholder="Your professional title"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-white/90 font-medium mb-2">LinkedIn Profile</label>
            <Input
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleInputChange}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white/90 font-medium mb-2">Twitter/X Profile</label>
              <Input
                name="twitter"
                value={formData.twitter}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                placeholder="https://twitter.com/yourusername"
              />
            </div>
            <div>
              <label className="block text-white/90 font-medium mb-2">Website</label>
              <Input
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                placeholder="https://yourwebsite.com"
              />
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
          <Link href={isFormValid ? "/get-started/investor/profile" : "#"}>
            <Button
              size="lg"
              disabled={!isFormValid}
              className={`text-white font-semibold border-0 hover:scale-105 transition-all duration-300 px-12 py-4 text-lg rounded-full ${
                !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              style={isFormValid ? gradientButtonStyles : { background: '#6b7280' }}
            >
              <span className="flex items-center gap-3">
                Continue <ChevronRight className="w-5 h-5" />
              </span>
            </Button>
          </Link>
          <p className="text-white/60 text-sm mt-4">
            Step 2 of 4 - Building your profile
          </p>
        </motion.div>
      </div>
    </div>
  );
}

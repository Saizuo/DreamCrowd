"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Globe, Twitter, Linkedin, Users, DollarSign, Clock, TrendingUp, Award, CheckCircle, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { mockCompanies } from "@/lib/mockData";

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

export default function CompanyPage() {
  const { id } = useParams();
  const company = mockCompanies.find(c => c.id === id);

  if (!company) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Company Not Found</h1>
          <Link href="/discover">
            <Button variant="ghost" className="text-purple-400 hover:text-white">
              Back to Discovery
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const fundingPercentage = (company.currentFunding / company.fundingGoal) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={company.coverImage}
          alt={company.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        
        {/* Navigation */}
        <div className="absolute top-6 left-6 z-10">
          <Link href="/discover">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Discovery
            </Button>
          </Link>
        </div>

        {/* Company Header */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end gap-6">
              <div className="flex-shrink-0">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-24 h-24 rounded-2xl object-cover border-4 border-white/20"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    {company.name}
                  </h1>
                  {company.featured && (
                    <span className="bg-purple-500/80 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      Featured
                    </span>
                  )}
                  {company.trending && (
                    <span className="bg-orange-500/80 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      Trending
                    </span>
                  )}
                </div>
                
                <p className="text-xl text-white/90 mb-4 max-w-2xl">
                  {company.shortIntro}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-white/80">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{company.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="w-4 h-4" />
                    <a href={company.website} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                      Website
                    </a>
                  </div>
                  {company.socialLinks.twitter && (
                    <a href={company.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {company.socialLinks.linkedin && (
                    <a href={company.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">About {company.name}</h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <p className="text-white/80 leading-relaxed text-lg mb-6">
                  {company.fullIntro}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {company.tags.map((tag) => (
                    <span
                        key={tag}
                      className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Vision & Goals */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Vision & Goals</h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Our Vision</h3>
                  <p className="text-white/80 leading-relaxed">
                    {company.vision}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Key Goals</h3>
                  <div className="space-y-3">
                    {company.goals.map((goal, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Team Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Meet the Team</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {company.team.map((member, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-start gap-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                        <p className="text-purple-400 text-sm font-medium mb-3">{member.role}</p>
                        <p className="text-white/70 text-sm leading-relaxed">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Testimonials */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">What People Say</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {company.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-start gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-white/80 leading-relaxed mb-4">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <p className="text-white font-medium">{testimonial.name}</p>
                          <p className="text-white/60 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Funding Progress */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 sticky top-8"
            >
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-white mb-2">
                  ${(company.currentFunding / 1000000).toFixed(1)}M
                </div>
                <div className="text-white/60">
                  raised of ${(company.fundingGoal / 1000000).toFixed(1)}M goal
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm text-white/60 mb-2">
                  <span>Progress</span>
                  <span>{Math.round(fundingPercentage)}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-violet-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(fundingPercentage, 100)}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span className="text-2xl font-bold text-white">{company.backers}</span>
                  </div>
                  <div className="text-white/60 text-sm">Backers</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span className="text-2xl font-bold text-white">{company.daysLeft}</span>
                  </div>
                  <div className="text-white/60 text-sm">Days Left</div>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  className="w-full text-white font-semibold border-0 hover:scale-105 transition-all duration-300 py-3"
                  style={gradientButtonStyles}
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Invest Now
                </Button>
                
                <Button
                  variant="ghost"
                  className="w-full text-white/90 border border-purple-400/30 hover:bg-purple-400/10 hover:text-white transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Team
                </Button>
                
                <Button
                  variant="ghost"
                  className="w-full text-white/90 border border-purple-400/30 hover:bg-purple-400/10 hover:text-white transition-all duration-300"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Project
                </Button>
              </div>
            </motion.div>

            {/* Company Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Company Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Category</span>
                  <span className="text-white font-medium">{company.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Founded</span>
                  <span className="text-white font-medium">
                    {new Date(company.createdAt).getFullYear()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Location</span>
                  <span className="text-white font-medium">{company.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Team Size</span>
                  <span className="text-white font-medium">{company.team.length} members</span>
                </div>
              </div>
            </motion.div>

            {/* Related Companies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Similar Companies</h3>
              <div className="space-y-3">
                {mockCompanies
                  .filter(c => c.id !== company.id && c.category === company.category)
                  .slice(0, 3)
                  .map((relatedCompany) => (
                    <Link key={relatedCompany.id} href={`/company/${relatedCompany.id}`}>
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                        <img
                          src={relatedCompany.logo}
                          alt={relatedCompany.name}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <p className="text-white font-medium text-sm">{relatedCompany.name}</p>
                          <p className="text-white/60 text-xs">{relatedCompany.category}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

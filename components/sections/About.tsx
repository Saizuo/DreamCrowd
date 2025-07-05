"use client";
import { motion } from "framer-motion";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import { 
  Target, 
  Eye, 
  Heart,
  Users,
  Award,
  Zap,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";

const blueGradientTextStyles = {
  background: `linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    description: "Democratizing access to capital and empowering entrepreneurs worldwide to turn their dreams into reality.",
    color: "text-blue-400",
    bgColor: "from-blue-500/20 to-blue-600/20 border-blue-500/30"
  },
  {
    icon: Eye,
    title: "Visionary",
    description: "Building the future where every great idea has the opportunity to receive the funding it deserves.",
    color: "text-purple-400",
    bgColor: "from-purple-500/20 to-purple-600/20 border-purple-500/30"
  },
  {
    icon: Heart,
    title: "Community First",
    description: "Fostering meaningful connections between passionate creators and smart investors who believe in their vision.",
    color: "text-green-400",
    bgColor: "from-green-500/20 to-green-600/20 border-green-500/30"
  }
];

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    bio: "Former VC analyst with 8 years in startup funding. Built DreamCrowd after seeing too many great ideas go unfunded.",
    image: "/api/placeholder/150/150",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Sarah Rodriguez",
    role: "CTO",
    bio: "AI/ML expert from Google. Leading our intelligent matching algorithms and platform architecture.",
    image: "/api/placeholder/150/150",
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Marcus Johnson",
    role: "Head of Partnerships",
    bio: "20+ years in investment banking. Building relationships with top-tier investors and strategic partners.",
    image: "/api/placeholder/150/150",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

const About: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black"></div>
      
      {/* Floating elements */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-48 h-48 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
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
            <span className="text-white">Our </span>
            <span style={blueGradientTextStyles}>Story</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Founded by entrepreneurs, for entrepreneurs. We understand the struggle of turning 
            great ideas into funded realities.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <SpotlightCard 
            className="p-8 md:p-12"
            spotlightColor="rgba(59, 130, 246, 0.1)"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                Why We Built DreamCrowd
              </h3>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                After watching countless brilliant entrepreneurs struggle to find the right investors, 
                and seeing investors miss out on amazing opportunities due to poor matching, we knew 
                there had to be a better way.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                DreamCrowd was born from the belief that <span style={blueGradientTextStyles} className="font-semibold">every great idea deserves a chance</span>, 
                and every smart investor should have access to the next big thing. Our AI-powered platform 
                makes both sides of this equation more efficient and successful.
              </p>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12">
            What We <span style={blueGradientTextStyles}>Believe</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <SpotlightCard 
                  className="p-6 h-full hover:scale-[1.02] transition-all duration-300"
                  spotlightColor="rgba(59, 130, 246, 0.1)"
                >
                  <div className="text-center">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.bgColor} mb-4`}>
                      <value.icon className={`w-8 h-8 ${value.color}`} />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                    <p className="text-white/70 leading-relaxed">{value.description}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12">
            Meet Our <span style={blueGradientTextStyles}>Team</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <SpotlightCard 
                  className="p-6 hover:scale-[1.02] transition-all duration-300"
                  spotlightColor="rgba(59, 130, 246, 0.1)"
                >
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 border-2 border-blue-500/30 mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-10 h-10 text-blue-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-1">{member.name}</h4>
                    <p className="text-blue-400 mb-3 font-medium">{member.role}</p>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">{member.bio}</p>
                    
                    <div className="flex justify-center gap-3">
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} className="text-white/50 hover:text-blue-400 transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a href={member.socials.twitter} className="text-white/50 hover:text-blue-400 transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.socials.github && (
                        <a href={member.socials.github} className="text-white/50 hover:text-blue-400 transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
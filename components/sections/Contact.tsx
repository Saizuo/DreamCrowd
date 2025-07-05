"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import { 
  Mail, 
  MessageCircle, 
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  HelpCircle,
  BookOpen,
  Users,
  Zap,
  Headphones,
  FileText,
  Shield
} from "lucide-react";

const blueGradientTextStyles = {
  background: `linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    action: "Start Chat",
    availability: "24/7 Available",
    color: "text-green-400",
    bgColor: "from-green-500/20 to-green-600/20 border-green-500/30"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us detailed questions or feedback",
    action: "Send Email",
    availability: "Response within 2 hours",
    color: "text-blue-400",
    bgColor: "from-blue-500/20 to-blue-600/20 border-blue-500/30"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our experts",
    action: "Call Now",
    availability: "Mon-Fri, 9AM-6PM PST",
    color: "text-purple-400",
    bgColor: "from-purple-500/20 to-purple-600/20 border-purple-500/30"
  },
  {
    icon: BookOpen,
    title: "Help Center",
    description: "Browse our comprehensive guides",
    action: "View Docs",
    availability: "Self-service 24/7",
    color: "text-orange-400",
    bgColor: "from-orange-500/20 to-orange-600/20 border-orange-500/30"
  }
];

const supportCategories = [
  {
    icon: Users,
    title: "For Entrepreneurs",
    description: "Get help with submissions, pitch coaching, and funding process",
    topics: ["Account Setup", "Pitch Optimization", "Funding Process", "Platform Features"]
  },
  {
    icon: Zap,
    title: "For Investors",
    description: "Support for deal flow, due diligence, and investment management",
    topics: ["Investment Dashboard", "Deal Sourcing", "Due Diligence Tools", "Portfolio Management"]
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Questions about data protection and platform security",
    topics: ["Data Security", "Privacy Policy", "Compliance", "Account Security"]
  }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
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
            <span className="text-white">Get </span>
            <span style={blueGradientTextStyles}>Support</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our team is here to help you succeed. Choose the support option that works best for you.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard 
                className="p-6 h-full hover:scale-105 transition-all duration-300 cursor-pointer"
                spotlightColor="rgba(59, 130, 246, 0.1)"
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${method.bgColor} mb-4`}>
                    <method.icon className={`w-8 h-8 ${method.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-white/70 text-sm mb-3 leading-relaxed">{method.description}</p>
                  <p className="text-white/50 text-xs mb-4">{method.availability}</p>
                  <button className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${method.color} border border-current border-opacity-30 hover:bg-current hover:bg-opacity-10`}>
                    {method.action}
                  </button>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Support Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-semibold text-white text-center mb-12">
            How Can We <span style={blueGradientTextStyles}>Help You?</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <SpotlightCard 
                  className="p-6 h-full hover:scale-[1.02] transition-all duration-300"
                  spotlightColor="rgba(59, 130, 246, 0.1)"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30 mb-4">
                      <category.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">{category.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{category.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {category.topics.map((topic, topicIndex) => (
                      <div key={topic} className="flex items-center gap-2 text-white/60 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <SpotlightCard 
              className="p-8"
              spotlightColor="rgba(59, 130, 246, 0.15)"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-white/70">We'll get back to you within 2 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-400 transition-colors"
                    >
                      <option value="general">General Support</option>
                      <option value="entrepreneur">Entrepreneur Help</option>
                      <option value="investor">Investor Support</option>
                      <option value="technical">Technical Issue</option>
                      <option value="business">Business Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                      placeholder="Tell us more about how we can help you..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                    style={{ background: `linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)` }}
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </SpotlightCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Details */}
            <SpotlightCard 
              className="p-6"
              spotlightColor="rgba(59, 130, 246, 0.1)"
            >
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                Contact Information
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-white/70 text-sm">support@dreamcrowd.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-white/70 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-white/70 text-sm">
                      123 Innovation Drive<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Business Hours</p>
                    <p className="text-white/70 text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday: 10:00 AM - 4:00 PM PST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Quick Links */}
            <SpotlightCard 
              className="p-6"
              spotlightColor="rgba(59, 130, 246, 0.1)"
            >
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-400" />
                Quick Help
              </h4>
              
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <span>Help Center & FAQs</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-blue-400">→</span>
                  </div>
                </a>
                
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>Getting Started Guide</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-blue-400">→</span>
                  </div>
                </a>
                
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>Community Forum</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-blue-400">→</span>
                  </div>
                </a>
                
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span>Security & Privacy</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-blue-400">→</span>
                  </div>
                </a>
              </div>
            </SpotlightCard>

            {/* Response Time */}
            <SpotlightCard 
              className="p-6"
              spotlightColor="rgba(59, 130, 246, 0.1)"
            >
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Headphones className="w-5 h-5 text-blue-400" />
                Response Times
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Live Chat</span>
                  <span className="text-green-400 font-medium">Instant</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Email Support</span>
                  <span className="text-blue-400 font-medium"> 2 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Phone Support</span>
                  <span className="text-purple-400 font-medium"> 30 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Complex Issues</span>
                  <span className="text-orange-400 font-medium"> 24 hours</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white/60 text-xs">
                  *Response times may vary during peak hours and weekends
                </p>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* FAQ Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <SpotlightCard 
            className="p-8"
            spotlightColor="rgba(59, 130, 246, 0.1)"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Check out our comprehensive FAQ section where we answer the most common questions 
              about funding, investing, and using our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 border border-blue-400/30 hover:bg-blue-400/10">
                View All FAQs
              </button>
              <button
                className="px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105"
                style={{ background: `linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)` }}
              >
                Schedule a Call
              </button>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

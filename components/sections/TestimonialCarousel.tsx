"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    company: "TechFlow Solutions",
    image: "/api/placeholder/60/60",
    rating: 5,
    text: "DreamCrowd transformed how we approach fundraising. The AI matching connected us with investors who truly understood our vision. We raised $2M in just 8 weeks!",
    amount: "$2M raised"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Founder, GreenTech",
    company: "EcoVentures",
    image: "/api/placeholder/60/60",
    rating: 5,
    text: "The platform's analytics gave us insights we never had before. We optimized our pitch and connected with perfect-fit investors. Couldn't be happier with the results.",
    amount: "$5M raised"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Co-founder, HealthAI",
    company: "MedTech Innovations",
    image: "/api/placeholder/60/60",
    rating: 5,
    text: "From day one, DreamCrowd felt different. The quality of investors, the smooth process, and the ongoing support made our Series A journey seamless.",
    amount: "$10M raised"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Investment Partner",
    company: "Venture Capital Pro",
    image: "/api/placeholder/60/60",
    rating: 5,
    text: "As an investor, DreamCrowd saves me countless hours. The AI pre-screening is incredibly accurate, and I've found some of my best investments through the platform.",
    amount: "50+ investments"
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-purple-900/5" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

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
            <span className="text-white">Success</span>
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"> Stories</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Real entrepreneurs and investors sharing their DreamCrowd journey.
          </p>
        </motion.div>

        {/* Testimonial Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows - Perfect mobile positioning */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 md:left-0 lg:-left-16 top-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 md:right-0 lg:-right-16 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-0 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-20"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          {/* Testimonial Content */}
          <div 
            className="max-w-4xl mx-auto"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 lg:p-12 border border-white/10 relative mx-6 md:mx-0"
              >
                <Quote className="w-10 h-10 md:w-12 md:h-12 text-purple-400 mb-4 md:mb-6 opacity-50" />
                
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-6 md:mb-8 font-medium">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-400 to-violet-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-base md:text-lg">
                        {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base md:text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-white/70 text-sm md:text-base">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-purple-400 font-semibold text-sm md:text-base">
                      {testimonials[currentIndex].amount}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-purple-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

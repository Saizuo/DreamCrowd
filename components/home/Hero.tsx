"use client";
import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { AnimatePresence, motion } from "framer-motion";
import { Application } from "@splinetool/runtime";
import Link from "next/link";

import { Button } from "../ui/button";
import { ChevronRight, Zap, Users, Shield, ArrowDown } from "lucide-react";

const purpleGradientTextStyles = {
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
}

const purpleGradientButtonStyles = {
  background: `linear-gradient(
    135deg,
    #a855f7 0%,
    #9333ea 25%,
    #7c3aed 50%,
    #6d28d9 75%,
    #5b21b6 100%
  )`,
  boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)",
}

const Hero: React.FC = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState<boolean>(false);

  const onSplineLoad = (spline: Application): void => {
    setIsSplineLoaded(true);
    if (spline) {
      // spline.setZoom(0.8);
    }
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 z-40 flex items-center justify-center relative overflow-hidden">
      
      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-purple-900/10 pointer-events-none" />
      
      {/* Floating purple orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-3xl animate-pulse delay-2000" />

      {/* 3D Spline */}
      <div className="w-full h-full flex items-center justify-center">
        <AnimatePresence>
          {!isSplineLoaded && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="relative flex gap-2">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className="w-3 h-3 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full animate-bounce"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isSplineLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
          style={{ overflow: 'hidden' }}
        >
          <Spline
            className="w-full h-full"
            style={{ width: '130vw', height: '130vh', overflow: 'hidden' }}
            scene="https://prod.spline.design/rRIdUTAGjEOBNFUc/scene.splinecode"
            onLoad={onSplineLoad}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div
        className="absolute inset-0 w-full h-full flex flex-col items-center justify-start"
        style={{ paddingTop: '15vh' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl px-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight text-center mb-6">
            <span className="text-white">Where Dreams</span>
            <br />
            <span className="text-white">Meet </span>
            <span style={purpleGradientTextStyles}>Capital</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-12"
          >
            DreamCrowd uses AI to bridge the gap between visionary creators and smart investors. 
            <span className="text-white/90 font-medium"> Launch your idea, find your funding, and make it happen.</span>
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="flex items-center gap-3 text-white/90 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="font-medium">AI-powered analysis</span>
            </div>
            <div className="flex items-center gap-3 text-white/90 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <Users className="w-5 h-5 text-purple-400" />
              <span className="font-medium">Smart investor matching</span>
            </div>
            <div className="flex items-center gap-3 text-white/90 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <Shield className="w-5 h-5 text-purple-400" />
              <span className="font-medium">Secure deal flow</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/get-started">
              <Button
                size="lg"
                className="text-white font-semibold border-0 hover:scale-105 transition-all duration-300 relative overflow-hidden px-10 py-4 text-lg rounded-full"
                style={purpleGradientButtonStyles}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started <ChevronRight className="w-5 h-5" />
                </span>
              </Button>
            </Link>
            
            <Button 
              variant="ghost" 
              className="rounded-full font-semibold text-white/90 border-2 border-purple-400/30 hover:bg-purple-400/10 hover:text-white hover:border-purple-400/50 transition-all duration-300 px-10 py-4 text-lg backdrop-blur-sm"
            >
              How It Works
            </Button>
          </motion.div>
        </motion.div>
      </div>

       {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/60 text-sm mb-3 font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-purple-400/40 rounded-full flex justify-center bg-purple-400/5 backdrop-blur-sm">
          <motion.div 
            className="w-1 h-3 bg-gradient-to-b from-purple-400 to-violet-400 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

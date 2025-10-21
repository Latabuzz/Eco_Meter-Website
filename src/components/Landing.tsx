"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EcoMeterLogo } from '@/components/EcoMeterLogo';

interface LandingProps {
  onGetStarted: () => void;
}

export function Landing({ onGetStarted }: LandingProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">


        {/* Main Title and Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-8 max-w-4xl"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            EcoMeter
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-6">
            Blockchain for a Sustainable Future
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Sistem IoT berbasis blockchain untuk memantau dan mengelola distribusi biogas secara transparan, efisien, dan berkelanjutan
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <Button
            onClick={onGetStarted}
            size="lg"
            className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 group"
          >
            Mulai Monitoring
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-full backdrop-blur-sm"
          >
            Pelajari Lebih Lanjut
          </Button>
        </motion.div>


      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-white/60 text-sm mb-2">Scroll untuk melanjutkan</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-white/60 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

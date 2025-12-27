"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Sparkles, Palette, Lightbulb, Rocket, Star, Heart, 
  Wand2, Gamepad2, Music, Camera, Mic, Brain, Code, 
  Puzzle, Zap, Cloud, Sun, Moon, Rainbow
} from 'lucide-react';

// Mobile-optimized floating decorations - smaller, subtler elements
export function MobileDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none md:hidden">
      {/* Small floating star - top right */}
      <motion.div
        className="absolute top-8 right-4"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 10, ease: "linear" }, scale: { repeat: Infinity, duration: 2.5 } }}
      >
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-70" />
      </motion.div>
      
      {/* Small sparkle - top left */}
      <motion.div
        className="absolute top-16 left-3"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Sparkles className="w-4 h-4 text-purple-400" />
      </motion.div>
      
      {/* Tiny heart - bottom area */}
      <motion.div
        className="absolute bottom-20 right-6"
        animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Heart className="w-3 h-3 text-pink-400 fill-pink-400 opacity-60" />
      </motion.div>
      
      {/* Small colored circle */}
      <motion.div
        className="absolute top-1/3 right-2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-20"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      
      {/* Another small star */}
      <motion.div
        className="absolute bottom-1/3 left-4"
        animate={{ rotate: -360, y: [0, 5, 0] }}
        transition={{ rotate: { repeat: Infinity, duration: 12, ease: "linear" }, y: { repeat: Infinity, duration: 2.5 } }}
      >
        <Star className="w-3 h-3 text-pink-300 fill-pink-300 opacity-60" />
      </motion.div>
    </div>
  );
}

// Floating AI Tool Icons Component - now with mobile support
export function FloatingAIIcons({ variant = 'default' }: { variant?: 'default' | 'purple' | 'colorful' }) {
  const aiIcons = [
    { Icon: Bot, color: 'text-purple-500', bg: 'bg-purple-100', delay: 0 },
    { Icon: Sparkles, color: 'text-yellow-500', bg: 'bg-yellow-100', delay: 0.5 },
    { Icon: Wand2, color: 'text-pink-500', bg: 'bg-pink-100', delay: 1 },
    { Icon: Brain, color: 'text-blue-500', bg: 'bg-blue-100', delay: 1.5 },
    { Icon: Lightbulb, color: 'text-amber-500', bg: 'bg-amber-100', delay: 2 },
    { Icon: Code, color: 'text-green-500', bg: 'bg-green-100', delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Mobile decorations */}
      <MobileDecorations />
      
      {/* Top Left AI Icon - Desktop */}
      <motion.div
        className="absolute top-16 left-8 hidden lg:block"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4, delay: aiIcons[0].delay }}
      >
        <div className={`w-14 h-14 ${aiIcons[0].bg} rounded-2xl shadow-lg flex items-center justify-center`}>
          <Bot className={`w-7 h-7 ${aiIcons[0].color}`} />
        </div>
      </motion.div>

      {/* Top Right AI Icon - Desktop */}
      <motion.div
        className="absolute top-24 right-12 hidden lg:block"
        animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5, delay: aiIcons[1].delay }}
      >
        <div className={`w-12 h-12 ${aiIcons[1].bg} rounded-xl shadow-lg flex items-center justify-center`}>
          <Sparkles className={`w-6 h-6 ${aiIcons[1].color}`} />
        </div>
      </motion.div>

      {/* Middle Left AI Icon */}
      <motion.div
        className="absolute top-1/2 left-4 hidden xl:block"
        animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, delay: aiIcons[2].delay }}
      >
        <div className={`w-10 h-10 ${aiIcons[2].bg} rounded-xl shadow-md flex items-center justify-center`}>
          <Wand2 className={`w-5 h-5 ${aiIcons[2].color}`} />
        </div>
      </motion.div>

      {/* Middle Right AI Icon */}
      <motion.div
        className="absolute top-1/3 right-6 hidden xl:block"
        animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 4.5, delay: aiIcons[3].delay }}
      >
        <div className={`w-11 h-11 ${aiIcons[3].bg} rounded-xl shadow-md flex items-center justify-center`}>
          <Brain className={`w-5 h-5 ${aiIcons[3].color}`} />
        </div>
      </motion.div>

      {/* Bottom Left AI Icon */}
      <motion.div
        className="absolute bottom-20 left-16 hidden lg:block"
        animate={{ y: [0, -12, 0], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, delay: aiIcons[4].delay }}
      >
        <div className={`w-12 h-12 ${aiIcons[4].bg} rounded-xl shadow-lg flex items-center justify-center`}>
          <Lightbulb className={`w-6 h-6 ${aiIcons[4].color}`} />
        </div>
      </motion.div>

      {/* Bottom Right AI Icon */}
      <motion.div
        className="absolute bottom-16 right-20 hidden lg:block"
        animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4, delay: aiIcons[5].delay }}
      >
        <div className={`w-10 h-10 ${aiIcons[5].bg} rounded-lg shadow-md flex items-center justify-center`}>
          <Code className={`w-5 h-5 ${aiIcons[5].color}`} />
        </div>
      </motion.div>
    </div>
  );
}

// Kid-friendly floating shapes - with mobile support
export function KidFriendlyShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Mobile elements */}
      <motion.div
        className="absolute top-12 right-6 md:hidden"
        animate={{ rotate: 360, scale: [1, 1.15, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 10, ease: "linear" }, scale: { repeat: Infinity, duration: 2.5 } }}
      >
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-70" />
      </motion.div>
      <motion.div
        className="absolute bottom-24 left-4 md:hidden"
        animate={{ y: [0, -6, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Heart className="w-3 h-3 text-pink-400 fill-pink-400 opacity-60" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-2 md:hidden"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <Sparkles className="w-3 h-3 text-purple-400" />
      </motion.div>
      
      {/* Desktop Floating Stars */}
      <motion.div
        className="absolute top-20 left-[10%] hidden md:block"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 8, ease: "linear" }, scale: { repeat: Infinity, duration: 2 } }}
      >
        <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-[15%] hidden lg:block"
        animate={{ rotate: -360, y: [0, 10, 0] }}
        transition={{ rotate: { repeat: Infinity, duration: 10, ease: "linear" }, y: { repeat: Infinity, duration: 3 } }}
      >
        <Star className="w-6 h-6 text-pink-400 fill-pink-400 drop-shadow-lg" />
      </motion.div>

      {/* Floating Hearts */}
      <motion.div
        className="absolute bottom-32 left-[8%] hidden lg:block"
        animate={{ y: [0, -15, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      >
        <Heart className="w-7 h-7 text-red-400 fill-red-400 drop-shadow-lg" />
      </motion.div>

      {/* Rocket */}
      <motion.div
        className="absolute top-1/4 right-[5%] hidden xl:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg flex items-center justify-center">
          <Rocket className="w-7 h-7 text-white" />
        </div>
      </motion.div>

      {/* Colorful Circles */}
      <motion.div
        className="absolute top-1/2 left-[3%] w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-20 hidden lg:block"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />

      <motion.div
        className="absolute bottom-1/4 right-[8%] w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-20 hidden lg:block"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, delay: 1 }}
      />

      {/* Puzzle Piece */}
      <motion.div
        className="absolute bottom-40 left-[12%] hidden xl:block"
        animate={{ rotate: [0, 10, -10, 0], y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl shadow-lg flex items-center justify-center">
          <Puzzle className="w-6 h-6 text-white" />
        </div>
      </motion.div>
    </div>
  );
}

// AI Tools Grid for sections
export function AIToolsShowcase() {
  const tools = [
    { Icon: Bot, label: 'ChatGPT', color: 'from-green-400 to-emerald-500' },
    { Icon: Palette, label: 'DALL-E', color: 'from-purple-500 to-pink-500' },
    { Icon: Music, label: 'Suno AI', color: 'from-blue-500 to-cyan-500' },
    { Icon: Camera, label: 'Midjourney', color: 'from-orange-500 to-yellow-500' },
    { Icon: Mic, label: 'Voice AI', color: 'from-red-500 to-pink-500' },
    { Icon: Code, label: 'Code AI', color: 'from-violet-500 to-purple-500' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {tools.map((tool, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ scale: 1.1, y: -5 }}
          className="flex flex-col items-center gap-1"
        >
          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${tool.color} shadow-lg flex items-center justify-center`}>
            <tool.Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
          <span className="text-xs font-medium text-slate-600">{tool.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

// Fun animated border for cards
export function FunBorder({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-2xl opacity-20 blur-sm"
        animate={{ 
          background: [
            'linear-gradient(to right, #8b5cf6, #ec4899, #eab308)',
            'linear-gradient(to right, #ec4899, #eab308, #8b5cf6)',
            'linear-gradient(to right, #eab308, #8b5cf6, #ec4899)',
            'linear-gradient(to right, #8b5cf6, #ec4899, #eab308)',
          ]
        }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      {children}
    </div>
  );
}

// Confetti-style floating elements - with mobile support
export function FloatingConfetti() {
  const confettiColors = [
    'bg-purple-400', 'bg-pink-400', 'bg-yellow-400', 
    'bg-green-400', 'bg-blue-400', 'bg-orange-400'
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Mobile confetti - fewer, smaller elements */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`mobile-${i}`}
          className={`absolute w-2 h-2 ${confettiColors[i % confettiColors.length]} rounded-full opacity-30 md:hidden`}
          style={{
            left: `${10 + (i * 25)}%`,
            top: `${15 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + (i % 2),
            delay: i * 0.4,
          }}
        />
      ))}
      
      {/* Desktop confetti */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-3 h-3 ${confettiColors[i % confettiColors.length]} rounded-full opacity-40 hidden lg:block`}
          style={{
            left: `${5 + (i * 8)}%`,
            top: `${10 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, i % 2 === 0 ? 10 : -10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + (i % 3),
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}

// Doodle-style decorations - with mobile support
export function DoodleDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Mobile doodles - smaller, simpler */}
      <motion.div
        className="absolute top-10 right-4 md:hidden"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <Zap className="w-4 h-4 text-yellow-400" />
      </motion.div>
      <motion.div
        className="absolute bottom-16 left-3 md:hidden"
        animate={{ x: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <Cloud className="w-6 h-6 text-purple-200 opacity-60" />
      </motion.div>
      
      {/* Desktop Zigzag line */}
      <motion.svg
        className="absolute top-20 left-[5%] w-20 h-10 hidden lg:block"
        viewBox="0 0 80 40"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
      >
        <motion.path
          d="M0 20 L20 5 L40 35 L60 5 L80 20"
          stroke="#a78bfa"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* Swirl */}
      <motion.svg
        className="absolute bottom-32 right-[8%] w-16 h-16 hidden xl:block"
        viewBox="0 0 64 64"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <motion.circle
          cx="32"
          cy="32"
          r="20"
          stroke="#f472b6"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10 5"
        />
      </motion.svg>

      {/* Sparkle burst */}
      <motion.div
        className="absolute top-1/3 left-[8%] hidden xl:block"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Zap className="w-8 h-8 text-yellow-400" />
      </motion.div>

      {/* Cloud */}
      <motion.div
        className="absolute top-16 right-[20%] hidden lg:block"
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <Cloud className="w-12 h-12 text-purple-200" />
      </motion.div>

      {/* Sun */}
      <motion.div
        className="absolute bottom-24 left-[20%] hidden xl:block"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <Sun className="w-10 h-10 text-yellow-300" />
      </motion.div>
    </div>
  );
}

// Gaming/Creative Icons Strip
export function CreativeIconsStrip() {
  const icons = [
    { Icon: Gamepad2, color: 'text-purple-500' },
    { Icon: Palette, color: 'text-pink-500' },
    { Icon: Music, color: 'text-blue-500' },
    { Icon: Camera, color: 'text-green-500' },
    { Icon: Mic, color: 'text-orange-500' },
    { Icon: Sparkles, color: 'text-yellow-500' },
  ];

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6 py-4">
      {icons.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl shadow-md flex items-center justify-center"
        >
          <item.Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color}`} />
        </motion.div>
      ))}
    </div>
  );
}

// Rainbow decoration
export function RainbowDecoration() {
  return (
    <motion.div
      className="absolute top-10 right-[10%] hidden lg:block"
      animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
      transition={{ repeat: Infinity, duration: 4 }}
    >
      <Rainbow className="w-16 h-16 text-purple-400 opacity-60" />
    </motion.div>
  );
}

// Export all as a combined component for easy use
export default function DecorativeElements({ 
  showAIIcons = true, 
  showShapes = true,
  showConfetti = false,
  showDoodles = false 
}: { 
  showAIIcons?: boolean; 
  showShapes?: boolean;
  showConfetti?: boolean;
  showDoodles?: boolean;
}) {
  return (
    <>
      {showAIIcons && <FloatingAIIcons />}
      {showShapes && <KidFriendlyShapes />}
      {showConfetti && <FloatingConfetti />}
      {showDoodles && <DoodleDecorations />}
    </>
  );
}

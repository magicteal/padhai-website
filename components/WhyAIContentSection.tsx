"use client";

import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, Zap, Palette, MessageCircle, Dumbbell, Smartphone, GraduationCap, Wrench, Microscope, BookOpen, Pencil, Megaphone, Mic, Settings, Laptop, Bot, Rocket, Brain, Shield, Users, Sparkles } from "lucide-react";

export default function WhyAIContentSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const aiSkills = [
    { icon: HelpCircle, text: 'Ask better questions' },
    { icon: Zap, text: 'Understand concepts faster' },
    { icon: Palette, text: 'Explore ideas creatively' },
    { icon: MessageCircle, text: 'Improve communication' },
    { icon: Dumbbell, text: 'Build confidence in learning' }
  ];

  const transformations = [
    { before: 'Screen time', beforeIcon: Smartphone, after: 'Learning time', afterIcon: GraduationCap },
    { before: 'Curiosity', beforeIcon: HelpCircle, after: 'Creation', afterIcon: Palette },
    { before: 'Scrolling', beforeIcon: Smartphone, after: 'Skill-building', afterIcon: Wrench }
  ];

  const safetyFeatures = [
    'Only child-safe AI tools',
    'Guided prompts (no open exposure)',
    'No social media usage',
    'Mentor-led learning',
    'Parent visibility & updates'
  ];

  const interests = [
    { icon: Microscope, text: 'Science & innovation', gradient: 'from-purple-500 to-violet-500' },
    { icon: Palette, text: 'Art & creativity', gradient: 'from-purple-600 to-purple-400' },
    { icon: BookOpen, text: 'Storytelling & writing', gradient: 'from-violet-500 to-purple-500' },
    { icon: Pencil, text: 'Design & animation', gradient: 'from-purple-400 to-violet-600' },
    { icon: Megaphone, text: 'Marketing & content', gradient: 'from-violet-600 to-purple-500' },
    { icon: Mic, text: 'Presentations & communication', gradient: 'from-purple-500 to-purple-600' }
  ];

  const earlyBenefits = [
    'Ask smarter questions',
    'Feel confident using technology',
    'Are less overwhelmed later',
    'Understand how the world works',
    'Become creators, not just consumers'
  ];

  const bangaloreContext = [
    { icon: Settings, text: 'Automation' },
    { icon: Laptop, text: 'Digital tools' },
    { icon: Bot, text: 'AI-assisted jobs' },
    { icon: Rocket, text: 'Creative tech careers' }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-purple-50">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-indigo-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <motion.div 
            className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-100 flex items-center justify-center"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Bot className="w-8 h-8 text-purple-600" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text">
            Why Should Children Learn AI Today?
          </h2>
          <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
            Because the world your child will grow into is already changing.
          </p>
        </motion.div>

        {/* Intro Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-kid max-w-4xl mx-auto p-6 sm:p-8"
        >
          <div className="space-y-4 text-center">
            <p className="text-sm sm:text-base text-slate-700">
              AI is no longer a "future technology". It is already part of schools, jobs, creativity, and
              daily life, especially in cities like Bangalore.
            </p>
            <p className="text-sm sm:text-base text-slate-700">
              Your child doesn&apos;t need to become a programmer. They need to learn how to think, ask,
              create, and use technology wisely.
            </p>
            <p className="text-base sm:text-lg text-slate-800 font-bold">
              That&apos;s exactly what AI helps with, when taught correctly.
            </p>
          </div>
        </motion.div>

        {/* AI as Thinking Tool */}
        <div className="space-y-8">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center gap-3"
          >
            <Brain className="w-8 h-8 text-purple-600" />
            <span className="gradient-text">AI Is Not About Coding. It&apos;s About Thinking Smarter.</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-kid p-6"
            >
              <p className="text-sm sm:text-base text-slate-700 mb-4">
                At PadhAi Club, AI is used as a <span className="font-bold text-slate-900">learning assistant</span>, not a shortcut.
              </p>
              <p className="text-sm text-slate-600 italic">
                AI becomes a support system, not a replacement for effort.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="card-kid p-6"
            >
              <p className="text-sm sm:text-base font-bold text-slate-900 mb-4">Children use AI to:</p>
              <ul className="space-y-3">
                {aiSkills.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-sm sm:text-base text-slate-700 mt-1">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Screen Time Transformation */}
        <div className="space-y-8">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center gap-3"
          >
            <Smartphone className="w-8 h-8 text-purple-600" />
            <span className="text-slate-900">From "Bad Screen Time" to "Good Skill Time"</span>
          </motion.h3>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-kid max-w-3xl mx-auto p-6 sm:p-8 text-center"
          >
            <p className="text-sm sm:text-base text-slate-700 mb-2">
              We know the biggest concern parents have:
            </p>
            <p className="text-base sm:text-lg font-bold text-slate-900 italic mb-4">
              "My child is always on the phone."
            </p>
            <p className="text-sm sm:text-base text-slate-700">
              Instead of fighting screens, we redirect them.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {transformations.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex flex-col items-center gap-4 card-kid p-6"
              >
                <div className="text-center p-4 bg-slate-100 rounded-xl w-full flex items-center justify-center gap-2">
                  <item.beforeIcon className="w-5 h-5 text-slate-500" />
                  <p className="text-sm sm:text-base font-medium text-slate-600">{item.before}</p>
                </div>
                <div className="text-2xl font-bold text-purple-500">↓</div>
                <motion.div 
                  className="text-center p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl w-full flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <item.afterIcon className="w-5 h-5 text-white" />
                  <p className="text-sm sm:text-base font-bold text-white">{item.after}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center text-sm sm:text-base text-slate-700 font-medium max-w-2xl mx-auto">
            Same device. <span className="font-bold text-slate-900">Completely different outcome.</span>
          </p>
        </div>

        {/* Safe AI */}
        <div className="space-y-8">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center gap-3"
          >
            <Shield className="w-8 h-8 text-purple-600" />
            <span className="gradient-text">Safe AI Matters More Than AI Itself</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-kid p-6"
            >
              <p className="text-sm sm:text-base text-slate-700">
                Unsupervised AI can confuse children. That&apos;s why <span className="font-bold text-slate-900">how AI is taught</span> matters more than what is taught.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="card-kid p-6"
            >
              <p className="text-sm sm:text-base font-bold text-slate-900 mb-4">At PadhAi Club:</p>
              <ul className="space-y-3">
                {safetyFeatures.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <span className="text-green-600 font-bold flex-shrink-0">✔</span>
                    <span className="text-sm sm:text-base text-slate-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-600 font-medium">
                Your child learns responsibility + discipline, not dependency.
              </p>
            </motion.div>
          </div>
        </div>

        {/* AI Helps Every Child */}
        <div className="space-y-8">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center gap-3"
          >
            <Rocket className="w-8 h-8 text-purple-600" />
            <span className="text-slate-900">AI Helps Every Type of Child</span>
          </motion.h3>

          <p className="text-center text-sm sm:text-base text-slate-700 max-w-2xl mx-auto">
            AI is useful whether your child is into:
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {interests.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 text-center space-y-3 border-2 border-purple-50"
              >
                <div className={`w-14 h-14 mx-auto bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm sm:text-base font-bold text-slate-900">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center text-sm sm:text-base text-slate-700 font-medium max-w-2xl mx-auto">
            AI adapts to the child, <span className="font-bold text-slate-900">not the other way around.</span>
          </p>
        </div>

        {/* Early Exposure */}
        <div className="space-y-8">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center gap-3"
          >
            <Sparkles className="w-8 h-8 text-purple-600" />
            <span className="gradient-text">Early Exposure Builds Confidence, Not Pressure</span>
          </motion.h3>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="card-kid max-w-3xl mx-auto p-6 sm:p-8"
          >
            <p className="text-sm sm:text-base font-bold text-slate-900 mb-4 text-center">
              Children who learn AI early:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {earlyBenefits.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-3 bg-purple-50 rounded-xl p-3"
                >
                  <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span className="text-sm sm:text-base text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-sm sm:text-base text-slate-600 font-medium text-center">
              We focus on <span className="font-bold text-slate-900">curiosity first</span>, not competition.
            </p>
          </motion.div>
        </div>

        {/* Bangalore Parents */}
        <div className="space-y-8">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center gap-3"
          >
            <Users className="w-8 h-8 text-purple-600" />
            <span className="text-slate-900">For Bangalore Parents, This Matters Even More</span>
          </motion.h3>

          <p className="text-center text-sm sm:text-base text-slate-700 max-w-2xl mx-auto">
            Bangalore is a tech-driven city. Your child will grow up around:
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {bangaloreContext.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 text-center space-y-3 border-2 border-purple-50"
              >
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-purple-600" />
                </div>
                <p className="text-sm sm:text-base font-bold text-slate-900">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-kid max-w-3xl mx-auto p-6"
          >
            <p className="text-sm sm:text-base font-bold text-slate-900 mb-4 text-center">
              Understanding AI early helps them:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['Feel comfortable, not scared', 'Stay ahead without pressure', 'Use technology responsibly'].map((item, idx) => (
                <div key={idx} className="text-center bg-purple-50 rounded-xl p-3">
                  <span className="text-sm sm:text-base text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 sm:p-10 text-white text-center space-y-4 shadow-xl max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute -top-10 right-6 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 left-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
          
          <motion.div
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/20 px-4 py-2 text-xs sm:text-sm font-bold relative z-10"
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
          >
            <MessageCircle className="w-4 h-4" />
            <span>In Simple Words</span>
          </motion.div>
          
          <p className="relative z-10 text-xl sm:text-2xl md:text-3xl font-bold max-w-3xl mx-auto">
            AI is not replacing learning. AI is supporting better learning.
          </p>
          <p className="relative z-10 text-base sm:text-lg max-w-3xl mx-auto text-white/90">
            When taught safely, slowly, and with guidance, AI becomes a <span className="font-bold">superpower</span> for your child.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Users, Palette, Bell, Smartphone, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Weekly overview',
    description: 'See your entire week at a glance. Add classes once, and they appear every week automatically.',
  },
  {
    icon: Users,
    title: 'Share with friends',
    description: 'Compare schedules with classmates to find common free time for study groups or lunch.',
  },
  {
    icon: Palette,
    title: 'Customize your view',
    description: 'Assign colors to each class to quickly identify your schedule at a glance.',
  },
  {
    icon: Bell,
    title: 'Smart reminders',
    description: 'Get notified before class starts so you never rush across campus again.',
  },
  {
    icon: Smartphone,
    title: 'Works everywhere',
    description: 'Check your schedule on any device. Your week travels with you.',
  },
  {
    icon: Sparkles,
    title: 'Built for students',
    description: 'Designed with university life in mind. Simple, fast, and distraction-free.',
  },
];

const scheduleData = {
  days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  classes: [
    { day: 0, name: 'Math 201', time: '9:00', color: 'var(--class-blue)' },
    { day: 0, name: 'CS 101', time: '14:00', color: 'var(--class-purple)', offset: 'mt-4' },
    { day: 1, name: 'Physics', time: '11:00', color: 'var(--class-green)', offset: 'mt-6' },
    { day: 2, name: 'Math 201', time: '9:00', color: 'var(--class-blue)' },
    { day: 2, name: 'English', time: '13:00', color: 'var(--class-orange)', offset: 'mt-4' },
    { day: 3, name: 'Lab', time: '14:00', color: 'var(--class-pink)', offset: 'mt-10' },
    { day: 4, name: 'CS 101', time: '10:00', color: 'var(--class-purple)', offset: 'mt-4' },
    { day: 4, name: 'Study', time: '15:00', color: 'var(--class-yellow)', offset: 'mt-4' },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold text-xl text-stone-800">
            Schedule
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className="hidden sm:block text-sm text-stone-600 hover:text-stone-900 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/login"
              className="bg-stone-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl lg:text-5xl font-semibold text-stone-800 leading-[1.1] tracking-tight">
                Your classes, organized and shared with friends
              </h1>
              <p className="text-lg text-stone-500 leading-relaxed max-w-md">
                A simple way to plan your university week. See when your friends are free, find time for study sessions, and stay on top of your schedule.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 bg-emerald-300 text-stone-800 px-7 py-3.5 rounded-full text-[15px] font-semibold hover:bg-emerald-400 transition-colors"
                >
                  Start planning free
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 text-stone-500 px-7 py-3.5 rounded-full text-[15px] font-medium border border-stone-200 hover:border-stone-300 hover:text-stone-700 transition-colors"
                >
                  See how it works
                </Link>
              </div>
            </motion.div>

            {/* Right: Schedule Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 w-full max-w-md ml-auto">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-stone-800">This Week</h3>
                  <span className="text-sm text-stone-400">Jan 13 - 17</span>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-5 gap-3 mb-4">
                  {scheduleData.days.map((day, i) => (
                    <div
                      key={day}
                      className={`text-center text-xs font-medium py-1.5 rounded-lg ${
                        i === 0 ? 'bg-stone-100 text-stone-700' : 'text-stone-400'
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Schedule grid */}
                <div className="grid grid-cols-5 gap-3 min-h-[220px]">
                  {[0, 1, 2, 3, 4].map((dayIndex) => (
                    <div key={dayIndex} className="space-y-2">
                      {scheduleData.classes
                        .filter((c) => c.day === dayIndex)
                        .map((classItem, idx) => (
                          <div
                            key={idx}
                            className={`rounded-xl p-3 ${classItem.offset || ''}`}
                            style={{ backgroundColor: classItem.color }}
                          >
                            <p className="text-xs font-medium text-stone-700">{classItem.name}</p>
                            <p className="text-xs text-stone-500">{classItem.time}</p>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-stone-800 tracking-tight">
              Everything you need to stay organized
            </h2>
            <p className="mt-4 text-lg text-stone-500 max-w-2xl mx-auto">
              Simple tools designed for the way students actually plan their week
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-stone-200 p-8 hover:border-stone-300 hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg text-stone-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 lg:py-32 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-stone-800 tracking-tight">
              Get started in minutes
            </h2>
            <p className="mt-4 text-lg text-stone-500">
              Three simple steps to a more organized semester
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Add your classes',
                description: 'Enter your class schedule once. Set the days, times, and locations.',
              },
              {
                step: '02',
                title: 'Customize your view',
                description: 'Pick colors for each class and organize how your week looks.',
              },
              {
                step: '03',
                title: 'Share with friends',
                description: 'Connect with classmates and find common free time instantly.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-stone-900 text-white text-sm font-semibold mb-6">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg text-stone-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-stone-900 rounded-3xl p-12 lg:p-16 text-center"
          >
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
              Ready to organize your semester?
            </h2>
            <p className="text-stone-400 mb-8 max-w-lg mx-auto">
              Join students who are already planning smarter. Free to use, no credit card required.
            </p>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 bg-emerald-300 text-stone-900 px-8 py-4 rounded-full text-[15px] font-semibold hover:bg-emerald-400 transition-colors"
            >
              Get started free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-semibold text-stone-800">Schedule</span>
            <p className="text-sm text-stone-400">
              Built for students, by students
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

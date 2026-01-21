'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Users, Bell } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Visual weekly schedule',
    description: 'See your entire week laid out clearly. Add classes once and they repeat automatically.',
  },
  {
    icon: Users,
    title: 'Share with classmates',
    description: 'Compare schedules to find common free time for study sessions or grabbing lunch.',
  },
  {
    icon: Bell,
    title: 'Never miss a class',
    description: 'Get reminders before each class so you always show up on time.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg text-stone-800">
            Schedule
          </Link>
          <div className="flex items-center gap-4">
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

      {/* Hero Section - Centered */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-stone-800 leading-[1.1] tracking-tight">
              Plan your week,
              <br />
              <span className="text-stone-400">together.</span>
            </h1>
            <p className="mt-6 text-lg text-stone-500 leading-relaxed max-w-lg mx-auto">
              The simple schedule planner for university students. See your classes, share with friends, stay organized.
            </p>
            <div className="mt-8">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-stone-800 transition-colors"
              >
                Get started free
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* App Preview - Full Width */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl border border-stone-200 shadow-lg overflow-hidden"
          >
            {/* Browser chrome */}
            <div className="bg-stone-100 border-b border-stone-200 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-stone-300" />
                <div className="w-3 h-3 rounded-full bg-stone-300" />
                <div className="w-3 h-3 rounded-full bg-stone-300" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-md px-3 py-1.5 text-xs text-stone-400 max-w-xs mx-auto text-center">
                  schedule.app/dashboard
                </div>
              </div>
            </div>

            {/* App content */}
            <div className="p-6 lg:p-8">
              {/* App header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl font-semibold text-stone-800">My Schedule</h2>
                  <p className="text-sm text-stone-400 mt-1">Spring 2026 Semester</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-stone-500">Week of Jan 13</span>
                  <div className="flex gap-1">
                    <button className="p-2 rounded-lg hover:bg-stone-100 text-stone-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </button>
                    <button className="p-2 rounded-lg hover:bg-stone-100 text-stone-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Schedule grid */}
              <div className="border border-stone-200 rounded-xl overflow-hidden">
                {/* Time column + Day headers */}
                <div className="grid grid-cols-[60px_repeat(5,1fr)] bg-stone-50 border-b border-stone-200">
                  <div className="p-3" />
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, i) => (
                    <div
                      key={day}
                      className={`p-3 text-center border-l border-stone-200 ${i === 0 ? 'bg-emerald-50' : ''}`}
                    >
                      <p className={`text-sm font-medium ${i === 0 ? 'text-emerald-700' : 'text-stone-600'}`}>
                        {day}
                      </p>
                      <p className={`text-xs mt-0.5 ${i === 0 ? 'text-emerald-600' : 'text-stone-400'}`}>
                        {13 + i}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Time slots */}
                <div className="grid grid-cols-[60px_repeat(5,1fr)]">
                  {/* Time labels */}
                  <div className="border-r border-stone-200">
                    {['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM'].map((time) => (
                      <div key={time} className="h-16 px-2 flex items-start pt-1">
                        <span className="text-xs text-stone-400">{time}</span>
                      </div>
                    ))}
                  </div>

                  {/* Monday */}
                  <div className="border-r border-stone-200 relative bg-emerald-50/30">
                    <div className="absolute top-0 left-1 right-1 h-[64px] bg-blue-100 rounded-lg p-2 border border-blue-200">
                      <p className="text-xs font-medium text-blue-800">Math 201</p>
                      <p className="text-[10px] text-blue-600">Room 302</p>
                    </div>
                    <div className="absolute top-[160px] left-1 right-1 h-[96px] bg-purple-100 rounded-lg p-2 border border-purple-200">
                      <p className="text-xs font-medium text-purple-800">CS 101</p>
                      <p className="text-[10px] text-purple-600">Lab B</p>
                    </div>
                  </div>

                  {/* Tuesday */}
                  <div className="border-r border-stone-200 relative">
                    <div className="absolute top-[64px] left-1 right-1 h-[64px] bg-green-100 rounded-lg p-2 border border-green-200">
                      <p className="text-xs font-medium text-green-800">Physics</p>
                      <p className="text-[10px] text-green-600">Hall A</p>
                    </div>
                  </div>

                  {/* Wednesday */}
                  <div className="border-r border-stone-200 relative">
                    <div className="absolute top-0 left-1 right-1 h-[64px] bg-blue-100 rounded-lg p-2 border border-blue-200">
                      <p className="text-xs font-medium text-blue-800">Math 201</p>
                      <p className="text-[10px] text-blue-600">Room 302</p>
                    </div>
                    <div className="absolute top-[192px] left-1 right-1 h-[64px] bg-orange-100 rounded-lg p-2 border border-orange-200">
                      <p className="text-xs font-medium text-orange-800">English</p>
                      <p className="text-[10px] text-orange-600">Room 105</p>
                    </div>
                  </div>

                  {/* Thursday */}
                  <div className="border-r border-stone-200 relative">
                    <div className="absolute top-[128px] left-1 right-1 h-[96px] bg-pink-100 rounded-lg p-2 border border-pink-200">
                      <p className="text-xs font-medium text-pink-800">Lab</p>
                      <p className="text-[10px] text-pink-600">Science Bldg</p>
                    </div>
                  </div>

                  {/* Friday */}
                  <div className="relative">
                    <div className="absolute top-[32px] left-1 right-1 h-[64px] bg-purple-100 rounded-lg p-2 border border-purple-200">
                      <p className="text-xs font-medium text-purple-800">CS 101</p>
                      <p className="text-[10px] text-purple-600">Lab B</p>
                    </div>
                    <div className="absolute top-[256px] left-1 right-1 h-[64px] bg-yellow-100 rounded-lg p-2 border border-yellow-200">
                      <p className="text-xs font-medium text-yellow-800">Study Group</p>
                      <p className="text-[10px] text-yellow-600">Library</p>
                    </div>
                  </div>
                </div>

                {/* Grid lines */}
                <div className="absolute inset-0 pointer-events-none">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="border-b border-stone-100" style={{ marginTop: `${64 * i}px` }} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features - Simple 3 column */}
      <section className="py-20 lg:py-28 border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-600 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg text-stone-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-stone-500 text-[15px] leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-stone-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
              Start planning your semester
            </h2>
            <p className="text-stone-400 mb-8 text-lg">
              Free to use. No credit card required.
            </p>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 bg-white text-stone-900 px-8 py-4 rounded-full text-base font-medium hover:bg-stone-100 transition-colors"
            >
              Create your schedule
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-medium text-stone-700">Schedule</span>
            <p className="text-sm text-stone-400">
              Built for students
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

'use client';

import { useState } from 'react';
import { Navigation } from '@/components';

// Placeholder schedule data
const sampleSchedule = [
  { id: '1', name: 'Advanced Mathematics', time: '09:00 - 10:30', day: 'Mon', room: 'A-101', color: 'from-blue-500 to-blue-600' },
  { id: '2', name: 'Computer Science', time: '11:00 - 12:30', day: 'Mon', room: 'B-205', color: 'from-teal-500 to-teal-600' },
  { id: '3', name: 'Physics Lab', time: '14:00 - 16:00', day: 'Tue', room: 'Lab-3', color: 'from-purple-500 to-purple-600' },
  { id: '4', name: 'English Literature', time: '10:00 - 11:30', day: 'Wed', room: 'C-302', color: 'from-orange-500 to-orange-600' },
  { id: '5', name: 'Advanced Mathematics', time: '09:00 - 10:30', day: 'Wed', room: 'A-101', color: 'from-blue-500 to-blue-600' },
  { id: '6', name: 'Computer Science', time: '14:00 - 15:30', day: 'Thu', room: 'B-205', color: 'from-teal-500 to-teal-600' },
  { id: '7', name: 'Physics Lab', time: '10:00 - 12:00', day: 'Fri', room: 'Lab-3', color: 'from-purple-500 to-purple-600' },
];

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const fullDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function DashboardPage() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  // TODO: Check authentication with Supabase
  // TODO: Fetch user's schedule from database

  const todayClasses = sampleSchedule.filter(item => item.day === 'Mon');

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navigation />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between animate-fade-in">
            <div>
              <h1 className="text-3xl font-bold text-[var(--foreground)] md:text-4xl">
                My Schedule
              </h1>
              <p className="mt-2 text-[var(--foreground-secondary)]">
                Welcome back! Here&apos;s your week at a glance.
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] shadow-lg shadow-[var(--foreground)]/10 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Add Class
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 animate-slide-up">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full -mr-8 -mt-8" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[var(--foreground-secondary)]">Classes Today</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10">
                    <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </span>
                </div>
                <p className="mt-3 text-3xl font-bold text-[var(--foreground)]">{todayClasses.length}</p>
                <p className="mt-1 text-xs text-[var(--foreground-tertiary)]">2 completed, 0 upcoming</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full -mr-8 -mt-8" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[var(--foreground-secondary)]">This Week</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/10">
                    <svg className="h-4 w-4 text-teal-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </span>
                </div>
                <p className="mt-3 text-3xl font-bold text-[var(--foreground)]">{sampleSchedule.length}</p>
                <p className="mt-1 text-xs text-[var(--foreground-tertiary)]">classes scheduled</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full -mr-8 -mt-8" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[var(--foreground-secondary)]">Total Hours</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10">
                    <svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </div>
                <p className="mt-3 text-3xl font-bold text-[var(--foreground)]">12.5</p>
                <p className="mt-1 text-xs text-[var(--foreground-tertiary)]">hours this week</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full -mr-8 -mt-8" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[var(--foreground-secondary)]">Friends</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10">
                    <svg className="h-4 w-4 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </span>
                </div>
                <p className="mt-3 text-3xl font-bold text-[var(--foreground)]">3</p>
                <p className="mt-1 text-xs text-[var(--foreground-tertiary)]">sharing schedules</p>
              </div>
            </div>
          </div>

          {/* Week View */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 animate-slide-up animation-delay-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[var(--foreground)]">Weekly Schedule</h2>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg text-[var(--foreground-secondary)] hover:bg-[var(--background-secondary)] transition-colors">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <span className="text-sm font-medium text-[var(--foreground)]">This Week</span>
                <button className="p-2 rounded-lg text-[var(--foreground-secondary)] hover:bg-[var(--background-secondary)] transition-colors">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto -mx-6 px-6">
              <div className="min-w-[700px]">
                {/* Day Headers */}
                <div className="grid grid-cols-5 gap-3 mb-4">
                  {days.map((day, i) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(selectedDay === day ? null : day)}
                      className={`text-center py-3 rounded-xl transition-all ${
                        selectedDay === day
                          ? 'bg-[var(--foreground)] text-[var(--background)]'
                          : day === 'Mon'
                          ? 'bg-[var(--primary)]/10 text-[var(--primary)]'
                          : 'bg-[var(--background-secondary)] text-[var(--foreground-secondary)] hover:bg-[var(--background-tertiary)]'
                      }`}
                    >
                      <div className="text-xs font-medium opacity-70">{day}</div>
                      <div className="text-lg font-bold mt-1">{13 + i}</div>
                    </button>
                  ))}
                </div>

                {/* Schedule Grid */}
                <div className="grid grid-cols-5 gap-3">
                  {days.map((day) => (
                    <div key={day} className="space-y-3 min-h-[200px]">
                      {sampleSchedule
                        .filter((item) => item.day === day)
                        .map((item) => (
                          <div
                            key={item.id}
                            className={`rounded-xl bg-gradient-to-br ${item.color} p-4 text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl cursor-pointer`}
                          >
                            <p className="text-sm font-semibold leading-tight">{item.name}</p>
                            <div className="mt-2 flex items-center gap-1 text-xs text-white/80">
                              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {item.time}
                            </div>
                            <div className="mt-1 flex items-center gap-1 text-xs text-white/70">
                              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                              </svg>
                              {item.room}
                            </div>
                          </div>
                        ))}
                      {sampleSchedule.filter((item) => item.day === day).length === 0 && (
                        <div className="flex items-center justify-center h-full min-h-[120px] rounded-xl border-2 border-dashed border-[var(--border)] bg-[var(--background-secondary)]/50">
                          <div className="text-center">
                            <svg className="h-6 w-6 mx-auto text-[var(--foreground-tertiary)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="mt-2 text-xs text-[var(--foreground-tertiary)]">Free day</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Today's Classes */}
          <div className="grid gap-6 lg:grid-cols-3 animate-slide-up animation-delay-200">
            <div className="lg:col-span-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4">Today&apos;s Classes</h2>
              <div className="space-y-3">
                {todayClasses.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[var(--background-secondary)]/50 hover:bg-[var(--background-secondary)] transition-colors"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white font-semibold`}>
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-[var(--foreground)] truncate">{item.name}</p>
                      <div className="flex items-center gap-3 mt-1 text-sm text-[var(--foreground-secondary)]">
                        <span className="flex items-center gap-1">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {item.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          {item.room}
                        </span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      index === 0 ? 'bg-green-500/10 text-green-600' : 'bg-[var(--background-tertiary)] text-[var(--foreground-secondary)]'
                    }`}>
                      {index === 0 ? 'Completed' : 'Upcoming'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-[var(--background-secondary)]/50 hover:bg-[var(--background-secondary)] transition-colors text-left">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary)]/10">
                    <svg className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">Add New Class</p>
                    <p className="text-xs text-[var(--foreground-secondary)]">Schedule a new class</p>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-[var(--background-secondary)]/50 hover:bg-[var(--background-secondary)] transition-colors text-left">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                    <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">Share Schedule</p>
                    <p className="text-xs text-[var(--foreground-secondary)]">Invite friends to view</p>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-[var(--background-secondary)]/50 hover:bg-[var(--background-secondary)] transition-colors text-left">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10">
                    <svg className="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">Export Schedule</p>
                    <p className="text-xs text-[var(--foreground-secondary)]">Download as PDF or ICS</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Demo Notice */}
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4 animate-fade-in animation-delay-300">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10">
                <svg className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-[var(--foreground)]">Demo Mode</p>
                <p className="mt-1 text-sm text-[var(--foreground-secondary)]">
                  You&apos;re viewing sample data. Connect Supabase to save and sync your actual schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

'use client';

import { Layout, Button, Card } from '@/components';

// Placeholder schedule data
const sampleSchedule = [
  { id: '1', name: 'Advanced Mathematics', time: '09:00 - 10:30', day: 'Mon', room: 'A-101', color: '#3b82f6' },
  { id: '2', name: 'Computer Science', time: '11:00 - 12:30', day: 'Mon', room: 'B-205', color: '#14b8a6' },
  { id: '3', name: 'Physics Lab', time: '14:00 - 16:00', day: 'Tue', room: 'Lab-3', color: '#a855f7' },
  { id: '4', name: 'English Literature', time: '10:00 - 11:30', day: 'Wed', room: 'C-302', color: '#f97316' },
  { id: '5', name: 'Advanced Mathematics', time: '09:00 - 10:30', day: 'Wed', room: 'A-101', color: '#3b82f6' },
];

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export default function DashboardPage() {
  // TODO: Check authentication with Supabase
  // TODO: Fetch user's schedule from database

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)] md:text-3xl">
              My Schedule
            </h1>
            <p className="mt-1 text-[var(--foreground-secondary)]">
              View and manage your weekly class schedule
            </p>
          </div>
          <Button>Add Class</Button>
        </div>

        {/* Week View */}
        <Card padding="sm">
          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              {/* Day Headers */}
              <div className="grid grid-cols-5 gap-2 border-b border-[var(--border)] pb-4">
                {days.map((day) => (
                  <div
                    key={day}
                    className="text-center text-sm font-medium text-[var(--foreground-secondary)]"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Schedule Grid */}
              <div className="mt-4 grid grid-cols-5 gap-2">
                {days.map((day) => (
                  <div key={day} className="space-y-2">
                    {sampleSchedule
                      .filter((item) => item.day === day)
                      .map((item) => (
                        <div
                          key={item.id}
                          className="rounded-lg p-3 text-white transition-transform hover:scale-[1.02]"
                          style={{ backgroundColor: item.color }}
                        >
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="mt-1 text-xs opacity-90">{item.time}</p>
                          <p className="text-xs opacity-75">{item.room}</p>
                        </div>
                      ))}
                    {sampleSchedule.filter((item) => item.day === day).length === 0 && (
                      <div className="rounded-lg border-2 border-dashed border-[var(--border)] p-4 text-center">
                        <p className="text-xs text-[var(--foreground-tertiary)]">No classes</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <p className="text-sm text-[var(--foreground-secondary)]">Classes this week</p>
            <p className="mt-2 text-3xl font-bold text-[var(--foreground)]">5</p>
          </Card>
          <Card>
            <p className="text-sm text-[var(--foreground-secondary)]">Total hours</p>
            <p className="mt-2 text-3xl font-bold text-[var(--foreground)]">9.5</p>
          </Card>
          <Card>
            <p className="text-sm text-[var(--foreground-secondary)]">Friends sharing</p>
            <p className="mt-2 text-3xl font-bold text-[var(--foreground)]">3</p>
          </Card>
        </div>

        {/* Placeholder Notice */}
        <Card className="border-[var(--color-warning)] bg-[var(--color-warning)]/10">
          <div className="flex items-start gap-3">
            <svg className="h-5 w-5 flex-shrink-0 text-[var(--color-warning)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <div>
              <p className="font-medium text-[var(--foreground)]">Placeholder Data</p>
              <p className="mt-1 text-sm text-[var(--foreground-secondary)]">
                This is sample data. Connect Supabase to save and load your actual schedule.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}

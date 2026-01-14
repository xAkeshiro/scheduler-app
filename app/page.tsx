import Link from 'next/link';
import { Navigation } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-[var(--color-primary-400)]/20 to-[var(--color-accent-purple)]/20 blur-3xl" />
          <div className="absolute top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-[var(--color-accent-teal)]/15 to-[var(--color-primary-300)]/15 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-[var(--color-accent-pink)]/10 to-[var(--color-primary-400)]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-32 md:pt-32 md:pb-40">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm px-4 py-1.5 text-sm text-[var(--foreground-secondary)] mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-success)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-success)]"></span>
              </span>
              Built for university students
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl lg:text-7xl animate-slide-up">
              Plan your
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-purple)] bg-clip-text text-transparent"> schedule</span>
              </span>
              <br />
              <span className="text-[var(--foreground-secondary)]">share with friends</span>
            </h1>

            {/* Subheading */}
            <p className="mt-8 text-lg text-[var(--foreground-secondary)] md:text-xl max-w-2xl leading-relaxed animate-slide-up animation-delay-100">
              The simplest way to manage your university classes.
              Coordinate with friends, discover common free times, and stay perfectly organized.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-slide-up animation-delay-200">
              <Link
                href="/login"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--foreground)] px-8 py-4 text-base font-semibold text-[var(--background)] shadow-lg shadow-[var(--foreground)]/20 transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
              >
                Get Started Free
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm px-8 py-4 text-base font-semibold text-[var(--foreground)] transition-all hover:bg-[var(--background-secondary)] hover:border-[var(--border-secondary)]"
              >
                View Demo
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-14 flex items-center gap-6 animate-fade-in animation-delay-300">
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-[var(--background)] bg-gradient-to-br from-[var(--color-primary-400)] to-[var(--color-accent-purple)]"
                    style={{
                      opacity: 1 - (i * 0.15),
                      background: [
                        'linear-gradient(135deg, #60a5fa, #a855f7)',
                        'linear-gradient(135deg, #14b8a6, #3b82f6)',
                        'linear-gradient(135deg, #f97316, #ec4899)',
                        'linear-gradient(135deg, #22c55e, #14b8a6)',
                      ][i]
                    }}
                  />
                ))}
              </div>
              <p className="text-sm text-[var(--foreground-secondary)]">
                <span className="font-semibold text-[var(--foreground)]">500+</span> students already using Schedule App
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 md:py-32 bg-[var(--background-secondary)]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl font-bold text-[var(--foreground)] md:text-4xl">
              Everything you need to stay organized
            </h2>
            <p className="mt-4 text-lg text-[var(--foreground-secondary)]">
              Simple tools designed specifically for university life
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition-all hover:border-[var(--border-secondary)] hover:shadow-lg">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-600)] text-white shadow-lg shadow-[var(--color-primary-500)]/25">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                Weekly Schedule View
              </h3>
              <p className="text-[var(--foreground-secondary)] leading-relaxed">
                Visualize your entire week at a glance. Add classes, set recurring times, and never double-book yourself again.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition-all hover:border-[var(--border-secondary)] hover:shadow-lg">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-accent-teal)] to-[var(--color-primary-500)] text-white shadow-lg shadow-[var(--color-accent-teal)]/25">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                Friend Sharing
              </h3>
              <p className="text-[var(--foreground-secondary)] leading-relaxed">
                Connect with classmates and share schedules. Find common free times for study sessions or lunch breaks.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition-all hover:border-[var(--border-secondary)] hover:shadow-lg">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-accent-purple)] to-[var(--color-accent-pink)] text-white shadow-lg shadow-[var(--color-accent-purple)]/25">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                Beautiful Themes
              </h3>
              <p className="text-[var(--foreground-secondary)] leading-relaxed">
                Customize your experience with light, dark, and custom color themes. Make it yours.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition-all hover:border-[var(--border-secondary)] hover:shadow-lg">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-accent-orange)] to-[var(--color-accent-pink)] text-white shadow-lg shadow-[var(--color-accent-orange)]/25">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                Mobile Ready
              </h3>
              <p className="text-[var(--foreground-secondary)] leading-relaxed">
                Access your schedule anywhere. Fully responsive design that works beautifully on any device.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition-all hover:border-[var(--border-secondary)] hover:shadow-lg">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-success)] to-[var(--color-accent-teal)] text-white shadow-lg shadow-[var(--color-success)]/25">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                Smart Reminders
              </h3>
              <p className="text-[var(--foreground-secondary)] leading-relaxed">
                Never miss a class with intelligent notifications. Get reminded at the right time, every time.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition-all hover:border-[var(--border-secondary)] hover:shadow-lg">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-accent-purple)] text-white shadow-lg shadow-[var(--color-primary-600)]/25">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                Instant Sync
              </h3>
              <p className="text-[var(--foreground-secondary)] leading-relaxed">
                Real-time synchronization across all your devices. Changes appear instantly everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Preview Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-3">How it works</p>
              <h2 className="text-3xl font-bold text-[var(--foreground)] md:text-4xl mb-6">
                Your week, beautifully organized
              </h2>
              <p className="text-lg text-[var(--foreground-secondary)] mb-8 leading-relaxed">
                Add your classes once and see them laid out in a clean weekly view.
                Color-code by subject, add room numbers, and share with friends.
              </p>

              <div className="space-y-4">
                {[
                  { text: 'Add classes in seconds', icon: '1' },
                  { text: 'Color-code by subject', icon: '2' },
                  { text: 'Share with classmates', icon: '3' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-white font-semibold text-sm">
                      {item.icon}
                    </div>
                    <span className="text-[var(--foreground)] font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule preview mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-500)]/20 to-[var(--color-accent-purple)]/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-[var(--foreground)]">This Week</h3>
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-[var(--color-error)]" />
                    <span className="h-3 w-3 rounded-full bg-[var(--color-warning)]" />
                    <span className="h-3 w-3 rounded-full bg-[var(--color-success)]" />
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2 text-center text-xs font-medium text-[var(--foreground-secondary)] mb-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
                    <div key={day} className="py-2">{day}</div>
                  ))}
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {/* Sample schedule blocks */}
                  <div className="space-y-2">
                    <div className="rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-3 text-white text-xs">
                      <div className="font-medium">Math</div>
                      <div className="opacity-75">9:00</div>
                    </div>
                    <div className="rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 p-3 text-white text-xs">
                      <div className="font-medium">CS 101</div>
                      <div className="opacity-75">14:00</div>
                    </div>
                  </div>
                  <div className="space-y-2 pt-8">
                    <div className="rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 p-3 text-white text-xs">
                      <div className="font-medium">Physics</div>
                      <div className="opacity-75">11:00</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-3 text-white text-xs">
                      <div className="font-medium">Math</div>
                      <div className="opacity-75">9:00</div>
                    </div>
                    <div className="rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 p-3 text-white text-xs">
                      <div className="font-medium">English</div>
                      <div className="opacity-75">13:00</div>
                    </div>
                  </div>
                  <div className="space-y-2 pt-12">
                    <div className="rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 p-3 text-white text-xs">
                      <div className="font-medium">Lab</div>
                      <div className="opacity-75">14:00</div>
                    </div>
                  </div>
                  <div className="space-y-2 pt-4">
                    <div className="rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 p-3 text-white text-xs">
                      <div className="font-medium">CS 101</div>
                      <div className="opacity-75">10:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--foreground)] to-[var(--color-gray-800)] p-12 md:p-20">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[var(--color-primary-500)]/30 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[var(--color-accent-purple)]/30 to-transparent rounded-full blur-3xl" />

            <div className="relative text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl mb-6">
                Ready to get organized?
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
                Join hundreds of students who are already managing their schedules better.
                It&apos;s free to get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[var(--foreground)] shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                >
                  Create Free Account
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xl font-semibold text-[var(--foreground)]">
              <span className="text-[var(--primary)]">Schedule</span>
              <span>App</span>
            </div>
            <p className="text-sm text-[var(--foreground-tertiary)]">
              Built with care for students
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

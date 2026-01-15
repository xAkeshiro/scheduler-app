import Link from 'next/link';

export default function Home() {
  return (
    <div className="cozy min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[var(--cozy-border)] bg-[var(--cozy-cream)]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">📅</span>
              <span className="font-[family-name:var(--font-fredoka)] text-xl font-semibold text-[var(--cozy-brown)]">
                Schedule
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-[var(--cozy-brown-light)] hover:text-[var(--cozy-brown)] transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[var(--cozy-brown)] bg-[var(--cozy-mint)] rounded-[var(--cozy-radius-md)] shadow-[var(--cozy-shadow-sm)] hover:bg-[var(--cozy-mint-dark)] hover:-translate-y-0.5 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <span className="absolute top-20 left-[10%] text-3xl cozy-float opacity-60">🌱</span>
          <span className="absolute top-32 right-[15%] text-2xl cozy-float-alt opacity-50" style={{ animationDelay: '0.5s' }}>📚</span>
          <span className="absolute top-48 left-[20%] text-2xl cozy-float opacity-40" style={{ animationDelay: '1s' }}>✨</span>
          <span className="absolute bottom-32 right-[10%] text-3xl cozy-float-alt opacity-50" style={{ animationDelay: '1.5s' }}>☕</span>
          <span className="absolute bottom-48 left-[8%] text-2xl cozy-float opacity-40" style={{ animationDelay: '0.8s' }}>🎯</span>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left cozy-fade-in">
              <h1 className="font-[family-name:var(--font-fredoka)] text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--cozy-brown)] leading-tight">
                Your classes,{' '}
                <span className="text-[var(--cozy-mint-dark)]">organized</span>
                <br className="hidden sm:block" />
                <span className="text-[var(--cozy-brown-light)]"> & shared with friends</span>
              </h1>

              <p className="mt-6 text-lg text-[var(--cozy-brown-light)] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                A simple, friendly way to plan your university week.
                See when your friends are free, find time for study sessions,
                and never miss a class again.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[var(--cozy-brown)] bg-[var(--cozy-mint)] rounded-[var(--cozy-radius-md)] shadow-[var(--cozy-shadow-md)] hover:bg-[var(--cozy-mint-dark)] hover:-translate-y-1 hover:shadow-[var(--cozy-shadow-lg)] transition-all"
                >
                  Start planning for free
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[var(--cozy-brown)] bg-transparent border-2 border-[var(--cozy-border-strong)] rounded-[var(--cozy-radius-md)] hover:bg-[var(--cozy-beige)] hover:border-[var(--cozy-brown-muted)] transition-all"
                >
                  See how it works
                </Link>
              </div>

              {/* Social proof */}
              <div className="mt-12 flex items-center gap-4 justify-center lg:justify-start cozy-fade-in cozy-delay-2">
                <div className="flex -space-x-2">
                  {['🧑‍🎓', '👩‍🎓', '🧑‍💻', '👨‍🎓'].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-[var(--cozy-beige)] border-2 border-[var(--cozy-cream)] flex items-center justify-center text-lg"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[var(--cozy-brown-light)]">
                  Loved by <span className="font-semibold text-[var(--cozy-brown)]">500+</span> students
                </p>
              </div>
            </div>

            {/* Right: Schedule Preview */}
            <div className="relative cozy-fade-in cozy-delay-1">
              {/* Soft glow behind card */}
              <div className="absolute inset-0 bg-[var(--cozy-mint)]/20 rounded-[var(--cozy-radius-xl)] blur-3xl scale-95" />

              {/* Schedule Card */}
              <div className="relative bg-white border border-[var(--cozy-border)] rounded-[var(--cozy-radius-xl)] shadow-[var(--cozy-shadow-lg)] p-5 sm:p-6">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-[family-name:var(--font-fredoka)] text-lg font-medium text-[var(--cozy-brown)]">
                    This Week
                  </h3>
                  <span className="text-sm text-[var(--cozy-brown-light)]">Jan 13 - 17</span>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-5 gap-2 mb-3">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                    <div
                      key={day}
                      className={`text-center py-2 rounded-[var(--cozy-radius-sm)] text-sm font-medium ${
                        i === 0
                          ? 'bg-[var(--cozy-mint)]/30 text-[var(--cozy-brown)]'
                          : 'text-[var(--cozy-brown-light)]'
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Schedule blocks */}
                <div className="grid grid-cols-5 gap-2 min-h-[240px]">
                  {/* Monday */}
                  <div className="space-y-2">
                    <div className="bg-[var(--cozy-block-blue)] rounded-[var(--cozy-radius-md)] p-2.5">
                      <p className="text-xs font-semibold text-[var(--cozy-brown)]">Math 201</p>
                      <p className="text-xs text-[var(--cozy-brown-light)]">9:00</p>
                    </div>
                    <div className="bg-[var(--cozy-block-purple)] rounded-[var(--cozy-radius-md)] p-2.5">
                      <p className="text-xs font-semibold text-[var(--cozy-brown)]">CS 101</p>
                      <p className="text-xs text-[var(--cozy-brown-light)]">14:00</p>
                    </div>
                  </div>

                  {/* Tuesday */}
                  <div className="space-y-2 pt-6">
                    <div className="bg-[var(--cozy-block-green)] rounded-[var(--cozy-radius-md)] p-2.5">
                      <p className="text-xs font-semibold text-[var(--cozy-brown)]">Physics</p>
                      <p className="text-xs text-[var(--cozy-brown-light)]">11:00</p>
                    </div>
                  </div>

                  {/* Wednesday */}
                  <div className="space-y-2">
                    <div className="bg-[var(--cozy-block-blue)] rounded-[var(--cozy-radius-md)] p-2.5">
                      <p className="text-xs font-semibold text-[var(--cozy-brown)]">Math 201</p>
                      <p className="text-xs text-[var(--cozy-brown-light)]">9:00</p>
                    </div>
                    <div className="bg-[var(--cozy-block-orange)] rounded-[var(--cozy-radius-md)] p-2.5">
                      <p className="text-xs font-semibold text-[var(--cozy-brown)]">English</p>
                      <p className="text-xs text-[var(--cozy-brown-light)]">13:00</p>
                    </div>
                  </div>

                  {/* Thursday */}
                  <div className="space-y-2 pt-10">
                    <div className="bg-[var(--cozy-block-pink)] rounded-[var(--cozy-radius-md)] p-2.5">
                      <p className="text-xs font-semibold text-[var(--cozy-brown)]">Lab</p>
                      <p className="text-xs text-[var(--cozy-brown-light)]">14:00</p>
                    </div>
                  </div>

                  {/* Friday */}
                  <div className="space-y-2 pt-4">
                    <div className="bg-[var(--cozy-block-purple)] rounded-[var(--cozy-radius-md)] p-2.5">
                      <p className="text-xs font-semibold text-[var(--cozy-brown)]">CS 101</p>
                      <p className="text-xs text-[var(--cozy-brown-light)]">10:00</p>
                    </div>
                    <div className="bg-[var(--cozy-block-yellow)] rounded-[var(--cozy-radius-md)] p-2.5">
                      <p className="text-xs font-semibold text-[var(--cozy-brown)]">Study ✨</p>
                      <p className="text-xs text-[var(--cozy-brown-light)]">15:00</p>
                    </div>
                  </div>
                </div>

                {/* Friend indicator */}
                <div className="mt-4 pt-4 border-t border-[var(--cozy-border)] flex items-center gap-2">
                  <span className="text-lg">👋</span>
                  <p className="text-sm text-[var(--cozy-brown-light)]">
                    <span className="font-medium text-[var(--cozy-brown)]">2 friends</span> free during your lunch break
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-[var(--cozy-beige)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16 cozy-fade-in">
            <h2 className="font-[family-name:var(--font-fredoka)] text-3xl sm:text-4xl font-semibold text-[var(--cozy-brown)]">
              Made for students, by students
            </h2>
            <p className="mt-4 text-lg text-[var(--cozy-brown-light)] max-w-2xl mx-auto">
              Simple tools to help you stay on top of your week without the stress
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white border border-[var(--cozy-border)] rounded-[var(--cozy-radius-lg)] p-6 shadow-[var(--cozy-shadow-md)] hover:-translate-y-1 hover:shadow-[var(--cozy-shadow-lg)] transition-all cozy-fade-in cozy-delay-1">
              <div className="mb-4">
                <svg className="w-7 h-7 text-[var(--cozy-brown)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-fredoka)] text-xl font-medium text-[var(--cozy-brown)] mb-2">
                Weekly overview
              </h3>
              <p className="text-[var(--cozy-brown-light)] leading-relaxed">
                See your entire week at a glance. Add classes once, and they show up every week automatically.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-[var(--cozy-border)] rounded-[var(--cozy-radius-lg)] p-6 shadow-[var(--cozy-shadow-md)] hover:-translate-y-1 hover:shadow-[var(--cozy-shadow-lg)] transition-all cozy-fade-in cozy-delay-2">
              <div className="mb-4">
                <svg className="w-7 h-7 text-[var(--cozy-brown)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-fredoka)] text-xl font-medium text-[var(--cozy-brown)] mb-2">
                Share with friends
              </h3>
              <p className="text-[var(--cozy-brown-light)] leading-relaxed">
                Compare schedules with classmates to find common free time for study groups or lunch together.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-[var(--cozy-border)] rounded-[var(--cozy-radius-lg)] p-6 shadow-[var(--cozy-shadow-md)] hover:-translate-y-1 hover:shadow-[var(--cozy-shadow-lg)] transition-all cozy-fade-in cozy-delay-3">
              <div className="mb-4">
                <svg className="w-7 h-7 text-[var(--cozy-brown)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-fredoka)] text-xl font-medium text-[var(--cozy-brown)] mb-2">
                Color your week
              </h3>
              <p className="text-[var(--cozy-brown-light)] leading-relaxed">
                Customize each class with soft, friendly colors. Make your schedule as unique as you are.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-[var(--cozy-border)] rounded-[var(--cozy-radius-lg)] p-6 shadow-[var(--cozy-shadow-md)] hover:-translate-y-1 hover:shadow-[var(--cozy-shadow-lg)] transition-all cozy-fade-in cozy-delay-1">
              <div className="mb-4">
                <svg className="w-7 h-7 text-[var(--cozy-brown)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-fredoka)] text-xl font-medium text-[var(--cozy-brown)] mb-2">
                Gentle reminders
              </h3>
              <p className="text-[var(--cozy-brown-light)] leading-relaxed">
                Get a friendly nudge before class starts. No more rushing across campus in a panic!
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white border border-[var(--cozy-border)] rounded-[var(--cozy-radius-lg)] p-6 shadow-[var(--cozy-shadow-md)] hover:-translate-y-1 hover:shadow-[var(--cozy-shadow-lg)] transition-all cozy-fade-in cozy-delay-2">
              <div className="mb-4">
                <svg className="w-7 h-7 text-[var(--cozy-brown)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-fredoka)] text-xl font-medium text-[var(--cozy-brown)] mb-2">
                Works everywhere
              </h3>
              <p className="text-[var(--cozy-brown-light)] leading-relaxed">
                Check your schedule on your phone, tablet, or laptop. Your week travels with you.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white border border-[var(--cozy-border)] rounded-[var(--cozy-radius-lg)] p-6 shadow-[var(--cozy-shadow-md)] hover:-translate-y-1 hover:shadow-[var(--cozy-shadow-lg)] transition-all cozy-fade-in cozy-delay-3">
              <div className="mb-4">
                <svg className="w-7 h-7 text-[var(--cozy-brown)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-fredoka)] text-xl font-medium text-[var(--cozy-brown)] mb-2">
                Made with care
              </h3>
              <p className="text-[var(--cozy-brown-light)] leading-relaxed">
                Built by students who understand the chaos of university life. We&apos;ve got your back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 cozy-fade-in">
            <h2 className="font-[family-name:var(--font-fredoka)] text-3xl sm:text-4xl font-semibold text-[var(--cozy-brown)]">
              Getting started is easy
            </h2>
            <p className="mt-4 text-lg text-[var(--cozy-brown-light)]">
              Three simple steps to a more organized week
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                emoji: '📝',
                title: 'Add your classes',
                description: 'Enter your class schedule once. Set the days, times, and room numbers.',
              },
              {
                step: '2',
                emoji: '🎨',
                title: 'Make it yours',
                description: 'Pick colors for each class and customize how your week looks.',
              },
              {
                step: '3',
                emoji: '👯',
                title: 'Connect with friends',
                description: 'Share your schedule and see when your friends are free too.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center cozy-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--cozy-peach)] rounded-full text-3xl mb-4 cozy-wiggle" style={{ animationDelay: `${i * 0.3}s` }}>
                  {item.emoji}
                </div>
                <div className="w-10 h-10 mx-auto -mt-2 mb-4 bg-[var(--cozy-mint)] rounded-full flex items-center justify-center font-[family-name:var(--font-fredoka)] text-lg font-semibold text-[var(--cozy-brown)]">
                  {item.step}
                </div>
                <h3 className="font-[family-name:var(--font-fredoka)] text-xl font-medium text-[var(--cozy-brown)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--cozy-brown-light)] max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--cozy-mint)]/30 border border-[var(--cozy-mint)] rounded-[var(--cozy-radius-xl)] p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <span className="absolute top-4 left-8 text-2xl opacity-50 cozy-float">🌿</span>
            <span className="absolute bottom-4 right-8 text-2xl opacity-50 cozy-float-alt">✨</span>

            <h2 className="font-[family-name:var(--font-fredoka)] text-2xl sm:text-3xl font-semibold text-[var(--cozy-brown)] mb-4">
              Ready to organize your week?
            </h2>
            <p className="text-[var(--cozy-brown-light)] mb-8 max-w-lg mx-auto">
              Join hundreds of students who are already feeling more in control of their schedules. It&apos;s free!
            </p>
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[var(--cozy-brown)] bg-white rounded-[var(--cozy-radius-md)] shadow-[var(--cozy-shadow-md)] hover:-translate-y-1 hover:shadow-[var(--cozy-shadow-lg)] transition-all"
            >
              Get started for free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[var(--cozy-border)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">📅</span>
              <span className="font-[family-name:var(--font-fredoka)] text-lg font-medium text-[var(--cozy-brown)]">
                Schedule
              </span>
            </div>
            <p className="text-sm text-[var(--cozy-brown-light)]">
              Made with ☕ for students everywhere
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

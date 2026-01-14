'use client';

import { Navigation } from '@/components';
import { useTheme } from '@/components/ThemeProvider';
import { ThemeMode } from '@/types';

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  // TODO: Load user settings from Supabase
  // TODO: Implement settings save functionality

  const themeOptions: { value: ThemeMode; label: string; description: string; icon: React.ReactNode }[] = [
    {
      value: 'light',
      label: 'Light',
      description: 'Clean and bright',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
    },
    {
      value: 'dark',
      label: 'Dark',
      description: 'Easy on the eyes',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      ),
    },
    {
      value: 'system',
      label: 'System',
      description: 'Match your device',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navigation />

      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-[var(--foreground)] md:text-4xl">
              Settings
            </h1>
            <p className="mt-2 text-[var(--foreground-secondary)]">
              Manage your account and customize your experience
            </p>
          </div>

          {/* Theme Settings */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
                <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[var(--foreground)]">
                  Appearance
                </h2>
                <p className="text-sm text-[var(--foreground-secondary)]">
                  Choose how the app looks for you
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {themeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setTheme(option.value)}
                  className={`relative rounded-xl border-2 p-4 text-left transition-all hover:scale-[1.02] ${
                    theme === option.value
                      ? 'border-[var(--primary)] bg-[var(--primary)]/5'
                      : 'border-[var(--border)] hover:border-[var(--border-secondary)] hover:bg-[var(--background-secondary)]/50'
                  }`}
                >
                  {theme === option.value && (
                    <div className="absolute top-3 right-3">
                      <svg className="h-5 w-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${
                    theme === option.value
                      ? 'bg-[var(--primary)]/10 text-[var(--primary)]'
                      : 'bg-[var(--background-secondary)] text-[var(--foreground-secondary)]'
                  }`}>
                    {option.icon}
                  </div>
                  <span className="block font-medium text-[var(--foreground)]">
                    {option.label}
                  </span>
                  <span className="mt-1 block text-xs text-[var(--foreground-secondary)]">
                    {option.description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Profile Settings */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 animate-slide-up animation-delay-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[var(--foreground)]">
                  Profile
                </h2>
                <p className="text-sm text-[var(--foreground-secondary)]">
                  Manage your personal information
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-semibold">
                  JD
                </div>
                <div>
                  <button className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--background-secondary)] disabled:opacity-50" disabled>
                    Change Avatar
                  </button>
                  <p className="mt-1 text-xs text-[var(--foreground-tertiary)]">
                    JPG, PNG or GIF. Max 2MB.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Display Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    disabled
                    className="block w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder-[var(--foreground-tertiary)] opacity-50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    University
                  </label>
                  <input
                    type="text"
                    placeholder="Tokyo University"
                    disabled
                    className="block w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder-[var(--foreground-tertiary)] opacity-50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@university.edu"
                  disabled
                  className="block w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder-[var(--foreground-tertiary)] opacity-50 transition-all"
                />
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--border)] flex justify-end">
              <button className="rounded-xl bg-[var(--foreground)] px-6 py-2.5 text-sm font-semibold text-[var(--background)] transition-all opacity-50 cursor-not-allowed">
                Save Changes
              </button>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 animate-slide-up animation-delay-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10">
                <svg className="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[var(--foreground)]">
                  Privacy & Sharing
                </h2>
                <p className="text-sm text-[var(--foreground-secondary)]">
                  Control who can see your schedule
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-[var(--background-secondary)]/50 opacity-60">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--background)]">
                    <svg className="h-5 w-5 text-[var(--foreground-secondary)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-[var(--foreground)]">
                      Share schedule with friends
                    </span>
                    <p className="text-sm text-[var(--foreground-secondary)]">
                      Allow friends to view your class schedule
                    </p>
                  </div>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-[var(--background-tertiary)] cursor-not-allowed">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white shadow-sm translate-x-1" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-[var(--background-secondary)]/50 opacity-60">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--background)]">
                    <svg className="h-5 w-5 text-[var(--foreground-secondary)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-[var(--foreground)]">
                      Show online status
                    </span>
                    <p className="text-sm text-[var(--foreground-secondary)]">
                      Let friends see when you&apos;re active
                    </p>
                  </div>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-[var(--background-tertiary)] cursor-not-allowed">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white shadow-sm translate-x-1" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-[var(--background-secondary)]/50 opacity-60">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--background)]">
                    <svg className="h-5 w-5 text-[var(--foreground-secondary)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-[var(--foreground)]">
                      Push notifications
                    </span>
                    <p className="text-sm text-[var(--foreground-secondary)]">
                      Receive reminders for upcoming classes
                    </p>
                  </div>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-[var(--background-tertiary)] cursor-not-allowed">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white shadow-sm translate-x-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Info Notice */}
          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-4 animate-fade-in animation-delay-300">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10">
                <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-[var(--foreground)]">Connect to unlock all settings</p>
                <p className="mt-1 text-sm text-[var(--foreground-secondary)]">
                  Most settings require authentication. Connect Supabase to enable profile updates and privacy controls.
                  Theme selection is fully functional now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

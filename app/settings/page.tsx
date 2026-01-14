'use client';

import { Layout, Button, Card } from '@/components';
import { useTheme } from '@/components/ThemeProvider';
import { ThemeMode } from '@/types';

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  // TODO: Load user settings from Supabase
  // TODO: Implement settings save functionality

  const themeOptions: { value: ThemeMode; label: string; description: string }[] = [
    { value: 'light', label: 'Light', description: 'Clean and bright' },
    { value: 'dark', label: 'Dark', description: 'Easy on the eyes' },
    { value: 'system', label: 'System', description: 'Match your device' },
  ];

  return (
    <Layout>
      <div className="max-w-2xl space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)] md:text-3xl">
            Settings
          </h1>
          <p className="mt-1 text-[var(--foreground-secondary)]">
            Manage your account and preferences
          </p>
        </div>

        {/* Theme Settings */}
        <Card>
          <h2 className="text-lg font-semibold text-[var(--foreground)]">
            Appearance
          </h2>
          <p className="mt-1 text-sm text-[var(--foreground-secondary)]">
            Choose how the app looks for you
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {themeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setTheme(option.value)}
                className={`rounded-xl border-2 p-4 text-left transition-all ${
                  theme === option.value
                    ? 'border-[var(--primary)] bg-[var(--color-primary-50)]'
                    : 'border-[var(--border)] hover:border-[var(--border-secondary)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[var(--foreground)]">
                    {option.label}
                  </span>
                  {theme === option.value && (
                    <svg className="h-5 w-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <p className="mt-1 text-xs text-[var(--foreground-secondary)]">
                  {option.description}
                </p>
              </button>
            ))}
          </div>
        </Card>

        {/* Account Settings */}
        <Card>
          <h2 className="text-lg font-semibold text-[var(--foreground)]">
            Account
          </h2>
          <p className="mt-1 text-sm text-[var(--foreground-secondary)]">
            Manage your account information
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--foreground)]">
                Display Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                disabled
                className="mt-2 block w-full rounded-lg border border-[var(--input-border)] bg-[var(--input)] px-4 py-3 text-[var(--input-foreground)] placeholder-[var(--foreground-tertiary)] opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--foreground)]">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                disabled
                className="mt-2 block w-full rounded-lg border border-[var(--input-border)] bg-[var(--input)] px-4 py-3 text-[var(--input-foreground)] placeholder-[var(--foreground-tertiary)] opacity-50"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button disabled>Save Changes</Button>
          </div>
        </Card>

        {/* Privacy Settings */}
        <Card>
          <h2 className="text-lg font-semibold text-[var(--foreground)]">
            Privacy
          </h2>
          <p className="mt-1 text-sm text-[var(--foreground-secondary)]">
            Control who can see your schedule
          </p>

          <div className="mt-6 space-y-4">
            <label className="flex cursor-not-allowed items-center justify-between opacity-50">
              <div>
                <span className="font-medium text-[var(--foreground)]">
                  Share schedule with friends
                </span>
                <p className="text-sm text-[var(--foreground-secondary)]">
                  Allow friends to view your class schedule
                </p>
              </div>
              <input
                type="checkbox"
                disabled
                className="h-5 w-5 rounded border-[var(--border)]"
              />
            </label>

            <label className="flex cursor-not-allowed items-center justify-between opacity-50">
              <div>
                <span className="font-medium text-[var(--foreground)]">
                  Show online status
                </span>
                <p className="text-sm text-[var(--foreground-secondary)]">
                  Let friends see when you&apos;re online
                </p>
              </div>
              <input
                type="checkbox"
                disabled
                className="h-5 w-5 rounded border-[var(--border)]"
              />
            </label>
          </div>
        </Card>

        {/* Placeholder Notice */}
        <Card className="border-[var(--color-info)] bg-[var(--color-info)]/10">
          <div className="flex items-start gap-3">
            <svg className="h-5 w-5 flex-shrink-0 text-[var(--color-info)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <div>
              <p className="font-medium text-[var(--foreground)]">Settings Placeholder</p>
              <p className="mt-1 text-sm text-[var(--foreground-secondary)]">
                Most settings are disabled until Supabase authentication is connected.
                Theme selection is fully functional.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}

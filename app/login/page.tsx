'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components';

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement with Supabase
    console.log('Auth placeholder:', { email, isSignUp });
    alert('Authentication not yet implemented. Supabase integration coming soon!');
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navigation />

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Left side - Form */}
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            {/* Header */}
            <div className="animate-fade-in">
              <Link href="/" className="inline-flex items-center gap-2 text-2xl font-semibold text-[var(--foreground)]">
                <span className="text-[var(--primary)]">Schedule</span>
                <span>App</span>
              </Link>
              <h2 className="mt-8 text-3xl font-bold tracking-tight text-[var(--foreground)]">
                {isSignUp ? 'Create your account' : 'Welcome back'}
              </h2>
              <p className="mt-2 text-[var(--foreground-secondary)]">
                {isSignUp
                  ? 'Start organizing your university schedule today'
                  : 'Sign in to access your schedule'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-10 space-y-6 animate-slide-up animation-delay-100">
              {isSignUp && (
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--foreground)]"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required={isSignUp}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 block w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-[var(--foreground)] placeholder-[var(--foreground-tertiary)] transition-all focus:border-[var(--primary)] focus:outline-none focus:ring-4 focus:ring-[var(--primary)]/10"
                    placeholder="John Doe"
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--foreground)]"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 block w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-[var(--foreground)] placeholder-[var(--foreground-tertiary)] transition-all focus:border-[var(--primary)] focus:outline-none focus:ring-4 focus:ring-[var(--primary)]/10"
                  placeholder="you@university.edu"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-[var(--foreground)]"
                  >
                    Password
                  </label>
                  {!isSignUp && (
                    <button
                      type="button"
                      className="text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={isSignUp ? 'new-password' : 'current-password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 block w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-[var(--foreground)] placeholder-[var(--foreground-tertiary)] transition-all focus:border-[var(--primary)] focus:outline-none focus:ring-4 focus:ring-[var(--primary)]/10"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[var(--foreground)] px-4 py-3.5 text-base font-semibold text-[var(--background)] shadow-lg shadow-[var(--foreground)]/10 transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
              >
                {isSignUp ? 'Create Account' : 'Sign In'}
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[var(--border)]" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-[var(--background)] px-4 text-[var(--foreground-tertiary)]">
                    or continue with
                  </span>
                </div>
              </div>

              {/* Social buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition-all hover:bg-[var(--background-secondary)] hover:border-[var(--border-secondary)]"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition-all hover:bg-[var(--background-secondary)] hover:border-[var(--border-secondary)]"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  GitHub
                </button>
              </div>
            </form>

            {/* Switch between sign in and sign up */}
            <p className="mt-10 text-center text-sm text-[var(--foreground-secondary)] animate-fade-in animation-delay-200">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-semibold text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors"
              >
                {isSignUp ? 'Sign in' : 'Sign up for free'}
              </button>
            </p>
          </div>
        </div>

        {/* Right side - Decorative */}
        <div className="relative hidden w-0 flex-1 lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-500)] via-[var(--color-accent-purple)] to-[var(--color-accent-pink)]">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-30">
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative flex h-full items-center justify-center p-12">
              <div className="max-w-lg text-center text-white">
                <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Organize your university life
                </h3>
                <p className="text-lg text-white/80">
                  Join thousands of students who are managing their schedules,
                  coordinating with friends, and never missing a class.
                </p>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm text-white/70">Active Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">10k+</div>
                    <div className="text-sm text-white/70">Classes Scheduled</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">99%</div>
                    <div className="text-sm text-white/70">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

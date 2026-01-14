'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Layout, Button, Card } from '@/components';

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement with Supabase
    console.log('Auth placeholder:', { email, isSignUp });
    alert('Authentication not yet implemented. Supabase integration coming soon!');
  };

  return (
    <Layout>
      <div className="flex min-h-[calc(100vh-200px)] items-center justify-center">
        <Card className="w-full max-w-md" padding="lg">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[var(--foreground)]">
              {isSignUp ? 'Create your account' : 'Welcome back'}
            </h1>
            <p className="mt-2 text-[var(--foreground-secondary)]">
              {isSignUp
                ? 'Start organizing your schedule today'
                : 'Sign in to access your schedule'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
                className="mt-2 block w-full rounded-lg border border-[var(--input-border)] bg-[var(--input)] px-4 py-3 text-[var(--input-foreground)] placeholder-[var(--foreground-tertiary)] transition-colors focus:border-[var(--input-focus)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)] focus:ring-opacity-20"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[var(--foreground)]"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={isSignUp ? 'new-password' : 'current-password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 block w-full rounded-lg border border-[var(--input-border)] bg-[var(--input)] px-4 py-3 text-[var(--input-foreground)] placeholder-[var(--foreground-tertiary)] transition-colors focus:border-[var(--input-focus)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)] focus:ring-opacity-20"
                placeholder="••••••••"
              />
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="text-sm text-[var(--primary)] hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <Button type="submit" className="w-full" size="lg">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-[var(--foreground-secondary)]">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-medium text-[var(--primary)] hover:underline"
              >
                {isSignUp ? 'Sign in' : 'Sign up'}
              </button>
            </p>
          </div>

          <div className="mt-8 border-t border-[var(--border)] pt-6">
            <p className="text-center text-xs text-[var(--foreground-tertiary)]">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
}

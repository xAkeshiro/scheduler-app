import Link from 'next/link';
import { Layout, Button, Card } from '@/components';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
            Plan your
            <span className="text-[var(--primary)]"> schedule</span>,
            <br />
            share with friends
          </h1>
          <p className="mt-6 text-lg text-[var(--foreground-secondary)] md:text-xl">
            A simple, beautiful way to manage your university classes.
            Coordinate with friends, never miss a class, stay organized.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/login">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/login">
              <Button variant="secondary" size="lg">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
          Everything you need
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-100)] text-[var(--primary)]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              Class Schedule
            </h3>
            <p className="mt-2 text-[var(--foreground-secondary)]">
              Add your classes, set recurring times, and visualize your week at a glance.
            </p>
          </Card>

          <Card>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-100)] text-[var(--primary)]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              Friend Sharing
            </h3>
            <p className="mt-2 text-[var(--foreground-secondary)]">
              Share your schedule with friends to find common free times and plan together.
            </p>
          </Card>

          <Card>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-100)] text-[var(--primary)]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              Custom Themes
            </h3>
            <p className="mt-2 text-[var(--foreground-secondary)]">
              Personalize your experience with light, dark, and custom color themes.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <Card className="text-center" padding="lg">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
            Ready to get organized?
          </h2>
          <p className="mt-4 text-[var(--foreground-secondary)]">
            Join students who are already managing their schedules better.
          </p>
          <div className="mt-8">
            <Link href="/login">
              <Button size="lg">Create Free Account</Button>
            </Link>
          </div>
        </Card>
      </section>
    </Layout>
  );
}

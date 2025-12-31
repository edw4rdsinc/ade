import Link from "next/link";
import { sanityFetch, queries } from "@/lib/sanity";

interface Testimonial {
  _id: string;
  quote: string;
  author: string;
  affiliation?: string;
  context?: string;
}

export default async function Home() {
  const testimonials = await sanityFetch<Testimonial[]>(queries.bookTestimonials);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--color-warm-white)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="accent-line mb-6"></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Historian of Money, Power, and the American Revolution
              </h1>
              <p className="text-lg text-[var(--color-text-muted)] mb-8 leading-relaxed">
                Andrew David Edwards is a historian whose work has reshaped understanding
                of money&apos;s role in the American Revolution. His research connects monetary
                systems, capitalism, and revolutionary politics across four continents.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/book" className="btn-primary no-underline">
                  New Book Out Now
                </Link>
                <Link href="/speaking" className="btn-secondary no-underline">
                  Speaking Inquiries
                </Link>
              </div>
            </div>

            {/* Book Cover Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="bg-[var(--color-navy)] p-8 shadow-2xl max-w-sm">
                  <div className="border-2 border-[var(--color-gold)] p-6 text-center">
                    <p className="text-[var(--color-gold)] text-sm uppercase tracking-widest mb-4">
                      Princeton University Press
                    </p>
                    <h2 className="text-white text-2xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
                      Money and the Making of the American Revolution
                    </h2>
                    <div className="w-12 h-0.5 bg-[var(--color-gold)] mx-auto mb-4"></div>
                    <p className="text-gray-300 text-lg">
                      Andrew David Edwards
                    </p>
                    <p className="text-gray-400 text-sm mt-4">
                      Available December 2025
                    </p>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[var(--color-gold)] -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">About</h2>
            <div className="accent-line mb-6"></div>
            <p className="text-lg leading-relaxed mb-6">
              Dr. Edwards joined the University of St Andrews in January 2022 after
              holding prestigious fellowships at Oxford and The New School. His path
              to academia was unconventional: from financial journalist covering the
              2008 crisis to prize-winning scholar, his trajectory informs his
              groundbreaking research.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              A first-generation college graduate from rural California, Edwards completed
              his undergraduate degree at Columbia University at age 29, then earned his
              PhD from Princeton under Sean Wilentz.
            </p>
            <Link
              href="/about"
              className="text-[var(--color-navy)] font-semibold hover:text-[var(--color-gold)] transition-colors inline-flex items-center gap-2"
            >
              Read full biography
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="section bg-[var(--color-warm-white)]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-6">Research Themes</h2>
          <div className="accent-line mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-[var(--color-border)]">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-navy)]">
                Money & Revolution
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The American Revolution was fundamentally about monetary sovereignty—who
                gets to create money, and whose interests it serves.
              </p>
            </div>

            <div className="bg-white p-8 border border-[var(--color-border)]">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-navy)]">
                Global Capitalism
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Connecting American monetary struggles to the transatlantic slave trade,
                East India Company, and violence against Native Americans.
              </p>
            </div>

            <div className="bg-white p-8 border border-[var(--color-border)]">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-navy)]">
                Contemporary Relevance
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                From cryptocurrency to central bank policy, the founding-era debates
                over money remain urgently relevant today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking CTA */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="bg-[var(--color-navy)] p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
              Available for Speaking Engagements
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Dr. Edwards speaks on the history of money, cryptocurrency and democratic
              control, and the contemporary relevance of revolutionary-era economic debates.
            </p>
            <Link
              href="/speaking"
              className="inline-block bg-[var(--color-gold)] text-[var(--color-navy)] px-8 py-3 font-semibold hover:bg-[var(--color-gold-light)] transition-colors no-underline"
            >
              Inquire About Speaking
            </Link>
          </div>
        </div>
      </section>

      {/* Endorsements */}
      <section className="section bg-[var(--color-warm-white)]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Praise for the Book</h2>
          <div className="accent-line mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.slice(0, 2).map((testimonial) => (
              <blockquote key={testimonial._id} className="bg-white p-8 border-l-4 border-[var(--color-gold)]">
                <p className="text-lg italic mb-4 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="text-[var(--color-text-muted)]">
                  <strong>{testimonial.author}</strong>
                  {testimonial.affiliation && (
                    <span className="block text-sm">{testimonial.affiliation}</span>
                  )}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

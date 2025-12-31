import { Metadata } from "next";
import Link from "next/link";
import { sanityFetch, queries } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Money and the Making of the American Revolution",
  description:
    "A groundbreaking reinterpretation of the American Revolution as fundamentally a monetary conflict. Published by Princeton University Press.",
};

interface Testimonial {
  _id: string;
  quote: string;
  author: string;
  affiliation?: string;
}

export default async function BookPage() {
  const testimonials = await sanityFetch<Testimonial[]>(queries.bookTestimonials);

  return (
    <>
      {/* Header */}
      <section className="bg-[var(--color-warm-white)] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="accent-line mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The Book</h1>
        </div>
      </section>

      {/* Book Details */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Book Cover */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/ade-book-cover.avif"
                  alt="Money and the Making of the American Revolution by Andrew David Edwards - Book Cover"
                  className="shadow-2xl max-w-md w-full"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[var(--color-gold)] -z-10"></div>
              </div>
            </div>

            {/* Book Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[var(--color-navy)]">
                Money and the Making of the American Revolution
              </h2>

              <div className="space-y-4 mb-8">
                <p className="text-[var(--color-text-muted)]">
                  <strong>Publisher:</strong> Princeton University Press
                </p>
                <p className="text-[var(--color-text-muted)]">
                  <strong>Publication Date:</strong> December 2025 (US) / January 2026 (UK)
                </p>
                <p className="text-[var(--color-text-muted)]">
                  <strong>Pages:</strong> 360
                </p>
                <p className="text-[var(--color-text-muted)]">
                  <strong>ISBN:</strong> 9780691200262
                </p>
                <p className="text-[var(--color-text-muted)]">
                  <strong>Price:</strong> $35.00 / £30.00
                </p>
              </div>

              <a
                href="https://press.princeton.edu/books/hardcover/9780691200262/money-and-the-making-of-the-american-revolution"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary no-underline inline-block mb-8"
              >
                Order from Princeton University Press
              </a>

              <div className="prose max-w-none">
                <h3>About the Book</h3>
                <p>
                  This book reinterprets the American Revolution as fundamentally a monetary
                  conflict rather than solely a taxation dispute. Edwards argues that colonists
                  resisted British control over currency creation and monetary policy, seeking
                  to protect their ability to make their own money.
                </p>

                <p>
                  American money and American democracy have always been in tension, pitting
                  political equality against economic inequality. <em>Money and the Making of
                  the American Revolution</em> shows how this struggle emerged in America&apos;s
                  founding era.
                </p>

                <p>
                  Edwards demonstrates that the dispute over taxes was really a dispute over
                  money: what it was, who could make it, and how to keep it from being used
                  at the expense of the colonists in North America. The colonial rebels
                  refocused their resistance on democratic, local control—defending the
                  power they had used to make money for themselves.
                </p>

                <p>
                  Spanning four continents, the narrative connects North American colonial
                  governance to broader imperial systems, including the slave trade and
                  East India Company operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Argument */}
      <section className="section bg-[var(--color-warm-white)]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">The Central Argument</h2>
            <div className="accent-line mx-auto mb-8"></div>
            <blockquote className="text-xl italic leading-relaxed text-[var(--color-text-muted)]">
              &ldquo;The colonists may have won the battle for representation, but the money
              that underpinned European empire had established a stronghold in the new
              republic. In terms of money and finance, Great Britain won the American Revolution.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Endorsements */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Praise</h2>
          <div className="accent-line mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial._id} className="bg-[var(--color-warm-white)] p-8 border-l-4 border-[var(--color-gold)]">
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

      {/* Speaking CTA */}
      <section className="section bg-[var(--color-navy)]">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
            Book Dr. Edwards for Your Event
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Dr. Edwards is available for book talks, lectures, and media appearances
            discussing the book&apos;s themes and their contemporary relevance.
          </p>
          <Link
            href="/speaking"
            className="inline-block bg-[var(--color-gold)] text-[var(--color-navy)] px-8 py-3 font-semibold hover:bg-[var(--color-gold-light)] transition-colors no-underline"
          >
            Speaking Inquiries
          </Link>
        </div>
      </section>
    </>
  );
}

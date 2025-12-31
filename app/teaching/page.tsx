import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "Teaching and supervision at the University of St Andrews by Dr. Andrew David Edwards.",
};

export default function TeachingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[var(--color-warm-white)] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="accent-line mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Teaching</h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl">
            Courses and supervision at the University of St Andrews
          </p>
        </div>
      </section>

      {/* Current Courses */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-6">Current Courses</h2>
          <div className="accent-line mb-12"></div>

          <div className="bg-white p-8 border border-[var(--color-border)] max-w-3xl">
            <div className="flex items-start gap-6">
              <div className="text-[var(--color-gold)] font-bold text-lg shrink-0">
                MO3057
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">
                  The Atlantic Age of Revolutions
                </h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                  This seminar examines the American, French, and Haitian revolutions
                  within their global contexts. We explore how these interconnected
                  upheavals reshaped politics, society, and ideas across the Atlantic
                  world, addressing themes of gender, violence, and theories of revolution.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[var(--color-warm-white)] text-[var(--color-text-muted)] px-3 py-1">
                    Honours Seminar
                  </span>
                  <span className="text-xs bg-[var(--color-warm-white)] text-[var(--color-text-muted)] px-3 py-1">
                    School of History
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supervision */}
      <section className="section bg-[var(--color-warm-white)]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-6">Graduate Supervision</h2>
          <div className="accent-line mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div className="bg-white p-8 border border-[var(--color-border)]">
              <h3 className="text-lg font-bold text-[var(--color-navy)] mb-4">
                Supervision Interests
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                Dr. Edwards welcomes inquiries from prospective MA and PhD students
                interested in:
              </p>
              <ul className="space-y-2 text-[var(--color-text-muted)]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--color-gold)] rounded-full"></span>
                  Early America
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--color-gold)] rounded-full"></span>
                  History of Capitalism
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--color-gold)] rounded-full"></span>
                  Transnational Economic History
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--color-gold)] rounded-full"></span>
                  Global History
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--color-gold)] rounded-full"></span>
                  History of Money
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-[var(--color-border)]">
              <h3 className="text-lg font-bold text-[var(--color-navy)] mb-4">
                Current Students
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-[var(--color-navy)]">
                    Sebastian Gonzalez Berrios
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    PhD Candidate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-6">Research Projects</h2>
          <div className="accent-line mb-12"></div>

          <div className="space-y-8 max-w-3xl">
            <div className="bg-white p-8 border border-[var(--color-border)]">
              <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">
                Reframing the Age of Revolutions
              </h3>
              <p className="text-sm text-[var(--color-gold)] mb-4">
                AHRC-funded Research Network (2022–2023)
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                This research network examines how global the Age of Revolutions
                (c. 1750–1850) actually was, questioning Eurocentric frameworks and
                exploring connections across continents.
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                <strong>Role:</strong> Co-Lead / Steering Committee Member
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                <strong>Collaborators:</strong> Peter Hill (Northumbria), Tom Cutterham
                (Birmingham), Felicia Gottmann (Northumbria), Juan Neves-Sarriegui (Oxford)
              </p>
            </div>

            <div className="bg-white p-8 border border-[var(--color-border)]">
              <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">
                Political Economy and Culture in Global History
              </h3>
              <p className="text-sm text-[var(--color-gold)] mb-4">
                Research Seminar Series (2018–2021)
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                A reading group and seminar series exploring intersections between
                global history and the history of capitalism, hosted at Oxford and
                Northumbria University.
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                <strong>Role:</strong> Co-convener with Peter Hill and Juan Neves-Sarriegui
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-[var(--color-navy)]">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
            Interested in Studying with Dr. Edwards?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Prospective graduate students are welcome to get in touch to discuss
            research interests and supervision opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-gold)] text-[var(--color-navy)] px-8 py-3 font-semibold hover:bg-[var(--color-gold-light)] transition-colors no-underline"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

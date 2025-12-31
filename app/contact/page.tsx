import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Dr. Andrew David Edwards at the University of St Andrews.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[var(--color-warm-white)] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="accent-line mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl">
            Get in touch with Dr. Edwards
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[var(--color-navy)]">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-[var(--color-navy)] mb-1">Email</h3>
                  <a
                    href="mailto:ade3@st-andrews.ac.uk"
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-gold)]"
                  >
                    ade3@st-andrews.ac.uk
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--color-navy)] mb-1">
                    Institutional Address
                  </h3>
                  <p className="text-[var(--color-text-muted)]">
                    School of History<br />
                    St Katharine&apos;s Lodge<br />
                    The Scores<br />
                    St Andrews, KY16 9BA<br />
                    United Kingdom
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--color-navy)] mb-1">Phone</h3>
                  <p className="text-[var(--color-text-muted)]">
                    +44 (0)1334 46 2391
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
                <h3 className="font-semibold text-[var(--color-navy)] mb-4">
                  Academic Profiles
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://www.st-andrews.ac.uk/history/people/ade3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-gold)]"
                  >
                    <span>University of St Andrews Profile</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/Historicaecon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-gold)]"
                  >
                    <span>Twitter/X: @Historicaecon</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=vdeRyxkAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-gold)]"
                  >
                    <span>Google Scholar</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href="https://oxford.academia.edu/AndrewEdwards"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-gold)]"
                  >
                    <span>Academia.edu</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href="https://orcid.org/0000-0002-7173-7355"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-gold)]"
                  >
                    <span>ORCID: 0000-0002-7173-7355</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--color-warm-white)] p-8">
              <h2 className="text-2xl font-bold mb-6 text-[var(--color-navy)]">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

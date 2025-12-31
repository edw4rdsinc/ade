import { Metadata } from "next";
import { sanityFetch, queries } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Academic publications by Dr. Andrew David Edwards on money, capitalism, and the American Revolution.",
};

interface Publication {
  _id: string;
  title: string;
  type: string;
  venue: string;
  year: string;
  volume?: string;
  coauthors?: string;
  doi?: string;
  link?: string;
  pdfUrl?: string;
  openAccess?: boolean;
  abstract?: string;
  featured?: boolean;
}

export default async function PublicationsPage() {
  const publications = await sanityFetch<Publication[]>(queries.allPublications);

  return (
    <>
      {/* Header */}
      <section className="bg-[var(--color-warm-white)] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="accent-line mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Publications</h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl">
            Scholarly work on money, capitalism, and the American Revolution
          </p>
        </div>
      </section>

      {/* Publications List */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-12">
            {publications.map((pub) => (
              <article
                key={pub._id}
                className="bg-white p-8 border border-[var(--color-border)] hover:border-[var(--color-gold)] transition-colors"
              >
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-block bg-[var(--color-navy)] text-white text-xs px-3 py-1 uppercase tracking-wider">
                    {pub.type}
                  </span>
                  <span className="inline-block text-[var(--color-gold)] text-sm font-semibold">
                    {pub.year}
                  </span>
                  {pub.openAccess && (
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 uppercase tracking-wider">
                      Open Access
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold text-[var(--color-navy)] mb-2">
                  {pub.link ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--color-gold)] transition-colors"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h2>

                <p className="text-[var(--color-text-muted)] mb-2">
                  <em>{pub.venue}</em>
                  {pub.volume && <span>, {pub.volume}</span>}
                </p>

                {pub.coauthors && (
                  <p className="text-sm text-[var(--color-text-muted)] mb-4">
                    {pub.coauthors}
                  </p>
                )}

                {pub.abstract && (
                  <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                    {pub.abstract}
                  </p>
                )}

                {pub.doi && (
                  <p className="text-sm">
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-navy)] hover:text-[var(--color-gold)]"
                    >
                      DOI: {pub.doi}
                    </a>
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Profiles */}
      <section className="section bg-[var(--color-warm-white)]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-6">Academic Profiles</h2>
          <div className="accent-line mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://scholar.google.com/citations?user=vdeRyxkAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 border border-[var(--color-border)] hover:border-[var(--color-gold)] transition-colors no-underline group"
            >
              <h3 className="font-bold text-[var(--color-navy)] group-hover:text-[var(--color-gold)] mb-2">
                Google Scholar
              </h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                View citations and metrics
              </p>
            </a>

            <a
              href="https://oxford.academia.edu/AndrewEdwards"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 border border-[var(--color-border)] hover:border-[var(--color-gold)] transition-colors no-underline group"
            >
              <h3 className="font-bold text-[var(--color-navy)] group-hover:text-[var(--color-gold)] mb-2">
                Academia.edu
              </h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                Download papers and follow research
              </p>
            </a>

            <a
              href="https://orcid.org/0000-0002-7173-7355"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 border border-[var(--color-border)] hover:border-[var(--color-gold)] transition-colors no-underline group"
            >
              <h3 className="font-bold text-[var(--color-navy)] group-hover:text-[var(--color-gold)] mb-2">
                ORCID
              </h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                0000-0002-7173-7355
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

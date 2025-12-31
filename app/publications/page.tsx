import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Academic publications by Dr. Andrew David Edwards on money, capitalism, and the American Revolution.",
};

const publications = [
  {
    type: "Book",
    title: "Money and the Making of the American Revolution",
    venue: "Princeton University Press",
    year: "2025",
    description:
      "A groundbreaking reinterpretation of the American Revolution as fundamentally a monetary conflict.",
    link: "https://press.princeton.edu/books/hardcover/9780691200262/money-and-the-making-of-the-american-revolution",
  },
  {
    type: "Article",
    title: "Grenville's Silver Hammer: The Problem of Money in the Stamp Act Crisis",
    venue: "Journal of American History",
    year: "2017",
    volume: "Vol. 104, Issue 2, pp. 337–362",
    doi: "10.1093/jahist/jax172",
    description:
      "Demonstrates how Parliament's insistence on silver payments created an impossible paradox—a law that made the operation of law impossible—providing a new explanation for colonial resistance to the Stamp Act.",
  },
  {
    type: "Article",
    title: "The American Revolution and Christine Desan's New History of Money",
    venue: "Law & Social Inquiry",
    year: "2017",
    doi: "10.1111/lsi.12224",
    description:
      "A review essay examining how Desan's Making Money intervenes in debates over money's origins while demonstrating its analytical tools for understanding the American Revolution's role in capitalism's expansion.",
  },
  {
    type: "Article",
    title: "The Era of Chinese Global Hegemony: Denaturalizing Money in the Early Modern World",
    venue: "L'Atelier du Centre de recherches historiques",
    year: "2018",
    volume: "No. 18",
    coauthors: "With Fabian Steininger and Andrea Giorgio Tosato",
    link: "https://journals.openedition.org/acrh/8076",
    description:
      "Argues that silver's 'natural' status as money was an ideological effect of Chinese domination of the early modern global monetary system.",
    openAccess: true,
  },
  {
    type: "Article",
    title: "Capitalism In Global History",
    venue: "Past & Present",
    year: "2020",
    volume: "Vol. 249, Issue 1, pp. e1–e32",
    doi: "10.1093/pastj/gtaa044",
    coauthors: "With Peter Hill and Juan Neves-Sarriegui",
    description:
      "Introduction to a curated virtual issue exploring intersections between global history and the history of capitalism.",
  },
];

export default function PublicationsPage() {
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
            {publications.map((pub, index) => (
              <article
                key={index}
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

                <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                  {pub.description}
                </p>

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

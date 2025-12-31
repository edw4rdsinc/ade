import Link from "next/link";

const socialLinks = [
  {
    name: "Twitter/X",
    href: "https://twitter.com/Historicaecon",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Google Scholar",
    href: "https://scholar.google.com/citations?user=vdeRyxkAAAAJ",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
      </svg>
    ),
  },
  {
    name: "ORCID",
    href: "https://orcid.org/0000-0002-7173-7355",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.684 3.466h1.369v10.209H6.685V7.844zm3.857 0h3.7c3.7 0 5.378 2.513 5.378 5.1 0 2.897-2.034 5.109-5.456 5.109h-3.622V7.844zm1.369 1.2v7.809h2.194c2.784 0 4.097-1.547 4.097-3.909 0-2.231-1.313-3.9-4.019-3.9h-2.272z" />
      </svg>
    ),
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white font-[family-name:var(--font-playfair)]">
              Dr. Andrew David Edwards
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lecturer in Early American History at the University of St Andrews.
              Historian of money, capitalism, and the American Revolution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white font-[family-name:var(--font-playfair)]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/book"
                  className="text-gray-300 hover:text-[var(--color-gold)] transition-colors no-underline"
                >
                  New Book
                </Link>
              </li>
              <li>
                <Link
                  href="/speaking"
                  className="text-gray-300 hover:text-[var(--color-gold)] transition-colors no-underline"
                >
                  Speaking Inquiries
                </Link>
              </li>
              <li>
                <Link
                  href="/publications"
                  className="text-gray-300 hover:text-[var(--color-gold)] transition-colors no-underline"
                >
                  Publications
                </Link>
              </li>
              <li>
                <a
                  href="https://www.st-andrews.ac.uk/history/people/ade3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[var(--color-gold)] transition-colors no-underline"
                >
                  University Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white font-[family-name:var(--font-playfair)]">
              Connect
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              <a
                href="mailto:ade3@st-andrews.ac.uk"
                className="hover:text-[var(--color-gold)] transition-colors no-underline"
              >
                ade3@st-andrews.ac.uk
              </a>
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[var(--color-gold)] transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Andrew David Edwards. All rights reserved.</p>
            <p>
              School of History, University of St Andrews
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

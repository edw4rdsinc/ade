export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andrew David Edwards",
    givenName: "Andrew",
    familyName: "Edwards",
    honorificPrefix: "Dr.",
    jobTitle: "Lecturer in Early American History",
    worksFor: {
      "@type": "EducationalOrganization",
      name: "University of St Andrews",
      url: "https://www.st-andrews.ac.uk",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Princeton University",
      },
      {
        "@type": "EducationalOrganization",
        name: "Columbia University",
      },
    ],
    url: "https://andrewdavidedwards.com",
    sameAs: [
      "https://twitter.com/Historicaecon",
      "https://scholar.google.com/citations?user=vdeRyxkAAAAJ",
      "https://orcid.org/0000-0002-7173-7355",
      "https://oxford.academia.edu/AndrewEdwards",
      "https://www.st-andrews.ac.uk/history/people/ade3/",
    ],
    email: "ade3@st-andrews.ac.uk",
    knowsAbout: [
      "American Revolution",
      "History of Money",
      "Economic History",
      "History of Capitalism",
      "Early American History",
    ],
    description:
      "Historian of Early America, capitalism, and money. Author of Money and the Making of the American Revolution (Princeton University Press).",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BookJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Money and the Making of the American Revolution",
    author: {
      "@type": "Person",
      name: "Andrew David Edwards",
      url: "https://andrewdavidedwards.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Princeton University Press",
      url: "https://press.princeton.edu",
    },
    isbn: "9780691200262",
    numberOfPages: 360,
    datePublished: "2026-01-27",
    bookFormat: "https://schema.org/Hardcover",
    inLanguage: "en",
    url: "https://press.princeton.edu/books/hardcover/9780691200262/money-and-the-making-of-the-american-revolution",
    description:
      "A groundbreaking reinterpretation of the American Revolution as fundamentally a monetary conflict. Edwards argues that colonists resisted British control over currency creation and monetary policy, seeking to protect their ability to make their own money.",
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Christine Desan",
          affiliation: "Harvard Law School",
        },
        reviewBody:
          "A brilliant history that opens money and its making to view.",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Eliga Gould",
        },
        reviewBody:
          "One of the most important recent books on the coming of the American Revolution.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dr. Andrew David Edwards",
    url: "https://andrewdavidedwards.com",
    description:
      "Official website of Dr. Andrew David Edwards, historian of Early America, capitalism, and money.",
    author: {
      "@type": "Person",
      name: "Andrew David Edwards",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

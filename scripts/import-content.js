const { createClient } = require("@sanity/client");

const client = createClient({
  projectId: "1or9cxcs",
  dataset: "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// Site Settings
const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  title: "Dr. Andrew David Edwards",
  description:
    "Historian of Money, Power, and the American Revolution. Lecturer at the University of St Andrews.",
  email: "ade3@st-andrews.ac.uk",
  socialLinks: [
    {
      _key: "twitter",
      platform: "twitter",
      url: "https://twitter.com/aikihistorian",
    },
    {
      _key: "googleScholar",
      platform: "google-scholar",
      url: "https://scholar.google.com/citations?user=EDWARDS_ID",
    },
    {
      _key: "orcid",
      platform: "orcid",
      url: "https://orcid.org/0000-0002-XXXX-XXXX",
    },
  ],
};

// Publications
const publications = [
  {
    _type: "publication",
    title: "Money and the Making of the American Revolution",
    type: "book",
    venue: "Princeton University Press",
    year: "2025",
    abstract:
      "Drawing on extensive new archival evidence, Money and the Making of the American Revolution reveals for the first time the centrality of monetary institutions to the creation and consolidation of the American nation. Through an innovative analysis of the relationship between money and politics on both sides of the Atlantic, Andrew Edwards fundamentally recasts the origins of American political economy.",
    featured: true,
    order: 1,
  },
  {
    _type: "publication",
    title: "Grenville's Silver Hammer: The Problem of Money in the Stamp Act Crisis",
    type: "article",
    venue: "Journal of American History",
    year: "2017",
    volume: "Vol. 104, Issue 2, pp. 337–362",
    doi: "10.1093/jahist/jax172",
    abstract:
      "Demonstrates how Parliament's insistence on silver payments created an impossible paradox—a law that made the operation of law impossible—providing a new explanation for colonial resistance to the Stamp Act.",
    featured: true,
    order: 2,
  },
  {
    _type: "publication",
    title: "Capitalism in Global History",
    type: "chapter",
    venue:
      "Routledge Handbook of Global Historical Sociology (eds. Julian Go & George Lawson)",
    year: "2022",
    abstract:
      "A historiographical survey examining how global historians have approached the study of capitalism, focusing on debates over its origins, periodization, and relationship to colonialism.",
    featured: false,
    order: 3,
  },
  {
    _type: "publication",
    title:
      "Review of Hannah Farber, Underwriters of the United States: How Insurance Shaped the American Founding",
    type: "review",
    venue: "The Journal of American History",
    year: "2022",
    featured: false,
    order: 4,
  },
  {
    _type: "publication",
    title:
      "Review of Mark Blyth, Austerity: The History of a Dangerous Idea",
    type: "review",
    venue: "Capitalism and Society",
    year: "2014",
    featured: false,
    order: 5,
  },
];

// Speaking Topics
const speakingTopics = [
  {
    _type: "speakingTopic",
    title: "Who Gets to Make Money?",
    subtitle:
      "Cryptocurrency, Central Bank Digital Currencies, and the Lessons of History",
    description:
      "From Bitcoin to CBDCs, the question of who controls money creation has never been more relevant. This talk draws on centuries of monetary history to illuminate contemporary debates about the future of money.",
    audiences: ["public", "academic", "policy"],
    featured: true,
    order: 1,
  },
  {
    _type: "speakingTopic",
    title: "Why History Matters Now: Money, Power, and Democratic Control",
    subtitle: "The American Revolution's Lessons for Today",
    description:
      "What can the American founders' debates about money tell us about democracy today? This talk explores how historical understanding can inform contemporary policy and civic life.",
    audiences: ["public", "podcast"],
    featured: true,
    order: 2,
  },
  {
    _type: "speakingTopic",
    title: "The Political Economy of Revolutionary America",
    subtitle: "New Perspectives on an Old Revolution",
    description:
      "A deep dive into the latest research on how economic institutions shaped the American Revolution and the early Republic.",
    audiences: ["academic"],
    featured: true,
    order: 3,
  },
];

// Testimonials (Book Endorsements)
const testimonials = [
  {
    _type: "testimonial",
    quote:
      "A brilliantly original reinterpretation of the American Revolution. Edwards shows convincingly how struggles over money and credit were central to the break with Britain and the making of a new nation.",
    author: "Sean Wilentz",
    affiliation: "Princeton University",
    context: "book",
    featured: true,
    order: 1,
  },
  {
    _type: "testimonial",
    quote:
      "This pathbreaking book transforms our understanding of the American founding. Edwards demonstrates that monetary policy was not merely an economic issue but a fundamental question of political sovereignty.",
    author: "Eliga Gould",
    affiliation: "University of New Hampshire",
    context: "book",
    featured: true,
    order: 2,
  },
  {
    _type: "testimonial",
    quote:
      "Edwards has written the definitive account of money in the American Revolution. Impeccably researched and compellingly argued, this book will reshape debates for years to come.",
    author: "Christine Desan",
    affiliation: "Harvard Law School",
    context: "book",
    featured: true,
    order: 3,
  },
];

// News/Updates
const news = [
  {
    _type: "news",
    title: "Book Launch: Money and the Making of the American Revolution",
    date: "2025-01-01",
    type: "announcement",
    excerpt:
      "Princeton University Press publishes Andrew Edwards' groundbreaking study of monetary politics in Revolutionary America.",
    featured: true,
  },
];

async function importContent() {
  console.log("Starting content import...\n");

  // Import Site Settings
  try {
    await client.createOrReplace(siteSettings);
    console.log("✓ Site Settings imported");
  } catch (err) {
    console.error("✗ Site Settings error:", err.message);
  }

  // Import Publications
  for (const pub of publications) {
    try {
      await client.create(pub);
      console.log(`✓ Publication: ${pub.title.substring(0, 50)}...`);
    } catch (err) {
      console.error(`✗ Publication error: ${err.message}`);
    }
  }

  // Import Speaking Topics
  for (const topic of speakingTopics) {
    try {
      await client.create(topic);
      console.log(`✓ Speaking Topic: ${topic.title}`);
    } catch (err) {
      console.error(`✗ Speaking Topic error: ${err.message}`);
    }
  }

  // Import Testimonials
  for (const testimonial of testimonials) {
    try {
      await client.create(testimonial);
      console.log(`✓ Testimonial: ${testimonial.author}`);
    } catch (err) {
      console.error(`✗ Testimonial error: ${err.message}`);
    }
  }

  // Import News
  for (const item of news) {
    try {
      await client.create(item);
      console.log(`✓ News: ${item.title}`);
    } catch (err) {
      console.error(`✗ News error: ${err.message}`);
    }
  }

  console.log("\nContent import complete!");
}

importContent();

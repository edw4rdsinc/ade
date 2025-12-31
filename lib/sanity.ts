import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}

// GROQ Queries
export const queries = {
  // Site Settings
  siteSettings: `*[_type == "siteSettings"][0]{
    title,
    description,
    authorPhoto,
    email,
    phone,
    address,
    socialLinks
  }`,

  // Publications
  allPublications: `*[_type == "publication"] | order(order asc, year desc){
    _id,
    title,
    type,
    venue,
    year,
    volume,
    coauthors,
    doi,
    link,
    pdfUrl,
    openAccess,
    abstract,
    featured
  }`,

  featuredPublications: `*[_type == "publication" && featured == true] | order(order asc, year desc){
    _id,
    title,
    type,
    venue,
    year,
    link
  }`,

  // Speaking Topics
  allSpeakingTopics: `*[_type == "speakingTopic" && featured == true] | order(order asc){
    _id,
    title,
    subtitle,
    description,
    audiences
  }`,

  // Testimonials
  allTestimonials: `*[_type == "testimonial" && featured == true] | order(order asc){
    _id,
    quote,
    author,
    affiliation,
    context
  }`,

  bookTestimonials: `*[_type == "testimonial" && context == "book" && featured == true] | order(order asc){
    _id,
    quote,
    author,
    affiliation
  }`,

  // News
  recentNews: `*[_type == "news"] | order(date desc)[0...5]{
    _id,
    title,
    date,
    type,
    excerpt,
    externalLink,
    featured
  }`,

  featuredNews: `*[_type == "news" && featured == true] | order(date desc)[0...3]{
    _id,
    title,
    date,
    type,
    excerpt,
    externalLink
  }`,

  // Page by slug
  pageBySlug: (slug: string) => `*[_type == "page" && slug.current == "${slug}"][0]{
    title,
    content,
    seo
  }`,
};

// Helper to fetch data
export async function sanityFetch<T>(query: string): Promise<T> {
  return client.fetch(query);
}

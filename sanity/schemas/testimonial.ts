import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial/Endorsement",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "affiliation",
      title: "Affiliation/Title",
      type: "string",
      description: "e.g., Harvard Law School",
    }),
    defineField({
      name: "context",
      title: "Context",
      type: "string",
      options: {
        list: [
          { title: "Book Endorsement", value: "book" },
          { title: "Speaking", value: "speaking" },
          { title: "Teaching", value: "teaching" },
          { title: "General", value: "general" },
        ],
      },
      initialValue: "book",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      quote: "quote",
      author: "author",
    },
    prepare({ quote, author }) {
      return {
        title: author,
        subtitle: quote?.substring(0, 60) + "...",
      };
    },
  },
});

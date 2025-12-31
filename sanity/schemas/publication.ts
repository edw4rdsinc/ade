import { defineType, defineField } from "sanity";

export const publication = defineType({
  name: "publication",
  title: "Publication",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Book", value: "book" },
          { title: "Journal Article", value: "article" },
          { title: "Book Chapter", value: "chapter" },
          { title: "Working Paper", value: "working-paper" },
          { title: "Review Essay", value: "review" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "venue",
      title: "Journal/Publisher",
      type: "string",
      description: "e.g., Journal of American History, Princeton University Press",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "volume",
      title: "Volume/Issue",
      type: "string",
      description: "e.g., Vol. 104, Issue 2, pp. 337-362",
    }),
    defineField({
      name: "coauthors",
      title: "Co-authors",
      type: "string",
      description: "e.g., With Peter Hill and Juan Neves-Sarriegui",
    }),
    defineField({
      name: "doi",
      title: "DOI",
      type: "string",
      description: "e.g., 10.1093/jahist/jax172",
    }),
    defineField({
      name: "link",
      title: "External Link",
      type: "url",
      description: "Link to publication or publisher page",
    }),
    defineField({
      name: "pdfUrl",
      title: "PDF URL",
      type: "url",
      description: "Direct link to PDF if publicly available",
    }),
    defineField({
      name: "openAccess",
      title: "Open Access",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "abstract",
      title: "Abstract/Description",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
  ],
  orderings: [
    {
      title: "Year (Newest)",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "venue",
      year: "year",
    },
    prepare({ title, subtitle, year }) {
      return {
        title,
        subtitle: `${subtitle} (${year})`,
      };
    },
  },
});

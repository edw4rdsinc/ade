import { defineType, defineField } from "sanity";

export const news = defineType({
  name: "news",
  title: "News & Updates",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Media Appearance", value: "media" },
          { title: "Talk/Lecture", value: "talk" },
          { title: "Publication", value: "publication" },
          { title: "Award/Honor", value: "award" },
          { title: "Announcement", value: "announcement" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Short Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "content",
      title: "Full Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "externalLink",
      title: "External Link",
      type: "url",
      description: "Link to media article, video, etc.",
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Date (Newest)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      type: "type",
    },
    prepare({ title, date, type }) {
      return {
        title,
        subtitle: `${type} - ${date}`,
      };
    },
  },
});

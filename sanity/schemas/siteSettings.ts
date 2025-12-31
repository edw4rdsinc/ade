import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      initialValue: "Dr. Andrew David Edwards",
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "authorPhoto",
      title: "Author Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
      initialValue: "ade3@st-andrews.ac.uk",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "twitter", title: "Twitter/X", type: "url" },
        { name: "googleScholar", title: "Google Scholar", type: "url" },
        { name: "orcid", title: "ORCID", type: "url" },
        { name: "academia", title: "Academia.edu", type: "url" },
        { name: "universityProfile", title: "University Profile", type: "url" },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "authorPhoto",
    },
  },
});

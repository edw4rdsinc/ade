import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "andrew-edwards",
  title: "Andrew David Edwards",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Site Settings (singleton)
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            // Publications
            S.documentTypeListItem("publication").title("Publications"),
            // Speaking Topics
            S.documentTypeListItem("speakingTopic").title("Speaking Topics"),
            // Testimonials
            S.documentTypeListItem("testimonial").title("Testimonials"),
            // News
            S.documentTypeListItem("news").title("News & Updates"),
            S.divider(),
            // Pages
            S.documentTypeListItem("page").title("Pages"),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});

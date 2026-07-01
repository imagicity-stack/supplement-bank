/**
 * Sanity Studio configuration.
 *
 * This powers the embedded admin portal at `/studio`, where the client can
 * add / edit / delete products, categories and site settings — no code needed.
 */
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schema } from "@/sanity/schemaTypes";
import { structure } from "@/sanity/structure";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title: "Supplement Bank Admin",
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision lets you run GROQ queries against your dataset from the Studio.
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});

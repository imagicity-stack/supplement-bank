import { defineCliConfig } from "sanity/cli";

/**
 * Config for the `sanity` CLI (used for deploying the Studio, managing
 * datasets, importing data, etc). Not required for `npm run dev`.
 *
 * Reads directly from the environment so it works without path aliases.
 */
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineCliConfig({
  api: { projectId, dataset },
  autoUpdates: true,
});

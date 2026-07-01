import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "@/sanity/env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // `useCdn: true` is great for production reads; we keep it on for the fast,
  // cached catalogue experience. Studio writes bypass this automatically.
  useCdn: true,
  perspective: "published",
});

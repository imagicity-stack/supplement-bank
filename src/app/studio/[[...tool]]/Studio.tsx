"use client";

/**
 * Client-only wrapper for the Sanity Studio.
 *
 * The Studio (and everything `sanity.config` pulls in) relies on React context
 * and browser APIs, so it must live in a Client Component. Keeping the config
 * import here prevents the server from evaluating it during the build.
 */
import { NextStudio } from "next-sanity/studio";

import config from "../../../../sanity.config";

export default function Studio() {
  return <NextStudio config={config} />;
}

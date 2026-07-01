/**
 * Sanity Studio — the admin portal.
 *
 * Lives at /studio. This is where the client adds, edits, deletes and manages
 * products, categories and site settings without touching any code.
 *
 * The actual Studio is rendered by a Client Component (`Studio.tsx`) so the
 * server never evaluates the Studio config at build time.
 */
import Studio from "./Studio";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <Studio />;
}

import type { StructureResolver } from "sanity/structure";

/**
 * Custom Studio desk structure.
 * - "Site Settings" is a singleton (one editable document, no list).
 * - Products & Categories are normal document lists.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Supplement Bank")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Site Settings"),
        ),
      S.divider(),
      S.documentTypeListItem("product").title("Products"),
      S.documentTypeListItem("category").title("Categories"),
    ]);

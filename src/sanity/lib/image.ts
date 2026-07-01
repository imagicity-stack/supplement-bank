import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "@/sanity/env";

const builder = createImageUrlBuilder({ projectId, dataset });

/**
 * Turn a Sanity image reference into a URL builder.
 * Usage: urlForImage(image).width(800).height(800).url()
 */
export function urlForImage(source: Image) {
  return builder.image(source).auto("format").fit("max");
}

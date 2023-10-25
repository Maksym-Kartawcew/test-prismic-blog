import * as prismic from "@prismicio/client";

export function getExcerpt(slices) {
  const text = slices
    .filter((slice) => slice.slice_type === "text")
    .map((slice) => prismic.asText(slice.primary.text))
    .join(" ");
  return text;
}

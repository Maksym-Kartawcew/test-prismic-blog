import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { getExcerpt } from "@/lib/getExcerpt";
import { findFirstImage } from "@/lib/findFirstImage";
import { dateFormatter } from "@/lib/dateFormatter";

import { Heading } from "./Heading";

export function Article({ article }) {
  const featuredImage =
    (prismic.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices);
  const date = prismic.asDate(
    article.data.publishDate || article.first_publication_date
  );
  const excerpt = getExcerpt(article.data.slices);

  return (
    <li>
      <PrismicNextLink document={article}>
        <div>
          {prismic.isFilled.image(featuredImage) && (
            <PrismicNextImage field={featuredImage}/>
          )}
        </div>
      </PrismicNextLink>
      <div>
        <Heading>
          <PrismicNextLink document={article}>
            <PrismicText field={article.data.title} />
          </PrismicNextLink>
        </Heading>
        <p>{dateFormatter.format(date)}</p>
        {excerpt && <p>{excerpt}</p>}
      </div>
    </li>
  );
}

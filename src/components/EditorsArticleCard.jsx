import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { getExcerpt } from "@/lib/getExcerpt";
import { findFirstImage } from "@/lib/findFirstImage";
import { dateFormatter } from "@/lib/dateFormatter";
import {
  ArticleImg,
  CardTitle,
  CardContent,
  CardDate,
  EditorsCard,
} from "./Components.styled";

export function EditorsArticleCard({ article }) {
  const featuredImage =
    (prismic.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices);
  const date = prismic.asDate(
    article.data.publishDate || article.first_publication_date
  );
  const excerpt = getExcerpt(article.data.slices);

  return (
    <EditorsCard>
      <PrismicNextLink document={article}>
        <ArticleImg>
          {prismic.isFilled.image(featuredImage) && (
            <PrismicNextImage field={featuredImage} />
          )}
        </ArticleImg>
      </PrismicNextLink>
      <CardContent>
        <CardDate>{dateFormatter.format(date)}</CardDate>
        <PrismicNextLink document={article}>
          <CardTitle>
            <PrismicText field={article.data.title} />
          </CardTitle>
        </PrismicNextLink>

        {excerpt && <p>{excerpt}</p>}
      </CardContent>
    </EditorsCard>
  );
}

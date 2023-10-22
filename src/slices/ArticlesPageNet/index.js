/**
 * @typedef {import("@prismicio/client").Content.ArticlesPageNetSlice} ArticlesPageNetSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticlesPageNetSlice>} ArticlesPageNetProps
 * @param {ArticlesPageNetProps}
 */

import { createClient } from "@/prismicio";
import { Bounded } from "@/components/Bounded";
import { Article } from "@/components/Article";
import {
  ArticlesNet,
  HomeMainSection,
  SectionTitle,
} from "../../components/Components.styled.js";

export default async function ArticlesPageNet({ slice }) {
  const client = createClient();

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <HomeMainSection>
        <Bounded>
          <SectionTitle>All latest Topics</SectionTitle>

          <ArticlesNet>
            {articles.map((article) => (
              <Article key={article.id} article={article} />
            ))}
          </ArticlesNet>
        </Bounded>
      </HomeMainSection>
    </section>
  );
}

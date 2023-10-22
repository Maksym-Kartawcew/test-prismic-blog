/**
 * @typedef {import("@prismicio/client").Content.ArticlesPageNetSlice} ArticlesPageNetSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticlesPageNetSlice>} ArticlesPageNetProps
 * @param {ArticlesPageNetProps}
 */

import { createClient } from "@/prismicio";
import { Bounded } from "./Bounded";
import { EditorsArticleCard } from "./EditorsArticleCard.jsx";
import { EditorsPickNet, SectionTitle } from "./Components.styled.js";

export async function EditorsPick({ slice }) {
  const client = createClient();
  const articles = await client.getAllByType("article");

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffleArray(articles);

  return (
    <Bounded>
      <SectionTitle>Editor`s Pick</SectionTitle>

      <EditorsPickNet>
        {articles.map((article) => (
          <EditorsArticleCard key={article.id} article={article} />
        ))}
      </EditorsPickNet>
    </Bounded>
  );
}

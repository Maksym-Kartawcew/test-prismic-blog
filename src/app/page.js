import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Article } from "@/components/Article";
import { SubscribeForm } from "@/components/SubscribeForm.jsx";
import { EditorsPick } from "@/components/EditorsPick.jsx";
import {
  ArticlesHomeNet,
  HomeMainSection,
  SectionTitle,
} from "../components/Components.styled.js";

export async function generateMetadata() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: prismic.asText(settings.data.name),
  };
}

export default async function Index() {
  const client = createClient();

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return (
    <Layout navigation={navigation} settings={settings}>
      <HomeMainSection>
        <Bounded>
          <SectionTitle> Popular topics</SectionTitle>
          <ArticlesHomeNet>
            {articles.map((article) => (
              <Article key={article.id} article={article} />
            ))}
          </ArticlesHomeNet>
        </Bounded>
      </HomeMainSection>
      <SubscribeForm />
      <HomeMainSection>
        <EditorsPick />
      </HomeMainSection>
    </Layout>
  );
}

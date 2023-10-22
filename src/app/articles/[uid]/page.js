import Link from "next/link";
import * as prismic from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { EditorsArticleCard } from "@/components/EditorsArticleCard";
import {
  EditorsPickNet,
  SectionTitle,
  HomeMainSection,
  MainArticle,
  CardDate,
} from "../../../components/Components.styled.js";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export async function generateMetadata({ params }) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const article = await client
    .getByUID("article", params.uid)
    .catch(() => notFound());

  return {
    title: `${prismic.asText(article.data.title)} | ${prismic.asText(
      settings.data.name
    )}`,
    description: article.data.meta_description,
    openGraph: {
      title: article.data.meta_title,
      images: [
        {
          url: article.data.meta_image.url,
        },
      ],
    },
  };
}

export default async function Page({ params }) {
  const client = createClient();

  const article = await client
    .getByUID("article", params.uid)
    .catch(() => notFound());
  const latestArticles = await client.getAllByType("article", {
    limit: 3,
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  const date = prismic.asDate(
    article.data.publishDate || article.first_publication_date
  );

  return (
    <Layout navigation={navigation} settings={settings}>
      <HomeMainSection>
        <Bounded>
          <Link href="/all-articles">&larr; Back to articles</Link>
        </Bounded>

        <MainArticle>
          <Bounded className="pb-0">
            <SectionTitle>
              <PrismicText field={article.data.title} />
            </SectionTitle>
            <CardDate>{dateFormatter.format(date)}</CardDate>
          </Bounded>
          <SliceZone slices={article.data.slices} components={components} />
        </MainArticle>

        <Bounded>
          <SectionTitle>Latests Articles</SectionTitle>
          <EditorsPickNet>
            {latestArticles.map((article) => (
              <EditorsArticleCard key={article.id} article={article} />
            ))}
          </EditorsPickNet>
        </Bounded>
      </HomeMainSection>
    </Layout>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const articles = await client.getAllByType("article");

  return articles.map((article) => {
    return { uid: article.uid };
  });
}

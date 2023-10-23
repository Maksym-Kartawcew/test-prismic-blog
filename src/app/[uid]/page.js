import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";
import { HomeMainSection } from "../../components/Components.styled.js";

export async function generateMetadata({ params }) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return {
    title: `${prismic.asText(page.data.title)} | ${prismic.asText(
      settings.data.name
    )}`,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title,
      images: [
        {
          url: page.data.meta_image.url,
        },
      ],
    },
  };
}

export default async function Page({ params }) {
  const client = createClient();

  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return (
    <Layout navigation={navigation} settings={settings}>
      <HomeMainSection>
        <SliceZone slices={page.data.slices} components={components} />
      </HomeMainSection>
    </Layout>
  );
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}

import * as prismic from "@prismicio/client";
import { createClient } from "../../src/prismicio";
import { PrismicText } from "@prismicio/react";
import {
  HeroDescription,
  HeroHeading,
  HeroWrapper,
  HeroBackground,
} from "./Components.styled";
import { Bounded } from "./Bounded";

export async function  Hero() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  const backgroundURL = settings.data.profilePicture.url;

  return (
    <HeroBackground backgroundimage={backgroundURL}>
      <Bounded>
        <HeroWrapper>
          <HeroHeading>
          <PrismicText field={settings.data.name} />
          </HeroHeading>

          <HeroDescription>
          <PrismicText field={settings.data.blogdate} />
          <PrismicText field={settings.data.description} />
          </HeroDescription>
        </HeroWrapper>
      </Bounded>
    </HeroBackground>
  );
}

"use client";
// import * as prismic from "@prismicio/client";
import { createClient } from "../../src/prismicio";
import { PrismicText, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { HeroDescription, HeroHeading, HeroWrapper } from "./Components.styled";
import { Bounded } from "./Bounded";
import styled from "styled-components";

const HeroBackground = styled.section`
  background: url(${(props) => props.backgroundimage}) no-repeat center center;
  background-size: 1440px;
  text-align: center;
  color: #fff;
  margin-top: -80px;
  padding-top: 220px;
  padding-bottom: 150px;
`;

export async function Hero() {
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

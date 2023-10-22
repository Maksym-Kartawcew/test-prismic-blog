import { PrismicText } from "@prismicio/react";
import { createClient } from "../prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import { Bounded } from "./Bounded";
import {
  SubscribeBackground,
  SubscribeHeading,
  SubscribeText,
  SubscribeInput,
} from "./Components.styled";

export async function SubscribeForm() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  const backgroundURL = settings.data.subscribePicture.url;

  return (
    <SubscribeBackground backgroundimage={backgroundURL}>
      <Bounded>
        <SubscribeHeading>Subscribe!</SubscribeHeading>
        <div>
          <form>
            <SubscribeText>
              <PrismicText field={settings.data.newsletterDescription} />
            </SubscribeText>

            <div>
              <SubscribeText>Email address:</SubscribeText>
              <SubscribeInput
                name="email"
                type="email"
                placeholder="jane.doe@example.com"
                required={true}
              />
              <SubscribeText>
                <button type="submit">
                  Submit <span>&rarr;</span>
                </button>
              </SubscribeText>
            </div>
          </form>
        </div>
      </Bounded>
    </SubscribeBackground>
  );
}

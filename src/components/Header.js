import Link from "next/link";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { Bounded } from "./Bounded";
import {
  NavList,
  HeaderWrapper,
  Logo,
  SocialList,
  Navigation,
  NavItem,
  SocIcon,
  HeaderBackground,
} from "./Components.styled";
import { Facebook } from "../Icons/Facebook.jsx";
import { Twitter } from "../Icons/Twitter.jsx";
import { Instagram } from "../Icons/Instagram.jsx";
import { Pinterest } from "../Icons/Pinterest.jsx";

export const Header = ({ navigation }) => {
  return (
    <HeaderBackground>
      <Bounded>
        <HeaderWrapper>
          <Logo>
            <NavItem>
              <Link href="/">
                <PrismicText field={navigation.data.homepageLabel} />
              </Link>
            </NavItem>
          </Logo>

          <Navigation>
            <NavList>
              {navigation.data?.links.map((item) => (
                <NavItem key={prismic.asText(item.label)}>
                  <PrismicNextLink field={item.link}>
                    <PrismicText field={item.label} />
                  </PrismicNextLink>
                </NavItem>
              ))}
            </NavList>

            <SocialList>
              <SocIcon href="">
                <Facebook />
              </SocIcon>
              <SocIcon href="">
                <Twitter />
              </SocIcon>
              <SocIcon href="">
                <Instagram />
              </SocIcon>
              <SocIcon href="">
                <Pinterest />
              </SocIcon>
            </SocialList>
          </Navigation>
        </HeaderWrapper>
      </Bounded>
    </HeaderBackground>
  );
};

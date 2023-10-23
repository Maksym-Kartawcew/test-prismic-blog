import Link from "next/link";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { Bounded } from "./Bounded";
import { NavList, HeaderWrapper, Logo, SocialList } from "./Components.styled";
import { Facebook } from "../Icons/Facebook.jsx";
import { Twitter } from "../Icons/Twitter.jsx";
import { Instagram } from "../Icons/Instagram.jsx";
import { Pinterest } from "../Icons/Pinterest.jsx";

const NavItem = ({ children }) => {
  return <li>{children}</li>;
};

export const Header = ({ navigation }) => {
  return (
    <Bounded>
      <HeaderWrapper>
        <Logo>
          <NavItem>
            <Link href="/">
              <PrismicText field={navigation.data.homepageLabel} />
            </Link>
          </NavItem>
        </Logo>

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
          <li>
            <Facebook />
          </li>
          <li>
            <Twitter />
          </li>
          <li>
            <Instagram />
          </li>
          <li>
            <Pinterest />
          </li>
        </SocialList>
      </HeaderWrapper>
    </Bounded>
  );
};

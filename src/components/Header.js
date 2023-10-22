import Link from "next/link";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { Bounded } from "./Bounded";
import { NavList, HeaderWrapper } from "./Components.styled";

const NavItem = ({ children }) => {
  return <li>{children}</li>;
};

export const Header = ({ navigation }) => {
  return (
    <Bounded>
      <HeaderWrapper>
        <NavItem>
          <Link href="/">
            <PrismicText field={navigation.data.homepageLabel} />
          </Link>
        </NavItem>

        <NavList>
          {navigation.data?.links.map((item) => (
            <NavItem key={prismic.asText(item.label)}>
              <PrismicNextLink field={item.link}>
                <PrismicText field={item.label} />
              </PrismicNextLink>
            </NavItem>
          ))}
        </NavList>
      </HeaderWrapper>
    </Bounded>
  );
};

import Link from "next/link";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import {
  FooterContainer,
  Logo,
  SocialList,
  FooterWrapper,
  NavList,
} from "./Components.styled";
import { Facebook } from "../Icons/Facebook.jsx";
import { Twitter } from "../Icons/Twitter.jsx";
import { Instagram } from "../Icons/Instagram.jsx";
import { Pinterest } from "../Icons/Pinterest.jsx";

const NavItem = ({ children }) => {
  return <li>{children}</li>;
};

export const Footer = ({ navigation }) => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>
          <NavItem>
            <Link href="/">
              <PrismicText field={navigation.data.homepageLabel} />
            </Link>
          </NavItem>
        </Logo>
        <div>
          <ul>
            <h3>Contact the Publisher</h3>
            <li>
              {" "}
              <a href="mailto:maxkartavtsev@gmail.com">
                maxkartavtsev@gmail.com
              </a>
            </li>
            <li>
              {" "}
              <a href="tel:+48791396863">+48 791 396 863</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>Explorate</h3>

            {navigation.data?.links.map((item) => (
              <NavItem key={prismic.asText(item.label)}>
                <PrismicNextLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </NavItem>
            ))}
          </ul>
        </div>
        <div>
          <h3>Headquarter</h3>
          <p>191 Middleville Road, NY 1001, Sydney Australia</p>
        </div>
        <div>
          <h3>Connections</h3>
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
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

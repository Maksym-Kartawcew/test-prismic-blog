import Link from "next/link";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import {
  FooterContainer,
  Logo,
  SocialList,
  SocIcon,
  FooterWrapper,
  NavItem,
  FooterTitle,
} from "./Components.styled";
import { Facebook } from "../Icons/Facebook.jsx";
import { Twitter } from "../Icons/Twitter.jsx";
import { Instagram } from "../Icons/Instagram.jsx";
import { Pinterest } from "../Icons/Pinterest.jsx";
import { Bounded } from "./Bounded";

export const Footer = ({ navigation }) => {
  return (
    <FooterContainer>
      <Bounded>
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
              <FooterTitle>Contact the Publisher</FooterTitle>
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
              <FooterTitle>Explorate</FooterTitle>
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
            <FooterTitle>Headquarter</FooterTitle>
            <p>
              191 Middleville Road,
              <br /> NY 1001, Sydney <br />
              Australia
            </p>
          </div>
          <div>
            <SocialList>
              <FooterTitle>Connections</FooterTitle>
              <div>
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
              </div>
            </SocialList>
          </div>
        </FooterWrapper>
      </Bounded>
    </FooterContainer>
  );
};

import Link from "next/link";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

import { FooterContainer, FooterWrapper, NavList } from "./Components.styled";

const NavItem = ({ children }) => {
  return <li>{children}</li>;
};

export const Footer = ({ navigation }) => {
  return (
    <FooterContainer>
      <FooterWrapper>
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
            <NavList>
              {navigation.data?.links.map((item) => (
                <NavItem key={prismic.asText(item.label)}>
                  <PrismicNextLink field={item.link}>
                    <PrismicText field={item.label} />
                  </PrismicNextLink>
                </NavItem>
              ))}
            </NavList>
          </ul>
        </div>
        <div>
          <h3>Headquarter</h3>
          <p>191 Middleville Road, NY 1001, Sydney Australia</p>
        </div>
        <div>
          <ul>
            <h3>Connections</h3>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Pinterest</li>
          </ul>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

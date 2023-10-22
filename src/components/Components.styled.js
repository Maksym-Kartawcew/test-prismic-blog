"use client";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
`;

export const ArticlesNet = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

// Header

export const HeaderWrapper = styled.header`
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
export const NavList = styled.div`
  display: flex;
  gap: 25px;
`;
// hero
export const HeroBackground = styled.div`
  background-color: rgb(12 12 54);
  margin-top: -80px;
  height: 680px;

  padding-top: 300px;
`;

export const HeroWrapper = styled.div``;

export const HeroHeading = styled.div`
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 36px;
  font-weight: 700;
  text-align: left;
  width: 600px;
`;

export const HeroDescription = styled.div`
  display: flex;
  text-align: left;
  gap: 40px;
  width: 600px;
  color: #e5e5e5;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

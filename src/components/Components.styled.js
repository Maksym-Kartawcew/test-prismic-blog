"use client";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
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
export const Logo = styled.div`
  color: #f8f9fa;
  font-size: 20px;
  font-weight: 700;
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 25px;
`


// hero
export const HeroBackground = styled.div`
  background: url(${(props) => props.backgroundimage}) no-repeat center center;
  text-align: center;
  color: #fff;
  margin-top: -80px;
  padding-top: 220px;
  padding-bottom: 150px;
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
  font-weight: 400;
`;

// Articles homepage Net
export const HomeMainSection = styled.section`
  background: #f8f9fa;
  width: 1440px;
  padding: 0;
  margin: 0 auto;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 150px;
`;
export const SectionTitle = styled.h3`
  color: #495057;

  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const ArticlesHomeNet = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  grid-row-gap: 50px;

  & > *:nth-child(n + 9) {
    display: none;
  }
`;
export const ArticleCard = styled.div`
  height: 565px;
  width: 285px;
  background: #ffffff;
  border: 1px solid #e7e9fc;
  overflow: hidden;
  border-radius: 5px;
`;
export const CardDate = styled.p`
  color: #6c757d;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 15px;
`;
export const CardContent = styled.div`
  padding: 20px;
`;
export const CardTitle = styled.h3`
  width: 250px;
  color: #495057;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  margin-bottom: 15px;
`;
export const ArticleDescription = styled.p`
  color: #6c757d;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
export const ArticleImg = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// ArticlesPage Net
export const ArticlesNet = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  grid-row-gap: 50px;
  background: #f8f9fa;
`;

// Footer
export const FooterContainer = styled.section`
  width: 1440px;
  padding: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background: #212529;
`;
export const FooterWrapper = styled.footer`
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0px;
  display: flex;
  justify-content: space-between;
  color: #f8f9fa;
`;

// SubscribeForm
export const SubscribeBackground = styled.div`
  background: url(${(props) => props.backgroundimage}) no-repeat center center;
  text-align: center;
  color: #fff;
  padding-top: 220px;
  height: 600px;
`;
export const SubscribeHeading = styled.h2`
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 25px;
`;
export const SubscribeText = styled.p`
  text-align: center;
  gap: 20px;
  color: #e5e5e5;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 10px;
`;
export const SubscribeInput = styled.input`
  color: #495057;
  border-radius: 5px;
  padding: 5px;
  font-size: 14px;
`;

// Editors Pick
export const EditorsPickNet = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  grid-row-gap: 50px;

  & > *:nth-child(n + 4) {
    display: none;
  }
`;

export const EditorsCard = styled.div`
  height: 565px;
  width: calc(1160 / 3);
  background: #ffffff;
  border: 1px solid #e7e9fc;
  overflow: hidden;
  border-radius: 5px;
`;

export const MainArticle = styled.article`
  color: #495057;
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;

  margin-top: 25px;
  margin-bottom: 25px;

  img {
    display: block;
    margin: 0 auto;
    max-height: 700px;
    width: auto;
    border-radius: 5px;
  }
`;

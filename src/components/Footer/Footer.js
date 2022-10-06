import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCopyright,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList></LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Created By Andrew Merz <AiOutlineCopyright />
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/andrew-merz">
            <AiFillGithub size="3rem"></AiFillGithub>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/andrewmerz98/">
            <AiFillLinkedin size="3rem"></AiFillLinkedin>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

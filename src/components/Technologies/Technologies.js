import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import { BiPencil } from "react-icons/bi";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From back-end to design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />

        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with: <br /> React.JS, JavaScript, RESTful API's HTML,
            CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <IoLogoNodejs size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with: <br /> Node.JS, Express, Mongoose, MongoDB, SQL
            Databases, NoSQL Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BiPencil size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with: <br /> Figma, Miro, Material UI, Tailwind CSS, CSS
            Grid
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    name: "Phil Welsh",
    text: `"I was an Instructional Associate at General Assembly while Andrew Merz was attending. Andrew was an ideal student; completing deliverables on-time, creating impressive projects, and bringing a positive, collaborative attitude to class. He picks up concepts quickly, and knows how to find answers himself. Andrew would be a great addition to your team!"`,
  },
  {
    name: "Eric Fithian",
    text: `"Andrew is the type of student who really understands line by line how the code is working which helps make him a strong student in terms of being able to expand on what was built with stretch features as well as helping him debug errors. He worked incredibly hard throughout the cohort and continues to make enormous gains in terms of his technical skills which is why he'd be a great addition to any company."`,
  },
  {
    name: "Jacob Barton",
    text: `"I had the pleasure of taking General Assembly's Bootcamp with Andrew. His confidence, mastery of the subject matter, and charisma also make him a natural teacher. Our classmates are very comfortable asking him for advice or help with breaking down a concept. He approaches every project with an enthusiasm and passion that is infectious, and with a talent for leadership that brings even the most uneasy team into harmony."`,
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Recommendations</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.name}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My personal Portfolio
      </SectionTitle>
      <SectionText>
        Full stack software engineer with a background in business and finance.
        I am a driven self-starter, with an eye for making things look just
        right. When coding, I learn quickly, act precisely and create
        dynamically. When not coding, I love listening to music and jamming
        along.
      </SectionText>
      <div style={{ display: "flex" }}>
        <Button onClick={() => (window.location = "merz.school@gmail.com")}>
          Contact Me
        </Button>
        <Button href="../constants/Resume" download="Resume.pdf">
          {" "}
          Download Resume
        </Button>
      </div>
    </LeftSection>
  </Section>
);

export default Hero;

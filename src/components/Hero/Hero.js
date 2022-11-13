import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I am Santhosh , a Computer Science Engineer specialized in various recent trending technologies like Web development , Data science,AI,ML,Blockchain. A coder ,problem solver trying to find solutions to real world problems  using technology in a logical way by thinking outside the box


        </SectionText>
        <Button onClick={() =>window.location="https://drive.google.com/drive/folders/1th_P38KQLc7-8UL9JAb4SyYwjuGufsXE?usp=share_link"  } >Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
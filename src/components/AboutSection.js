import React from 'react';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/perfil1.png';
import styled from 'styled-components';


const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {59+
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;


const AboutSection = () => {
    return (
        <AboutSectionStyles>
            <div className="container">
                <div className="aboutSection__left">
                    <SectionTitle
                        className="section-title"
                        subheading="Let me introduce my self "
                        heading = "About me"
                    />
                    <PText>
                    I am a Frontend developer, I consider myself a creative, proactive, organized person, eager to continue growing in the IT area.
                    With knowledge of technologies: HTML, CSS, JAVASCRIPT, REACT JS.
                    </PText>
                    <div className="aboutSection__buttons">
                        <Button
                         btnLink='/projects'
                         btnText='Works'
                        />
                        <Button
                           btnLink='/about'
                           btnText='Read More'
                           outline
                        />
                    </div>
                </div>
                <div className="aboutSection__right">
                    <img src={AboutImg} alt="aboutme" />
                </div>
            </div>
        </AboutSectionStyles>
    )
}

export default AboutSection

import React from "react";
import { Container } from "../../ui/Container/Container";
import { Slider } from "./Slider";
import { WowComponent } from '../../ui/WowComponent/WowComponent';
import styles from "./About.module.scss";

export const About = () => {
  return (
    <div className={styles.about} id='about'>
      <Container>
        <h2 className='wow animate__animated animate__backInUp'>About text</h2>
        <p className='wow animate__animated animate__backInUp'>
          Nisi ullamco tempor tempor nulla labore ad labore<br /> sit eu duis. Ut et
          esse cupidatat consequat.
        </p>
      </Container>
      <WowComponent />
      <Slider />
    </div>
  );
};

import React, { useState } from "react";
import { Container } from "../../ui/Container/Container";
import { MainImg } from "../../assets/icons/mainImg";
import { Button } from "../../ui/Button/Button";
import { Modal } from "../Modal/Modal";
import styles from "./Main.module.scss";

export const Main = () => {

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.main__wrapper}>
          <div className={styles.main__info}>
            <h1>The best<br /> fitness tracker!</h1>
            <p>
              Nisi ullamco tempor tempor nulla labore ad<br /> labore sit eu duis. Ut
              et esse cupidatat<br /> consequat ea exercitation.
            </p>
              <Button backgoundColor='#fff' handleClick={() => setModalActive(true)}>Click Me!</Button>
          </div>
          <div className={styles.main__image}>
            <MainImg />
          </div>
        </div>
      </Container>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

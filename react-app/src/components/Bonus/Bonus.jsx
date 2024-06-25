import { Button } from "../../ui/Button/Button";
import { Container } from "../../ui/Container/Container";
import { Form } from "../Form/Form";
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import styles from "./Bonus.module.scss";

export const Bonus = () => {

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={styles.bonus} id='bonus'>
      <Container>
        <div className={styles.bonus__wrapper}>
          <div className={styles.bonus__info}>
            <h2>
              Download now
              <br /> and get a bonus!
            </h2>
            <p>
              Nisi ullamco tempor tempor nulla labore
              <br /> ad labore sit eu duis. Ut et esse cupidatat
              <br /> consequat ea exercitation.
            </p>
            <div className={styles.bonus__btns}>
              <Button backgroundColor="#FA6648" color='#fff' handleClick={() => setModalActive(true)}>Click Me!</Button>
              <Button backgroundColor="#FA6648" color='#fff' handleClick={() => setModalActive(true)}>Click Me!</Button>
            </div>
          </div>
          <div className={`${styles.bonus__form} wow animate__animated animate__backInUp`}>
            <Form />
          </div>
        </div>
      </Container>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

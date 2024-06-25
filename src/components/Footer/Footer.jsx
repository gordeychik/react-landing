import { Container } from "../../ui/Container/Container";
import { Logo } from "../../assets/icons/logo";
import {Button} from '../../ui/Button/Button';
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import styles from "./Footer.module.scss";

export const Footer = () => {

  const [modalActive, setModalActive] = useState(false);

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__wrapper}>
            <a href="/"><Logo /></a>
          <ul className={styles.footer__nav}>
              <li><a href='#about'>About</a></li>
              <li><a href='#pricing'>Pricing</a></li>
              <li><a href='#bonus'>Bonus</a></li>
          </ul>
          <div className={styles.footer__btns}>
            <Button backgroundColor="rgb(27, 219, 196)" color="#fff" handleClick={() => setModalActive(true)}>
              Click Me!
            </Button>
            <Button backgroundColor="rgb(27, 219, 196)" color="#fff" handleClick={() => setModalActive(true)}>
              Click Me!
            </Button>
          </div>
        </div>
      </Container>
      <Modal active={modalActive} setActive={setModalActive} />
    </footer>
  );
};

import { useState } from "react";
import { Logo } from "../../assets/icons/logo";
import { Container } from "../../ui/Container/Container";
import { Facebook } from "../../assets/icons/facebook";
import { Linkedin } from "../../assets/icons/linkedin";
import { Gmail } from "../../assets/icons/gmail";
import { Burger } from "../../assets/icons/burger";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__wrapper}>
          <a href="/">
            <Logo />
          </a>
          <div className={styles.header__wrapperLeft}>
            <div className={styles.header__links}>
              <a href="https://facebook.com" target="_blank">
                <Facebook />
              </a>
              <a href="https://linkedin.com" target="_blank">
                <Linkedin />
              </a>
              <a href="https://gmail.com" target="_blank">
                <Gmail />
              </a>
            </div>
            <a className={`${styles.burger__btn} ${isMenuOpen ? styles.open : ""}`} onClick={toggleMenu}>
              <Burger />
              <ul className={`${styles.burger} ${isMenuOpen ? styles.open : ""}`}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#bonus">Bonus</a>
        </li>
      </ul>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};
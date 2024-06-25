import { Container } from "../../ui/Container/Container";
import { WowComponent } from "../../ui/WowComponent/WowComponent";
import { Card } from "./Card";
import styles from "./Stories.module.scss";

export const Stories = () => {
  return (
    <div className={styles.stories}>
      <Container>
        <h2>Stories of our users</h2>
        <div className={`${styles.stories__items} wow animate__animated animate__backInUp`} data-wow-duration="0.9s">
            <Card backgroundColor='#1BDBC4' />
            <Card backgroundColor='#962EFF' />
            <Card backgroundColor='#1BDBC4' />
        </div>
      </Container>
      <WowComponent />
    </div>
  );
};

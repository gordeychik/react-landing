import { StoriesImage } from "../../assets/icons/stories";
import styles from "./Stories.module.scss";

export const Card = ({ backgroundColor }) => {

  return (
    <>
    <div className={styles.card}>
      <div
        className={styles.card__image}
        style={{ backgroundColor: backgroundColor }}
      >
        <StoriesImage />
      </div>
      <h4>Stories of our users</h4>
      <p>
        Lorem ipsum dolor sit amet,
        <br /> consectetur adipiscing elit.{" "}
      </p>
      <p className={styles.card__date}>17.10.20</p>
    </div>
    </>
  );
};

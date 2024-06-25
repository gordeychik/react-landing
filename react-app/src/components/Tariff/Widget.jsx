import { Button } from "../../ui/Button/Button";
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import styles from "./Tariff.module.scss";

export const Widget = ({
  backgroundColor,
  plan,
  price,
  mail,
  share,
  client,
  support,
}) => {

  const [modalActive, setModalActive] = useState(false);
  
  return (
    <>
      <div
        className={styles.widget}
        style={{ backgroundColor: backgroundColor }}
      >
        <p>{plan}</p>
        <h4 className={styles.widget__price}>{price}</h4>
        <ul>
          <li>{mail}</li>
          <li>{share}</li>
          <li>{client}</li>
          <li>{support}</li>
        </ul>
        <div className={styles.widget__btn}>
          <Button backgroundColor="#fff" handleClick={() => setModalActive(true)}>Get started</Button>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
};

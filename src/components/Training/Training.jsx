// Training.jsx
import { useState, useEffect } from "react";
import { TrainingImage } from "../../assets/icons/training";
import { Container } from "../../ui/Container/Container";
import { Input } from "../../ui/Input/Input";
import { Button } from "../../ui/Button/Button";
import { WowComponent } from '../../ui/WowComponent/WowComponent';
import styles from "./Training.module.scss";

export const Training = () => {
  const [email, setEmail] = useState("");
  const [access, setAccess] = useState("");
  const [error, setError] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (email.trim().length >= 4 && email.includes("@")) {
      setError("");
      setAccess("Well Done!");
    } else {
      setError("Please enter a valid email address");
      setAccess("");
    }
  };

  return (
    <div className={styles.training}>
      <Container>
        <div className={styles.training__wrapper}>
          <div className={styles.training__info}>
            <h2>Start training already on your watch</h2>
            <p>
              Nisi ullamco tempor tempor nulla labore ad labore sit eu duis. Ut
              et esse cupidatat consequat. Nisi ullamco tempor tempor nulla
              labore ad labore sit eu duis. Ut et esse cupidatat consequat.
            </p>
            <form>
              <label>
                <Input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  backgroundColor="#FFBD12"
                  color="#fff"
                  handleClick={handleClick}
                >
                  Let's GO!
                </Button>
                {access && <span className={styles.access}>{access}</span>}
                {error && <span className={styles.error}>{error}</span>}
              </label>
            </form>
          </div>
          <div className={`${styles.training__image} wow animate__animated animate__backInRight`}>
            <TrainingImage />
          </div>
        </div>
      </Container>
      <WowComponent />
    </div>
  );
};
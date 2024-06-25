import { useState } from "react";
import { Input } from "../../ui/Input/Input";
import { Button } from "../../ui/Button/Button";
import styles from "./Form.module.scss";

export const Form = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [access, setAccess] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    let newErrors = {
      name: "",
      email: "",
      company: "",
      message: "",
    };

    if (name.trim().length === 0) {
      newErrors.name = "Oops!";
    }

    if (email.trim().length < 4 || !email.includes("@")) {
      newErrors.email = "Oops!";
    }

    if (company.trim().length === 0) {
      newErrors.company = "Oops!";
    }

    if (message.trim().length === 0) {
      newErrors.message = "Oops!";
    }

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.company && !newErrors.message) {
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
      setAccess('Well Done!');
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.form__tabs}>
        <h4>Sign in</h4>
        <h4>Log in</h4>
      </div>
      <form>
        <div className={styles.form__input}>
          <Input
            placeholder="Your name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.form__input}>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.form__input}>
          <Input
            placeholder="Company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          {errors.company && <span className={styles.error}>{errors.company}</span>}
        </div>
        <div className={styles.form__input}>
          <Input
            placeholder="Message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        </div>
        <label>
          <Input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span>Lorem ipsum dolor sit amet. </span>
        </label>
        <Button
          type="submit"
          backgroundColor="#FA6648"
          color="#fff"
          handleClick={handleClick}
        >
          Let's GO!
        </Button>
        {access && <span className={styles.access}>{access}</span>}
      </form>
    </div>
  );
};
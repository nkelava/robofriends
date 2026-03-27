import { useState } from "react";
import styles from "../AuthForm.module.css";

const SignIn = ({ onRouteChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitSignIn = (route) => {
    onRouteChange(route);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <h1 className={styles.h1}>Sign In</h1>

        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          name="email"
          type="email"
          value={email}
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          className={styles.input}
          name="password"
          type="password"
          value={password}
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className={styles.button}
          onClick={() => onSubmitSignIn("home")}
        >
          ENTER
        </button>

        <div>
          <strong className={styles.register}>
            Are you new?{" "}
            <button
              className={styles.toRegisterButton}
              onClick={() => onSubmitSignIn("register")}
            >
              Join Us
            </button>{" "}
            for FREE 🥰
          </strong>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

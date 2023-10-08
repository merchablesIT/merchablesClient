// components/SignupForm.tsx
import React, { FormEvent, useState } from "react";
import styles from "../../page.module.css";
import { isEmailValid } from "@/app/utils/isEmailValid";

interface SignupFormProps {
  onSubmit: (e: any) => void;
  loading: boolean;
  submitted: boolean;
  email: string;
  onEmailChange: (email: string) => void;
}

const ExpressionOfInterestForm: React.FC<SignupFormProps> = ({
  onSubmit,
  loading,
  submitted,
  email,
  onEmailChange,
}) => {
  return (
    <div>
      <form>
        <input
          onChange={(e) => onEmailChange(e.target.value)}
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={email}
          style={{
            display: submitted ? "none" : "block",
          }}
          className={styles.interestInputForm}
        />
        <button
          onClick={onSubmit}
          value="Sign Up"
          style={{
            display:
              submitted || loading || !isEmailValid(email) ? "none" : "block",
          }}
          className={styles.button}
        >
          Sign Up
        </button>
        {loading && <div>Loading...</div>}
      </form>
      {submitted && !loading && (
        <div className={styles.alert}>
          Email submitted successfully! Thank you for signing up.
        </div>
      )}
    </div>
  );
};

export default ExpressionOfInterestForm;

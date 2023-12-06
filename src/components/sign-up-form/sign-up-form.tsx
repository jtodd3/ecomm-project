import React, { useState, FormEvent, ChangeEvent } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.js";
import Button from "../button/button.js";

import { SignUpContainer } from "./sign-up-form.styles.jsx";
import { signUpStart } from "../../store/user/user.action.js";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = formFields;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("cannot create user, email already in use");
      }
      console.log("user creation encountered an error", error);
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with you email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          value={displayName}
          type="text"
          required
          onChange={handleChange}
          name="displayName"
        />
        <FormInput
          label="Email"
          value={email}
          type="email"
          required
          onChange={handleChange}
          name="email"
        />
        <FormInput
          label="Password"
          value={password}
          type="password"
          required
          onChange={handleChange}
          name="password"
        />
        <FormInput
          label="Confirm Password"
          value={confirmPassword}
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
}

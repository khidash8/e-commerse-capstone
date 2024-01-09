import { useState } from "react";
import {
  createUserAuthWithEmailAndPassword,
  getDocumentFromAuth,
} from "../../utils/firebase.utils";

// default form input values
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  // ? hooks
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // ? Form Submission
  const handleFormSubmission = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    // * create user auth
    try {
      const { user } = await createUserAuthWithEmailAndPassword(
        email,
        password
      );

      await getDocumentFromAuth(user, { displayName });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
        return;
      }

      console.log(error);
    }
  };

  // ? Input changes
  const handleInputchange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h2>Sign Up Form</h2>

      <form onSubmit={handleFormSubmission}>
        {/* displayName */}
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          name="displayName"
          id="displayName"
          value={displayName}
          onChange={handleInputchange}
        />

        {/* email */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleInputchange}
        />

        {/* password */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleInputchange}
        />

        {/* confirmPassword */}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleInputchange}
        />

        {/* submit button */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;

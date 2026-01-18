import React, { useState } from "react";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const StudentForm = () => {
  //   const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
  });
  const isEmailValid = validateEmail(email.value);
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");
  const getIsFormValid = () => {
    return (
      firstName !== "" &&
      isEmailValid &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    // setErrorMessage("");
    setFirstName("");
    setLastName("");
    setEmail({
      value: "",
      isTouched: false,
    });
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!getIsFormValid()) {
      return;
    }

    alert("Account created!");
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Sign Up</h2>
        <div className="Field">
          <label>
            First name <sup>*</sup>
          </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
          />
        </div>
        <div className="Field">
          <label>Last name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
          />
        </div>
        <div className="Field">
          <label>
            Email address <sup>*</sup>
          </label>
          <input
            type="email"
            value={email.value}
            onChange={(e) =>
              setEmail({
                ...email,
                value: e.target.value,
              })
            }
            onBlur={() =>
              setEmail({
                ...email,
                isTouched: true,
              })
            }
            placeholder="Email address"
          />
          {email.isTouched && !isEmailValid && (
            <p className="FieldError">Invalid email address</p>
          )}
        </div>
        <div className="Field">
          <label>
            Password <sup>*</sup>
          </label>
          <input
            type="password"
            value={password.value}
            onChange={(e) =>
              setPassword({
                ...password,
                value: e.target.value,
              })
            }
            onBlur={() =>
              setPassword({
                ...password,
                isTouched: true,
              })
            }
            placeholder="Password"
          />
          {password.isTouched && password.value.length < 8 && (
            <PasswordErrorMessage />
          )}
        </div>
        <div className="Field">
          <label>
            Role <sup>*</sup>
          </label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="role">Role</option>
            <option value="individual">Individual</option>
            <option value="business">Business</option>
          </select>
        </div>
        <button type="submit" disabled={!getIsFormValid()}>
          Create account
        </button>
      </fieldset>
    </form>
  );
};

export default StudentForm;

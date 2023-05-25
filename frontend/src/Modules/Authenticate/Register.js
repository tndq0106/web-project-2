import "../../assets/styles/css/base.css";
import "../../assets/styles/css/login.css";

import React from "react";

const RegisterPage = () => {
  return (
    <div class="form-box">
      <h1>Signup</h1>
      <form
        action=""
        method="post"
        class="signup"
        onsubmit="return validateSignUp()"
      >
        <div class="field">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div class="container">
          <div class="field">
            <input type="text" name="email" id="email" placeholder="Email" />
          </div>
          <div class="field">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone number"
            />
          </div>
        </div>
        <div class="field">
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
          />
        </div>
        <div class="container">
          <div class="field">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>

          <div class="field">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm password"
            />
          </div>
        </div>
        <div class="field">
          <input type="submit" />
        </div>
      </form>
      <p>
        Already have an account? <a href="">Login</a>
      </p>
    </div>
  );
};

export default RegisterPage;

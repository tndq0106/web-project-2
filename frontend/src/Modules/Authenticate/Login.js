import "../../assets/styles/css/base.css";
import "../../assets/styles/css/login.css";

import React from "react";

const LoginPage = () => {
  return (
    <div class="form-box">
      <h1>Login</h1>
      <form action="" method="post" class="login">
        <div class="field">
          <input type="text" name="email" id="email" placeholder="Email" />
        </div>
        <div class="field">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <input type="submit" />
      </form>
      <p>
        Don't have an account? <a href="">Signup</a>
      </p>
    </div>
  );
};

export default LoginPage;

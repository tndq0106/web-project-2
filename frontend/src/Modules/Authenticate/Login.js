import { Link } from "react-router-dom";
import "../../assets/styles/css/base.css";
import "../../assets/styles/css/login.css";

import React from "react";

const LoginPage = () => {
  return (
    <div className="form-box">
      <h1>Login</h1>
      <form action="" method="post" className="login">
        <div className="field">
          <input type="text" name="email" id="email" placeholder="Email" />
        </div>
        <div className="field">
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
        Don't have an account? <Link to={"/register"}>Signup</Link>
      </p>
    </div>
  );
};

export default LoginPage;

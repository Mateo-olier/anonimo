import React from "react";
import { useState } from "react";

export default function LoginScreen() {
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(true);

  return (
    <div>
      <div className={active ? "loginScreen" : "loginScreen active"}>
        <div className="containerLogin">
          <div className="bg">
            <div className="box signin">
              <h2>Already Have an account?</h2>
              <button className="signinBtn" onClick={() => setActive(!active)}>
                sign in
              </button>
            </div>
            <div className="box signup">
              <h2>Already Have an account?</h2>
              <button className="signupBtn" onClick={() => setActive(!active)}>
                sign up
              </button>
            </div>
          </div>
          <div className={active ? "formBx" : "formBx active"}>
            <div className="form signinForm">
              <form>
                <h3>Sign in</h3>
                <input type="text" placeholder="Name" />
                <input type="password" placeholder="password" />
                <input type="submit" value="login" />
                <a href="" className="forgot">
                  Forgot password?
                </a>
              </form>
            </div>
            <div className="form signupForm">
              <form>
                <h3>Sign up</h3>
                <input type="text" placeholder="Name" />
                <input type="mail" placeholder="Email" />
                <input type="password" placeholder="password" />
                <input type="password" placeholder="Confirm password" />
                <input type="submit" value="Register" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

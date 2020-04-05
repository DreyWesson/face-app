import React from "react";
import "./SignIn.css";

const SignIn = ({ onRouteChange }) => {
  return (
    <div>
      <article
        className="br3 ba blue b--blue-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"
        style={{ boxShadow: "4px 4px 8px 0px white" }}
      >
        <main className="pa4 white-80">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--white ph0 mh0">
              <legend className="f3 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-white hover-bg-blue hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-white hover-bg-blue hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b pa2 input-reset ba b--blue bg-blue hover-bg-white hover-black w-100"
                type="submit"
                value="Sign in"
                onClick={() => onRouteChange("home")}
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange("register")}
                className="f6 link dim white db pointer"
              >
                Register
              </p>
            </div>
          </form>
        </main>
      </article>
    </div>
  );
};

export default SignIn;

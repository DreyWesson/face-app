import React from "react";

const Register = ({ onRouteChange }) => {
  return (
    <article
      className="br3 ba blue b--blue-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center"
      style={{ boxShadow: "4px 4px 8px 0px white" }}
    >
      <main className="pa4 white-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--white ph0 mh0">
            <legend className="f3 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-white hover-bg-blue hover-white w-100"
                type="text"
                name="name"
                id="name"
              />
            </div>
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
              className="b ph3 pv2 input-reset ba b--blue bg-blue hover-bg-white hover-black grow pointer f6 dib"
              type="submit"
              value="Register"
              onClick={() => onRouteChange("home")}
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;

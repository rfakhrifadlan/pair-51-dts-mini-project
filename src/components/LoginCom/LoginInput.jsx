import React from "react";
import "./LoginFormStyles.css";

function SignFormInput({ ...restProps }) {
  return <input className="sign-form-input" {...restProps} />;
}

export default SignFormInput;

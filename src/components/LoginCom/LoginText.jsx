import React from "react";
import "./LoginFormStyles.css";

function SignFormText({ children, ...restProps }) {
  return (
    <p className="sign-form-text" {...restProps}>
      {children}
    </p>
  );
}

export default SignFormText;

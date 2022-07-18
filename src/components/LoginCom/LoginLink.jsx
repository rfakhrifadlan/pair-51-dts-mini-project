import React from "react";
import "./LoginFormStyles.css";

function SignFormLink({ children, ...restProps }) {
  return (
    <a className="sign-form-link" {...restProps}>
      {children}
    </a>
  );
}

export default SignFormLink;

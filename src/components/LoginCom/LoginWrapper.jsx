import React from "react";
import "./LoginFormStyles.css";

function SignFormWrapper({ children, ...restProps }) {
  return (
    <div className="sign-form-wrapper" {...restProps}>
      {children}
    </div>
  );
}

export default SignFormWrapper;

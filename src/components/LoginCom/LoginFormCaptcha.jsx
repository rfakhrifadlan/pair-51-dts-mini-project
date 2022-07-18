import React from "react";
import "./LoginFormStyles.css";

function SignFormCaptcha({ children, ...restProps }) {
  return (
    <p className="sign-form-captcha" {...restProps}>
      {children}
    </p>
  );
}

export default SignFormCaptcha;

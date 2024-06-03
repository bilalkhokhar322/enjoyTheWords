import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const Captcha = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(false);

  const handleCaptchaVerification = (value) => {
    if (value) {
      console.log("value----->", value);
      setCaptchaValue(value);
      setIsVerified(true);
    }
  };
  console.log("isVerified -------------- >", isVerified);
  console.log("capValue -------------- >", captchaValue);
  return (
    <div>
      <form>
        <ReCAPTCHA
          sitekey="6Ld5wO8pAAAAADrwzIwQKh1UJutnCR-9srP9rvJS"
          onChange={handleCaptchaVerification}
        />
        <button type="submit" disabled={!isVerified}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Captcha;

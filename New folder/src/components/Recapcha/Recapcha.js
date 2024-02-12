import React, { useEffect, useState, useCallback } from "react";
import {
  GoogleReCaptchaProvider,
  withGoogleReCaptcha
} from "react-google-recaptcha-v3";

const Recptcha= ({ googleReCaptchaProps }) => {
  const [token, setToken] = useState(null);

  const getToken = useCallback(async () => {
    const _token = await googleReCaptchaProps.executeRecaptcha("homepage");
    setToken(_token);
  }, [googleReCaptchaProps]);

  useEffect(() => {
    getToken();
  }, [getToken]);
  console.log("token",token);
  return (
    <div className="App">
              <div>{token}</div>

      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};
export default Recptcha;

// import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState, useEffect, useCallback } from 'react';
import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha,
    GoogleReCaptcha
  } from "react-google-recaptcha-v3";

const Recaptcha1 = () => {
    const [token, setToken] = useState();
    const onVerify =(token) => {
        setToken(token);
      };
 console.log('====================================')
 console.log("tojen1",token)
 console.log('====================================')
    return(
     
             <GoogleReCaptchaProvider
                scriptProps={{
                    async: true, // optional, default to false,
                    defer: false, // optional, default to false
                    appendTo: 'head', // optional, default to "head", can be "head" or "body",
                    nonce: undefined // optional, default undefined
                  }}
      language="fa"
      reCaptchaKey="6Lf3JqwZAAAAAM7EVYnGEw3QtmXEI8gWxjr3rdGZ"
    >

<GoogleReCaptcha onVerify={onVerify}  />
    </GoogleReCaptchaProvider>
          
       
    )
}
 
export default Recaptcha1;

import { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';

import { useDispatch ,useSelector} from 'react-redux';
import { RegisterAction } from './../../redux/action/AuthraztionAction';

  import Recptcha from './../Recapcha/Recapcha';
import { GoogleReCaptchaProvider, withGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { RegisterSchema } from '../../Validation/RegisterValidation/RegisterValidation';
import { Formik,Form ,Field, ErrorMessage} from 'formik';


const Register = (props) => {
    console.log("props",props);
    
    const dispatch=useDispatch()
    
    const  handleSubmitRegister=async (values)=>{



            dispatch(RegisterAction(values))


            
  


    }











  const MyAppp = withGoogleReCaptcha(Recptcha);

    return ( 
        <Formik 
            initialValues={{
                name:"",
                email:"",
                password:""
            }}
       validationSchema={RegisterSchema}
            onSubmit={(values)=>{
                handleSubmitRegister(values)
            }}
        
        >

    <Form   >
    <label  className="label1" for="chk" aria-hidden="true">ثبت نام</label>
    <Field name='name'   className="input-login" type="text" placeholder="نام کاربری" required={true}/>
    <ErrorMessage  name='name' render={(msg)=><div className='valid-err'>{msg}</div>}/>

    <Field name="email"   className="input-login"   placeholder="ایمیل" required=""/>
    <ErrorMessage name='email' render={(msg)=><div className='valid-err'>{msg}</div>}/>
    <Field name='password'    className="input-login" type="password"  placeholder="رمزعبور" required=""/>
    <ErrorMessage name='password' render={(msg)=><div className='valid-err'>{msg}</div>}/>
     <GoogleReCaptchaProvider reCaptchaKey="6Lf3JqwZAAAAAM7EVYnGEw3QtmXEI8gWxjr3rdGZ">
  
  {
window.executeRecaptcha ? <MyAppp /> : null
}
</GoogleReCaptchaProvider> 

<button   type='submit' className="button-sub">ثبت نام</button>
  

  
</Form>

       
        
    </Formik>
     );
}
 
export default Register;
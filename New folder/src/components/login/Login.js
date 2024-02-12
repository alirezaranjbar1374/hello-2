import "./login.css"
import Register from './../Register/Registrt';
import { useState } from 'react';
import  axios  from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser } from './../../redux/action/User';
import { decodeToken } from './../../utils/DecodeToken';
import { GoogleReCaptchaProvider, withGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Formik,Form ,Field, ErrorMessage} from 'formik';

import Recptcha from './../Recapcha/Recapcha';
import { LoginSchema } from "../../Validation/Loginvalidation/LogonValidation";
import swal from "sweetalert";
import { LoginAction } from "../../redux/action/AuthraztionAction";
const Login = () => {

	const [chek,setCheck]=useState("chk")
	const dispatch=useDispatch()
	    let navigate = useNavigate();


	const handlelogin=async (values)=>{
   dispatch(LoginAction(values,navigate))


	}

	// const MyAppp = withGoogleReCaptcha(Recptcha);


    return ( 
     
        <div className="Container-login">  
        <div className="main">  	
		<input type="checkbox" id={chek} />

			<div className="signup">
	<Register  setCheck={setCheck}/>
			</div>

			<div className="login">
			<Formik 
			     initialValues={{
					email:"",
					password:""
				}}
		   validationSchema={LoginSchema}
				onSubmit={(values)=>{
					handlelogin(values)
				}}
				
			
			> 
				<Form >
					<label  className="label1" for="chk" >ورود </label>

					<Field   className="input-login" type="email" name="email" placeholder="ایمیل" required={true}/>
					< ErrorMessage name="email"  render={(msg)=><div className='valid-err'>{msg}</div>}/>
					<Field   className="input-login" type="password" name="password" placeholder="رمزعبور" required={true}/>
< ErrorMessage name="password"  render={(msg)=><div className='valid-err'>{msg}</div>}/>
					<button  type="submit"  className="button-sub1">ورود</button>
				</Form>
				</Formik>
				<div className="forgetpassword">
					<Link to="/forgetpassword">
					<h3>فراموشی رمزعبور</h3>


					</Link>
				</div>
			</div>
	</div>
    </div>


     );
}
 
export default Login;
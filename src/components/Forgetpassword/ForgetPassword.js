import  axios  from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

import './forget.css'
import { useDispatch } from 'react-redux';
import { addUser } from './../../redux/action/User';
import { decodeToken } from './../../utils/DecodeToken';

const ForgetPass = () => {
    const [email,setEmail]=useState("")
	const [chek,setCheck]=useState("chk")
	const [code,setCode]=useState("")
	const [showinput,setShowinput]=useState("input-disable")
	const [resive,setResivee]=useState(false)
	let navigate = useNavigate();
	const dispatch=useDispatch()

	const user={
		email,
	}
    const handlesendCode=(event)=>{
		event.preventDefault();
      
        axios.post("http://localhost:3001/api/user/loginbeforeVerfy",user).then(res=>{
			console.log("resvreifay",res);
     if(res.status==200){
		 alert("yes")
	setResivee(true)
	setEmail("")
		

	 }




      
        }).catch(err=>{
            console.log("err",err.response.status);
			alert(err.response.data)
		
        })
    
	}


	const handleVerifaycode=(event)=>{
		event.preventDefault();
		alert("verifaycode")
        const coderesali={
            code,
		

        }
        axios.post("http://localhost:3001/api/user/verifayUser",coderesali).then(res=>{
			console.log("resvreifay",res);
     if(res.status==200){
		 alert("yes ok code")
		 dispatch(addUser(decodeToken(res.headers["x-auth-token"]).payload))

		 navigate('/');

		 
	// setResivee(true)
	// setEmail("")
		

	 }




      
        }).catch(err=>{
            console.log("err",err);
		
        })
    
	}




	const click=()=>{
        console.log("clicl");
    }
    return ( 
        <div className="Container-login">  
        <div className="main">  	


			<div className="login1">
				<form onSubmit={!resive ?handlesendCode :handleVerifaycode}>
					<label onClick={click} className="label1" for="chk" >بازیابی رمزعبور </label>
					{/* <input type="checkbox" id={chek} /> */}


					<input   value={email} onChange={(e)=>setEmail(e.target.value)}  className={resive!=true ? "input-login":"input-login input-disable"} type="email" name="email" placeholder="ایمیل" required=""/>
					<input   value={code} onChange={(e)=>setCode(e.target.value)} className={resive==true ? "input-login":"input-login input-disable"} type="text" name="text" placeholder="کد ارسالی را وارد کنید" required=""/>

					<button  type="submit"  className={resive==true ? "button-sub input-disable":"button-sub"}>ارسال کد یکبار مصرف به شماره تلفن</button>
					<button  type="submit" className={resive!=true ? "button-sub input-disable":"button-sub"}>کد ارسالی را وارد کنید</button>

				</form>
				<div className="forgetpassword">
					<Link to="/login">

					<h3>ورود/ثبت نام</h3>


					</Link>
				</div>
			</div>
	</div>
    </div>
     );
}
 
export default ForgetPass;









// import  axios  from 'axios';
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from 'react';

// import './forget.css'
// import { useDispatch } from 'react-redux';
// import { addUser } from './../../redux/action/User';
// import { decodeToken } from './../../utils/DecodeToken';
// import { Formik,Form ,Field, ErrorMessage} from 'formik';
// import { ForgetSchema } from '../../Validation/Forgetvalidation/ForgetValidation';

// const ForgetPass = () => {

// 	const [chek,setCheck]=useState("chk")

// 	const [showinput,setShowinput]=useState("input-disable")
// 	const [resive,setResivee]=useState(false)
// 	let navigate = useNavigate();
// 	const dispatch=useDispatch()


// 	const handlesendCode=(values)=>{
// alert("kjkjk")
	  
// 		axios.post("http://localhost:3001/api/user/loginbeforeVerfy",values).then(res=>{
// 			console.log("resvreifay",res);
// 	 if(res.status==200){
// 		 alert("yes")
// 	setResivee(true)
// 	// setEmail("")
		

// 	 }




	  
// 		}).catch(err=>{
// 			console.log("err",err.response.status);
// 			alert(err.response.data)
		
// 		})
	
// 	}


// 	const handleVerifaycode=(values)=>{
// 		alert("verifaycode")
	 
// 		axios.post("http://localhost:3001/api/user/verifayUser",values).then(res=>{
// 			console.log("resvreifay",res);
// 	 if(res.status==200){
// 		 alert("yes ok code")
// 		 dispatch(addUser(decodeToken(res.headers["x-auth-token"]).payload))

// 		 navigate('/');

		 
// 	// setResivee(true)
// 	// setEmail("")
		

// 	 }




	  
// 		}).catch(err=>{
// 			console.log("err",err);
		
// 		})
	
// 	}




// 	const click=()=>{
// 		console.log("clicl");
// 	}
// 	return ( 
// 		<div className="Container-login">  
// 		<div className="main">  	


// 			<div className="login1">
// 				<Formik   
// 					 initialValues={{
// 						email:"",
// 						code:""
// 					}}
// 			   validationSchema={ForgetSchema}
// 					onSubmit={(values)=>{
// 						if(resive==false){
// 					  return	  handlesendCode(values.email)

// 						}else{
// 						  return  handleVerifaycode(values.code)
// 						}
// 						// return !resive ?return handlesendCode(values) : return handleVerifaycode(values)
// 					}}
				
// 				> 
// 				<Form  >
// 					<label onClick={click} className="label1" for="chk" >بازیابی رمزعبور </label>
// 					{/* <input type="checkbox" id={chek} /> */}


// 					<Field      className={resive!=true ? "input-login":"input-login input-disable"} type="email" name="email" placeholder="ایمیل" required={true}/>
// 					< ErrorMessage name="email"  render={(msg)=><div className='valid-err'>{msg}</div>}/>

// 					<Field     className={resive==true ? "input-login":"input-login input-disable"} type="text" name="code" placeholder="کد ارسالی را وارد کنید" required={true}/>
// 					< ErrorMessage name="code"  render={(msg)=><div className='valid-err'>{msg}</div>}/>

// 					<button  type="submit"  className={resive==true ? "button-sub input-disable":"button-sub"}>ارسال کد یکبار مصرف به شماره تلفن</button>
// 					<button  type="submit" className={resive!=true ? "button-sub input-disable":"button-sub"}>کد ارسالی را وارد کنید</button>

// 				</Form>
// 				</Formik>
// 				<div className="forgetpassword">
// 					<Link to="/login">

// 					<h3>ورود/ثبت نام</h3>


// 					</Link>
// 				</div>
// 			</div>
// 	</div>
// 	</div>
// 	 );
// }
 
// export default ForgetPass;
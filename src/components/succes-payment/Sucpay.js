import React from 'react'
import './suc_style.css'
import  axios  from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Printto from '../../utils/Printto/Printto';



export default function Sucpay() {
  let params=useParams();
  const [Detildatasucpay,setDetildatasucpay]=useState([])
  
  let paymentCode=params.paymentCode?.split("=")[1]
  // console.log("params",paymentCode);
  const header = {
            
    headers: {
        "x-auth-token":localStorage.getItem("token-login")

    //   "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNhYmU3M2JmYmE0NTMyZWNlMWUxNTciLCJyb2xlIjoidXNlciIsImlhdCI6MTY1NzQ1NDIzOX0.2qnn23bi6qATfmmofjtokrzlkba6CYyk018IHL_sl6Y"

       }
       
 };
 useEffect(() => {
  axios.get(`http://localhost:3001/api/user/payment/${paymentCode}`,header).then(res=>{
    // console.log("respaymentCode",res);
    setDetildatasucpay(res.data)

    let data=res.data


  }).catch(err=>{
    console.log("err",err);
  })
  

 }, [])
 let arr=[
   {id: '62ff410e991a9339703abb9c', name: 'آموزش صفر تا صد ReactJs', courseId: '6290b793d4234b27987abb5d', price: 700000},
   {   id: '62ff410e991a9339703abb9c', name: 'آموزrfrfrfrtJs', courseId: '6290b793d4234b27987abb5d', price: 700000}
 ]
  // arr=Detildatasucpay.basket?.course
 


  // console.log("Detildatasucpay",Detildatasucpay);
  // console.log("23",arr)
  return (
    <>
    
    {arr.map(item=>{
        <>
        <p key={item._id}>{item.name}</p>
        </>
      })}
    
    <div className="container_suc">
     
              <div className="card-pay">
      <div  className='div_checkmark'>
        <i  className="div_checkmark">✓</i>
      </div>
      {Detildatasucpay.success==true?<h1 className='h1_suc'>پرداخت موففیت آمیز بود</h1>:<h1 className='h1_unsuc'>پرداخت ناموفق بود</h1> }
   
        <p className='p_suc'>سپاس از خرید شما<br/> امکان استفاده از دورهای خریداری شده مهیلا شد</p>
        <Printto>

        <div className='container_detil_pay'>
          <ul className='ul_detil_one'>
            <li >نام و نام خانوادگی</li>
            <li >سفارش شما از</li>
            <li>دوره های خریداری شده</li>

            <li >مبلغ پرداخت شده</li>
            <li >نوع پرداخت</li>
            <li >شماره پیگیری</li>

          </ul>

          <ul className='ul_detil_two'>
            <li>{Detildatasucpay.user?.email}</li>
            <li>سایت علی-لرن</li>
            <li>
              <span>{Detildatasucpay.basket?.course[0]?.name}</span>
              <span>{Detildatasucpay.basket?.course[1]?.name}</span>
              <span>{Detildatasucpay.basket?.course[2]?.name}</span>

            </li>
          
            <li>{Detildatasucpay.amount}تومان</li>
            <li>بانک ملت</li>
            <li>{Detildatasucpay.refId}</li>

          </ul>
        </div>
        </Printto>
        <button title='برگشت به سایت' className='btn_back_saite'>
          <Link to='/'>برگشت</Link>
        </button>

      </div>
    </div>
    </>

  )
}

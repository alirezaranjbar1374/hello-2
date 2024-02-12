import  axios  from 'axios';

export const addTocart=(id)=>async (dispatch,getState)=>{
    const {data}= await  axios.get("http://localhost:3001/api/AllTeacher");
    const dataCourse=data.map(item=>item.course)
    let coursese=dataCourse.flat()
    // console.log("data",coursese);
    const findCourse=coursese.find(item=>item._id==id)
    
    dispatch({
        type:"CART_ADD_ITEM",
        payload:{
            product:findCourse._id,
            name:findCourse.name,
            pic:findCourse.pic,
            price:findCourse.price,
            teacherAdmin:findCourse.teacherAdmin,
            timeCourse:findCourse.timeCourse
        }
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart=(id)=>(dispatch,getState)=>{
    dispatch({
        type:'CART_REMOVE_ITEM',
        payload:id
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))


}
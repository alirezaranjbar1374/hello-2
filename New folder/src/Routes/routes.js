import Home from './../pages/home/Home';
import Theachers from './../components/GRID-mui/Theachers';
import Courses from './../pages/Courses/Courses';
import Teacher from './../pages/teacher/Teacher';
import AllCourses from './../pages/allcourse/AllCourse';
import Login from './../components/login/Login';
// import Footer from './../components/footer/Footer';
import Navbar from './../components/navbar/Navbar';
import CourseVideo from './../components/coursevideo.js/Coursevideo';
import Cart from './../pages/Cart/Cart';
import Sucpay from '../components/succes-payment/Sucpay';
import ForgetPass from './../components/Forgetpassword/ForgetPassword';
import { useRoutes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './../redux/action/User';
import { decodeToken } from './../utils/DecodeToken';
import Logout from './../components/login/Logout';
import UserDetil from './../components/User-detil/UserDetil';
import { UserDetilAction } from './../redux/action/UserdetilAction';
import DashbordUser from './../components/Dashborduser/Dashbord';
import UserDetilCoursese from './../components/userdetilcourse/UserDetilCourses';
import Articel from '../components/articles/Articel';
import About from '../pages/about/About';
import CountentUs from '../pages/CountentUS/CountentUs';
import AutoCompleted from '../components/AutoCompleted/AutoCompleted';
import ArticelDetil from '../components/ArticelDetil/ArticelDetil';

const Routers=()=>{
    

    const dispatch=useDispatch()

useEffect(() => {
const token=localStorage.getItem("token-login")
if(token){
    const decodedToken=decodeToken(token)
    console.log("log",decodedToken.payload);
    dispatch(addUser(decodedToken.payload))
    
}

 
}, [dispatch])

let  routes=[
    {path: '/', element: <Home />},
    {path: '/', element: <Articel />},

    
    {path: '/teachers', element: <Theachers />},
    {path:'/autocomplet',element:<AutoCompleted
    />},
    {path: '/courses', element: <Courses />},
    {path: '/teacher/:id', element: < Teacher />},
    {path: '/allcourses', element: <AllCourses />},
    {path: '/login', element:  <Login />},
    {path: '/userdetil', element: <UserDetil />},
    {path: '/DashbordUser', element: <DashbordUser />},
    {path: '/UserDetilCoursese', element: <UserDetilCoursese />},

    
{path:'/about' ,element:<About/>},
{path:'/countentus' ,element:<CountentUs/>},
{path:'/ArticelDetil/:shortName' ,element:<ArticelDetil/>},



    {path:'/logout',element:<Logout/>},
    {path:'/forgetpassword',element:<ForgetPass/>},
    {path: '/navbar', element: <Navbar />},
    
    {path: '/course/:id', element: <CourseVideo/>},
    {path:'/cart/:id' ,element:<Cart />},
{path:'/Sucpay/:paymentCode',element:<Sucpay/>}






]

let router = useRoutes(routes)

return(
    <>

    {router}
    </>
)

}


export default Routers;
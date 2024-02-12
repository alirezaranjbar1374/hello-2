import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUser } from '../../redux/action/User';
import { useEffect } from 'react';

const Logout = () => {
    const dispatch=useDispatch()
    let navigate = useNavigate();

    useEffect(() => {
      localStorage.removeItem("token-login")
      dispatch(clearUser())
      navigate("/")

    }, [])
    

    return ( 
        null
     );
}
 
export default Logout;
import moment from 'jalali-moment';
import { useState ,useEffect} from 'react';

const Jalal = () => {
    // console.log("zaman",new Date());
    let myTime= new Date()
    let rust=moment(myTime).locale("fa").format("YYYY/MM/DD")
//     console.log("split",rust);
//     console.log(typeof(rust));
// console.log("mytime",myTime);
    const [date,setDate]=useState("")
    useEffect(() => {
        setDate(rust)
       

    }, [])
    
    return ( 
        <>
        <h1>{date}</h1>
        </>
     );
}
 
export default Jalal;
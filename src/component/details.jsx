import { useState } from "react"
import {Link} from "react-router-dom";
import { useEffect } from "react/cjs/react.development";


export const User = () => {
    const [user,setuser] = useState([]);
    useEffect(() =>{
        fetch("https://reqres.in/api/users")
        .then((x) => x.json())
        .then((d) => {
            setuser(d.data);
            
        });
    },[]);

     return (
         <>


         <h1>Dashbord</h1>

           {user.map(e => <p>
               <Link to = {`/user/${e.id}`}>Movies: {e.id}</Link>
           
           </p>)}

         </>
     )
}



/*<p>user : {e.id}<br/> 
<p><img src = {e.avatar}></img></p>
<div>{e.first_name}  {e.last_name}</div>
<div></div>

</p>*/
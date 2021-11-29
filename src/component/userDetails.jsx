import { useState , useEffect } from "react";

import { useParams } from "react-router-dom";


export const Details = () =>{
    const {id} = useParams() // for geting data from /:id  here
    // console.log(id)
    const [user,setuser] = useState({});
    const [imgs,setimg] = useState();

    useEffect(() =>{
        fetch(`https://reqres.in/api/users/${id}`)
        .then((x) => x.json())
        .then((d) => {
            setuser(d.data);
            
        });
        if(id == 1){
            setimg("https://lumiere-a.akamaihd.net/v1/images/p_aladdin2019_17638_d53b09e6.jpeg")
        }
    },[id]);
   


    return (
        <>
    {/* <img src = {user.avatar}></img> */}
   <div>{user.first_name}  {user.last_name}</div>
   {/* <p>{user.email}</p> */}
     <br/>
   <img src = {imgs}></img>
   <br></br>
     <button>book now</button>
          



        </>
    )
}
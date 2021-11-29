import { useState , useEffect } from "react";

import { useParams } from "react-router-dom";


export const Details = () =>{
    const {id} = useParams() // for geting data from /:id  here
    // console.log(data)
    const [user,setuser] = useState({});
    useEffect(() =>{
        fetch(`https://reqres.in/api/users/${id}`)
        .then((x) => x.json())
        .then((d) => {
            setuser(d.data);
            
        });
    },[id]);


    return (
        <>
    <img src = {user.avatar}></img>
   <div>{user.first_name}  {user.last_name}</div>
   <p>{user.email}</p>

          



        </>
    )
}
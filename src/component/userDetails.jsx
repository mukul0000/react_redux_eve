import { useState , useEffect } from "react";

import { Link, useParams } from "react-router-dom";


export const Details = () =>{
    const {id} = useParams() // for geting data from /:id  here
    // console.log(id)
    const [user,setuser] = useState({});
    const [imgs,setimg] = useState();
    const [qr,setqr] = useState();
    const [show,setshow] = useState(true);

    useEffect(() =>{
        fetch(`https://reqres.in/api/users/${id}`)
        .then((x) => x.json())
        .then((d) => {
            setuser(d.data);
            
        });
        if(id == 1){
            setimg("https://lumiere-a.akamaihd.net/v1/images/p_aladdin2019_17638_d53b09e6.jpeg")
        }
        if(id == 2){
            setimg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1q9Oyf_bbH1mCjoZh_rPd3b9UviNnLDDJo7UQIJxw1qC_We_n64hahGcQWzfANntpEs&usqp=CAU")
        }
        if(id == 3){
            setimg("https://i.pinimg.com/originals/98/27/b1/9827b1b899a7472e1130485b0092c68e.jpg")
        }

    },[id]);
   
    const handelbutton = () =>{
        console.log("wortki")
        setqr("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png")
        setshow(!show)
    }

    return (
        <>
        {show && <div> 
    {/* <img src = {user.avatar}></img> */}
   <div>{user.first_name}  {user.last_name}</div>
   {/* <p>{user.email}</p> */}
     <br/>
   <img src = {imgs}></img>
   <br></br>
     <button onClick = {handelbutton}>book now</button>
          

      </div>}
      <img  style={{height: 300 , }}src = {qr} ></img>
      <br/>
      <br/>
      <br/>
      <br/>
        <h1>Booking scuessfull</h1>
        <button>
        <Link to = "/TecketDetails">more detalis</Link>
        </button>
        </>
    )
}
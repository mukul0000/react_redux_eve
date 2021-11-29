import React, {useState} from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Dasbord} from "./Dashbord"


function Signup(){
    const [user,setuser]  = useState([]);
 const[num,setnum]= useState("");
 const[otp,setotp] = useState("");
 const[text,settext] = useState("");
 const[display,setdisplay] = useState("");
 const [show,setshow] = useState(true);


 const Handlex = () => {
    //   console.log("working");
    //   e.preventDefault();
    //   e.target.style.display = "none"
    setshow(!show)
}
 
 const HandelAddTodo = () =>{
       if(num.length == 10 && otp.length == 4){
           if(otp == 1234){
            axios
            .post('http://localhost:3001/todo',{
                
            user : num,
            otp : otp,
              
            })
            .then(res =>{
                console.log(res);
                console.log(res.data);
              
        
                 
            })
            settext("")
           }
           else {
            // alert("please enter valid otp")
            settext("please enter valid otp")
           } 
       } else {
        //    alert ("Please enter valid details")

           settext("please enter valid details")
       }
   
    
    
 }
 
 
   return (
       <>
     <div> 
     {show && <div>
         
        <div id = "main">
           <div>
           <h3 id ="text">Login/Signup</h3>
          
           <div id="fieldset">
         <h6 id="legend">Enter Your Mobile Number</h6>
            <input id ="inp" placeholder = "mobile" type= "number" onChange = {(e) => setnum(e.target.value)}/>

           
            
       </div>

             
         <input placeholder = "username"></input>
         <br/>
         <input placeholder = "email"></input>
         <br/>

            <input id ="inp" placeholder = "otp" type= "number" onChange = {(e) => setotp(e.target.value)}/>
           
            
            
            <div id= "worning">{text}</div>

            <button id = "btn2" onClick = {HandelAddTodo}>Continue </button>
           </div>

          
       </div>
       <div id = "fix">
       </div>
         
         </div>}
        
       
        
       </div>
       </>
   )
}

export {Signup}
import {Link} from "react-router-dom";

export const Navbar = () =>{

    return (
      <>
         <div style = {{display: "flex",justifyContent : "space-around"}}>   
        <Link to = "/">Login</Link>

        <Link to = "/about">about</Link>
        {/* <Link to = "/user">Dashbord</Link> */}
        <Link to = "/contact">detalis</Link>


        </div>

      </>

    )
}


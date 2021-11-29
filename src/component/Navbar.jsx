import {Link} from "react-router-dom";

export const Navbar = () =>{

    return (
      <>
         <div style = {{display: "flex",justifyContent : "space-around"}}>   
        <Link to = "/">home</Link>

        <Link to = "/about">about</Link>
        <Link to = "/contact">contect</Link>
        <Link to = "/user">user</Link>

        </div>

      </>

    )
}


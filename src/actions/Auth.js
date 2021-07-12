import Swal from "sweetalert2";
import { apiLogin } from "../helpers/apiLogin";


export const startLogin = async(email, password) =>{
    const data = await apiLogin("login", {email, password});
    const resp = await data.json();
    const { user } = resp;
    console.log(resp);
    
    localStorage.setItem("login", JSON.stringify(user));
    // if (user !== undefined) {
    //   history.push("/");
    // } else {
    //   const { msg } = resp;
    //   console.log(msg);
    //   Swal.fire("Error", msg, "error");
    // }

}
export const startRegister = async(name, email, password) =>{
     const data = await apiLogin("register", { name, email, password });
     const resp = await data.json();
     const { user } = resp;
     console.log(resp);
     localStorage.setItem("login", JSON.stringify(user));

}



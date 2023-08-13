import { useState } from "react";
const Form = ()=>{
   const [user,setUser] = useState({
    username:"",
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
   });
   const [error,setError] = useState("");
   const [success,setSuccess] = useState("");
   const handleUserData = (event)=>{
      const name = event.target.name;
      const value = event.target.value;

      setUser({...user,[name]:value});
   }
   const handleButton = ()=>{
         if(!user.username || !user.firstName || !user.lastName || !user.email || !user.password || !user.confirmPassword){
            setError("Please Fill All the Fields")
            setSuccess('');
         }
         else if(user.password !== user.confirmPassword){
            setError("Password does not match");
            setSuccess('')
         }
         else{
            setSuccess("Success !!");
            setUser({user:{
                username:"",
                firstName:"",
                lastName:"",
                email:"",
                password:"",
                confirmPassword:""
            }

        })
         }
   }
    return(
        <div className="form-container">
            <h2>Registration Form</h2>
            <div className="inputs">
                <input type="text" name="username" value={user.username} onChange={handleUserData} placeholder="username" />
            </div>
              <div className="inputs" >
                <input type="text" name="firstName" value={user.firstName} onChange={handleUserData} placeholder="firstname"/>
            </div>  
            <div className="inputs">
                <input type="text" name="lastName" value={user.lastName} onChange={handleUserData} placeholder="lastname"/>
            </div>  
            <div className="inputs">
                <input type="email" name="email" value={user.email} onChange={handleUserData} placeholder="email"/>
            </div>  
            <div className="inputs">
                <input type="password" name="password" value={user.password} onChange={handleUserData} placeholder="password"/>
            </div>  
            <div className="inputs">
                <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleUserData} placeholder="confirm password" />
            </div >
            <div className="buttons">
              <button onClick={handleButton}>Create User</button>
            </div>
            <div >
               {error && <p className="error">{error}</p>}
               {success && <p className="sucess">{success}</p>}
            </div>
        </div>
    )
}
export default Form;
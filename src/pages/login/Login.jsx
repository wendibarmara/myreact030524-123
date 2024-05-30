import React , {useState} from 'react'
import  './login.css'

const Login = () => {
      const [userId,setUserId]=useState('');
      const [password,setPassword]=useState('');
      const [isError,setError]=useState(false);
      const [errorMsg,setErrorMsg]=useState("");
      const handleSubmit=(e)=>
      {
        e.preventDefault();
        if (userId ==='admin' && password ==='admin')
        {
          setError(false)
  
          window.location.replace("home");
        }
        else {
   
          setError(true);
          setErrorMsg("login gagal...")
        }
      };

    return (
<div>
  <div className="container" >
    <div className="image-container" />
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input id="userid" type="text" placeholder="UserID" value={userId} onChange={(e)=>setUserId(e.target.value)}   />
        <input id="passwd" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
      
        <button type="submit" disabled={isError}>
                {isError ? errorMsg : 'Login'}
        </button>
      </form>
    </div>
  </div>
</div>

  )
}

export default Login

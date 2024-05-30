import React from 'react'

const Login = () => {
    return (
<div>
  <div className="container" >
    <div className="image-container" />
    <div className="form-container">
      <form>
        <h2>Login</h2>
        <input type="text" placeholder="UserID" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</div>

  )
}

export default Login

import React, { useContext, useState } from 'react';
import { AuthContext } from '../Privet/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

  
  const { signIn, facbooklogin, } = useContext(AuthContext);
  const [loginsuccess,setloginsuccess]=useState('')
  const [error, seterror] = useState('')
  const [user,setUser]=useState(null)
  const Navigate = useNavigate()
  const location = useLocation()
  console.log(location);
const from=location.state?.from?.pathname||'/'

  const handlesignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(result => {
        seterror('')
        const user = result.user;
        console.log(user);
        setUser(user)
        setloginsuccess('Login successful')
        Navigate(from ,{replace:true});
      })
      .catch(err => { 
        setloginsuccess("")
        console.log(err);
       
        seterror(err.message)
      })

    
  }
  const handleFacbookSignin = () => {
    facbooklogin() 
      .then(result => {

        seterror('')
        console.log(result);
        const user = result.user;
        setUser(user)
        setloginsuccess(user)
      })
      .catch(err => { 
        setloginsuccess('')
        console.log(err);
         seterror(err.message);
      })
  }

  const [show,setshow]=useState(false)
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlesignin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <p onClick={() => setshow(!show)}>
                  {show ? (
                    <small>Hide Password</small>
                  ) : (
                    <small>Show Password</small>
                  )}
                </p>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                {user ? (
                  <p className="text-green-600">{loginsuccess}</p>
                ) : (
                  <p className="text-red-600">{error}</p>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <button onClick={handleFacbookSignin} className="btn btn-success">
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
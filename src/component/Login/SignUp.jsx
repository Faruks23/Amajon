import React, { useContext, useState } from 'react';
import { AuthContext } from '../Privet/AuthProvider';

const SignUp = () => {
  const [error,seterror]=useState('')
  const { createUser } = useContext(AuthContext);
   const [user, setUser] = useState(null);
   const [success, setsuccess] = useState("");
  const handlesignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const confirmPassword=form.confirmPassword.value;
    const password = form.password.value;
    if (password!==confirmPassword) { 
      seterror("Password is Not match")
      return
    } else if (password.length < 6) {
      seterror("Password must be at least 6 characters")
      return
    }
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        seterror('')
        const user = userCredential.user;
        setUser(user)
        setsuccess("Account created successfully");

        console.log(user);// ...


      })
      .catch((error) => {
        setsuccess("");
        const errorCode = error.code;
        const errorMessage = error.message;
        seterror(errorMessage)
        console.log(errorMessage);
        // ..
      });


    console.log(name, email, password,confirmPassword);
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-300 ">
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
            <form
              onSubmit={handlesignUp}
              className="card-body h-[100%] w-[100%] "
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter name here..."
                  name="name"
                  className="input input-bordered"
                />
              </div>
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
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                {user ? (
                  <p className='text-green-600'>{success}</p>
                ) : (
                  <p className="text-red-600">{error}</p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary mb-9">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";

const SignIn = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSign = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then(result => {
        console.log("Logged in user:", result.user);
        e.target.reset();
        navigate('/');
      })
      .catch((err => console.log(err)))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-base-100 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

        {/* Left Side - Visual */}
        <div className="md:w-1/2 bg-primary/10 flex flex-col justify-center items-center p-8 text-center hidden md:flex">
          <h2 className="text-4xl font-extrabold text-primary mb-4">Welcome Back!</h2>
          <p className="text-base-content/70 mb-8 max-w-xs">Reading gives us someplace to go when we have to stay where we are.</p>
          <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1708456155~exp=1708456755~hmac=a403bd6358c5484803517833" alt="Login Illustration" className="w-64 rounded-xl mix-blend-multiply" />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-8 md:p-12">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-3xl font-bold text-base-content">Sign In</h2>
            <p className="mt-2 text-sm text-base-content/60">Please login to your account</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => handleGoogleSign()}
              type="button"
              className="btn btn-outline w-full flex items-center justify-center gap-3 py-3 rounded-xl hover:bg-base-200 transition"
            >
              <FcGoogle className="text-xl" />
              <span className="font-medium">Continue with Google</span>
            </button>

            <button
              type="button"
              className="btn btn-outline w-full flex items-center justify-center gap-3 py-3 rounded-xl hover:bg-base-200 transition"
            >
              <FaGithub className="text-xl" />
              <span className="font-medium">Continue with GitHub</span>
            </button>
          </div>

          <div className="divider my-6 text-sm text-base-content/40">OR</div>

          <form onSubmit={handleSignIn} className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                required
                className="input input-bordered w-full rounded-xl focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                required
                className="input input-bordered w-full rounded-xl focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-primary">Forgot password?</a>
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full text-white rounded-xl shadow-lg hover:shadow-primary/30"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm mt-8 text-base-content/60">
            Don't have an account?
            <Link to="/signup"><span className="text-primary font-bold ml-1 cursor-pointer hover:underline">
              Sign Up
            </span></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

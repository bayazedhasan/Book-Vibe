import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSign = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Ideally we would update the profile with the name here too
    createUser(email, password)
      .then(result => {
        console.log(result.user);
        navigate('/');
      })
      .catch((err => console.log(err)))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-base-100 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row-reverse">

        {/* Right Side - Visual */}
        <div className="md:w-1/2 bg-secondary/10 flex flex-col justify-center items-center p-8 text-center hidden md:flex">
          <h2 className="text-4xl font-extrabold text-secondary mb-4">Join Us!</h2>
          <p className="text-base-content/70 mb-8 max-w-xs">Start your reading journey today. Discover a world of stories.</p>
          <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=740&t=st=1708456200~exp=1708456800~hmac=..." alt="Signup Illustration" className="w-64 rounded-xl mix-blend-multiply" />
        </div>

        {/* Left Side - Form */}
        <div className="md:w-1/2 p-8 md:p-12">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-3xl font-bold text-base-content">Create Account</h2>
            <p className="mt-2 text-sm text-base-content/60">It's free and easy</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => handleGoogleSign()}
              type="button"
              className="btn btn-outline w-full flex items-center justify-center gap-3 py-3 rounded-xl hover:bg-base-200 transition"
            >
              <FcGoogle className="text-xl" />
              <span className="font-medium">Sign up with Google</span>
            </button>
          </div>

          <div className="divider my-6 text-sm text-base-content/40">OR</div>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="input input-bordered w-full rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                className="input input-bordered w-full rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                className="input input-bordered w-full rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirm_password"
                placeholder="••••••••"
                required
                className="input input-bordered w-full rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary"
              />
            </div>

            <button
              type="submit"
              className="btn btn-secondary w-full text-white rounded-xl shadow-lg hover:shadow-secondary/30 mt-2"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm mt-8 text-base-content/60">
            Already have an account?
            <Link to="/signin"><span className="text-secondary font-bold ml-1 cursor-pointer hover:underline">
              Sign In
            </span></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

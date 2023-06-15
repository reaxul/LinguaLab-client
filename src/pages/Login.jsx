import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";


const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { handleSubmit, register, formState: { errors } } = useForm();

  const handleLogin = (data) => {
    const { email, password } = data;
    console.log(email, password);

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Logged in successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 lg:w-1/2">
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
              <h1 className="text-5xl font-bold">Login here!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">Email is required!</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className={`input input-bordered ${errors.password ? 'input-error' : ''}`}
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">Password is required!</span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control"></div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary bg-[#c42a36]"
                  type="submit"
                  value="Login"
                />
              </div>
              <ToastContainer />
              <div className="divider">OR</div>
              <div className="flex justify-center mt-2 space-x-2">
                <button
                  onClick={handleGoogleSignIn}
                  className="p-2 bg-[#1D424F] rounded-full text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  <FaGoogle className="h-5 w-5" />
                </button>
                <Link
                  to="/signup"
                  className="p-2 bg-[#1D424F] rounded-full text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

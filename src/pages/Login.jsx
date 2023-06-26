import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import SocialLogin from "../components/SocialLogin";
import LoginAnimation from "../assets/LoginAnimation.json";
import Lottie from "lottie-react";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const { email, password } = data;

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

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 pt-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-5xl font-bold lg:hidden">Login now!</h1>
            <Lottie animationData={LoginAnimation} loop={true} />
          </div>
          <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 card-body lg:w-1/2">
            <form onSubmit={handleSubmit(handleLogin)}>
              <h1 className="text-5xl font-bold">Login here!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter mail address"
                  className={`input input-bordered ${
                    errors.email ? "input-error" : ""
                  }`}
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
                  placeholder="Enter your password"
                  className={`input input-bordered ${
                    errors.password ? "input-error" : ""
                  }`}
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
                  className="btn hover:bg-[#1d424f] bg-[#c42a36]"
                  type="submit"
                  value="Login"
                />
              </div>
              <ToastContainer />
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

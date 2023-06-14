import { useContext } from "react";
import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  validateCaptcha,
  LoadCanvasTemplateNoReload,
} from "react-simple-captcha";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [captchaText, setCaptchaText] = useState("");
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6, "black", "white");
  }, []);

  useEffect(() => {
    handleCaptcha();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [captchaText]); //things to know!

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Logged in successful!"); //things to know!
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // const errorCode = error.code;
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
  const handleCaptcha = () => {
    if (captchaText.length < 6) {
      return;
    }

    if (validateCaptcha(captchaText)) {
      setDisabled(false);
    } else {
      setDisabled(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong captcha!",
      });
      setCaptchaText("");
    }
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
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-5xl font-bold">Login here!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  required
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
                  required
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <LoadCanvasTemplateNoReload />
                <input
                  ref={captchaRef}
                  type="text"
                  name="captcha"
                  placeholder="Enter the captcha"
                  className="input input-bordered my-2"
                  value={captchaText}
                  onChange={() => {
                    setCaptchaText(captchaRef.current.value);
                  }}
                />
              </div>
              <div className="form-control mt-6">
                <input
                  //   disabled={disabled}
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

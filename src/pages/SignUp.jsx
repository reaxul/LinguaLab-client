import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const [error, setError] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const onSubmit = (data) => {
      if (data.confirmPassword!==data.password) {
          setError('Passwords do not match');
          return;
      }
      setError('');
    createUser(data.email, data.password).then((useCredentials) => {
      const loggedInUser = useCredentials.user;
      console.log(loggedInUser);
      updateUserProfile(data.name, data.PhotoURL)
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 lg:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">Name is required!</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("PhotoURL", { required: true })}
                />
                {errors.PhotoURL && (
                  <span className="text-red-500">PhotoURL is required!</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
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
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required!</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500">
                    Password should be less than 20 character!
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">At least 6 character required!</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    {" "}
                    At least one uppercase and one number!
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                  {...register("confirmPassword", {
                    required: true,
                    //   validate: (value) =>
                    //     value === passwordRef.current || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                              )}
                              {
                                  <span className="text-red-500">{error}</span>
                              }
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn bg-[#1D424F] hover:bg-[#c42a36]"
                />
              </div>
              <p className="text-center mt-2">
                Already have an account?{" "}
                <span className="link link-hover">
                  <Link to={"/login"}>Login</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

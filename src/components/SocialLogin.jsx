import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const saveUser = { name: user.displayName, email: user.email };
        fetch("https://linguo-lab-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then(() => {
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
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
    </div>
  );
};

export default SocialLogin;

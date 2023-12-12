import { ToastContainer, toast } from "react-toastify";
import { github, google } from "../assets/images";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/rescueNetSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Log out Successfully!");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-ful flex items-center justify-center gap-10  py-20 ">
      <div className="flex items-center flex-col gap-6 card bg-slate-400 px-14 py-20 ">
        <h2 className="font-semibold text-3xl text-white">
          Sign in as <span className="rescueNet">Rescue Team</span>
        </h2>
        <div className="w-full flex items-center justify-center gap-10">
          <div
            onClick={handleGoogleLogin}
            className="text-base hover:scale-105 w-60 h-12 tracking-wide border-[1px] bg-white border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
          >
            <img className="w-8" src={google} alt="" />
            <span>Sign in with Google</span>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-black text-white text-base py-3 px-8 tracking-wide
            rounded-md hover:bg-gray-800 duration-300"
          >
            Sign Out
          </button>
        </div>
        <div className="w-full flex items-center justify-center gap-10 ">
          <div
            onClick={handleGithubLogin}
            className="text-base hover:scale-105 w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300 bg-white"
          >
            <img className="w-8" src={github} alt="" />
            <span>Sign in with Github</span>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-black text-white text-base py-3 px-8 tracking-wide
            rounded-md hover:bg-gray-800 duration-300"
          >
            Sign Out
          </button>
        </div>
      </div>
      <div className="flex items-center flex-col gap-6 card bg-slate-400 px-14 py-20 relative">
        <div className="bg-black absolute top-0 left-0 w-full h-full opacity-80 z-10 rounded-xl"></div>
        <h2 className=" text-3xl absolute z-20 font-semibold uppercase  text-yellow-400 translate-y-8  ">
          Coming soon
        </h2>
        <h2 className="font-semibold text-3xl text-white">
          Sign in as <span className="text-red-700">Hospital</span>
        </h2>
        <div className="w-full flex items-center justify-center gap-10">
          <div
            onClick={handleGoogleLogin}
            className="text-base hover:scale-105 w-60 h-12 tracking-wide border-[1px] bg-white border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
          >
            <img className="w-8" src={google} alt="" />
            <span>Sign in with Google</span>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-black text-white text-base py-3 px-8 tracking-wide
            rounded-md hover:bg-gray-800 duration-300"
          >
            Sign Out
          </button>
        </div>
        <div className="w-full flex items-center justify-center gap-10 ">
          <div
            onClick={handleGithubLogin}
            className="text-base hover:scale-105 w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300 bg-white"
          >
            <img className="w-8" src={github} alt="" />
            <span>Sign in with Github</span>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-black text-white text-base py-3 px-8 tracking-wide
            rounded-md hover:bg-gray-800 duration-300"
          >
            Sign Out
          </button>
        </div>
      </div>

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Login;

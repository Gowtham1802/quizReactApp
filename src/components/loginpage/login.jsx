import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase";

import {useUser} from "../context"
import "../loginpage/login.css";



const LogIn = () => {
    const signInWithGoogle = async () => {
      const {user} = await signInWithGooglePopup();
      const userDocRef  = await createUserDocumentFromAuth(user);
    };

    const submitHandler = async (e) => 
}




const Login = () => {
  return (
    <div className="login-box">
      <div className="ip-container">
        <h1 className="text-center; text-[#00dfc4;] text-teal-400 font-extrabold">
          LOGIN
        </h1>
        {/* <div className="inputBox">
          <input type="text" required="required" />
          <span>USER NAME</span>
        </div> */}

        <div className="inputBox">
          <input type="tex" required="required" />
          <span>EMAIL ID</span>
        </div>
        <div className="inputBox">
          <input type="password" required="required" />
          <span>PassWord</span>
        </div>
        {/* <div className="inputBox">
          <input type="password" required="required" />
          <span>PHONE NUMBER</span>
        </div> */}
        <a href="question.jsx">
          <button className="text-teal-400 font-medium">Login</button>
        </a>
        <a href="question.jsx">
          <button className="text-teal-400 font-medium">Google SignIn</button>
        </a>

        {/* signin with google */}

        {/* const signInWithGoogle = async () => {
          const result = signInWithGooglePopup();
          console.log(result);
        } */}

        <a href="" className="text-teal-400 font-medium">
          New Users Register?
        </a>
        <p className="text-[#ccc;]"></p>
      </div>
    </div>
  );
};

export default Login;

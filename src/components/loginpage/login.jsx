import { useNavigate } from "react-router-dom";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase";

import { useUser } from "../context/context";
import "../loginpage/login.css";

const Login = () => {
  const navigation = useNavigate();
  console.log(useUser());
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    navigate(user);
  };

  const navigate = (user) => {
    if (user && user.emailVerified === true) {
      navigation("/components/dashboardpage");
    } else {
      alert("user mismatch");
    }
  };
  const { formFields, setFormFields, setUser } = useUser();
  console.log(useUser());
  const { displayName, email, password, confirmPassword } = formFields;

  const submitHandler = async (e) => {
    // e.preventDefault();
    console.log("hit");
    if (email && password) {
      try {
        const { user } = await signInAuthUserWithEmailAndPassword(
          email,
          password
        );
        console.log({ user });
        setFormFields({ email: "", password: "", confirmPassword: "" });

        if (user) {
          setUser(user.email, user.displayName);
          console.log(user.email);
          console.log(user.displayName);
        }
      } catch (err) {
        console.log("Error occured while login", err.message);
        console.log(err.code);
        if (err.code === "auth/invalid-credential") {
          alert("Invalid Credentials");
        }
      }
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="login-box">
      <div className="ip-container">
        <h1 className="text-center; text-[#00dfc4;] text-teal-400 font-extrabold">
          LOGIN
        </h1>

        <div className="inputBox">
          <input
            type="email"
            name="email"
            required="required"
            onChange={changeHandler}
          />
          <span>EMAIL ID</span>
        </div>
        <div className="inputBox">
          <input
            type="password"
            name="password"
            required="required"
            onChange={changeHandler}
          />
          <span>PassWord</span>
        </div>

        <a href="question.jsx">
          <button className="text-teal-400 font-medium" onClick={submitHandler}>
            Login
          </button>
        </a>
        <button
          className="text-teal-400 font-medium"
          onClick={signInWithGoogle}
        >
          Google SignIn
        </button>

        <a href="" className="text-teal-400 font-medium">
          New Users Register?
        </a>
        <p className="text-[#ccc;]"></p>
      </div>
    </div>
  );
};

export default Login;

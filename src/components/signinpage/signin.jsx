// import { signInWithGooglePopup } from "../firebase/index.jsx";

const Signin = () => {
  return (
    <div>
      <a href="form2.html">
        <button>SIGNUP</button>
      </a>
      <h1 className="text-center;">SignUp</h1>
      <div className="inputBox">
        <input type="text" required="required" />
        <span>First Name</span>
      </div>
      <div className="inputBox">
        <input type="text" required="required" />
        <span>Last Name</span>
      </div>
      <div className="inputBox">
        <input type="text" required="required" />
        <span>MailId</span>
      </div>
      <div className="inputBox">
        <input type="text" required="required" />
        <span>Phone Number</span>
      </div>
      <button className="btn-signUp"> SignUp</button>

      <a href="">
        <button
          className="text-teal-400 font-medium"
          // onClick={signInWithGoogle}
        >
          Google Sign In
        </button>
      </a>
    </div>
  );
};

export default Signin;

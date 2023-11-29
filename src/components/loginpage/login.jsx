import "../loginpage/login.css";

const Login = () => {
  return (
    <div>
      <div className="ip-container">
        <h1 className="text-center; text-[#00dfc4;] text-teal-400 font-extrabold">
          LOGIN
        </h1>
        <div className="inputBox">
          <input type="text" required="required" />
          <span>USER ID</span>
        </div>
        <div className="inputBox">
          <input type="password" required="required" />
          <span>PassWord</span>
        </div>
        <a href="question.jsx">
          <button className="text-teal-400 font-medium">Login</button>
        </a>
        <a href="">
          <button
            className="text-teal-400 font-medium"
            // onClick={signInWithGoogle}
          >
            Google Sign
          </button>
        </a>
        <a href="" className="text-teal-400 font-medium">
          Forget password?
        </a>
        <p className="text-[#ccc;]"></p>
      </div>
    </div>
  );
};
export default Login;

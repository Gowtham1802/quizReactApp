import "../components/login.css";

const LoginPage = () => {
  return (
    <div>
      <div className="ip-container">
        <h1 className="text-center; text-[#00dfc4;]">Login</h1>
        <div className="inputBox">
          <input type="text" required="required" />
          <span>Accound id</span>
        </div>
        <div className="inputBox">
          <input type="text" required="required" />
          <span>PassWord</span>
        </div>
        <a href="adminn.html">
          <button>LOGIN</button>
        </a>
        <a href="">Forget password?</a>
        <p className="text-[#ccc;]"></p>
        {/* <a href="form2.html">
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
        <button className="btn-signUp"> SignUp</button> */}
      </div>
    </div>
  );
};
export default LoginPage;

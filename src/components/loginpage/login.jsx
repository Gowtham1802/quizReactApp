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
          <input type="password" required="required" />
          <span>PassWord</span>
        </div>
        <a href="adminn.html">
          <button>LOGIN</button>
        </a>
        <a href="">Forget password?</a>
        <p className="text-[#ccc;]"></p> 
      </div>
    </div>
  );
};
export default LoginPage;

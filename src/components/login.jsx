const LoginPage = () => {
  return (
    <div>
      <div class="ip-container">
        <h1 style="text-align: center; color: #00dfc4;">Login</h1>
        <div class="inputBox">
          <input type="text" required="required" />
          <span>Accound id</span>
        </div>
        <div class="inputBox">
          <input type="text" required="required" />
          <span>PassWord</span>
        </div>
        <a href="adminn.html">
          <button>LOGIN</button>
        </a>
        <a href="">Forget password?</a>
        <p style="color: #fff;">
          New user click the below SIGNUP button to register
        </p>
        <a href="form2.html">
          <button>SIGNUP</button>
        </a>
        <h1 style="text-align: center;">SignUp</h1>
        <div class="inputBox">
          <input type="text" required="required" />
          <span>First Name</span>
        </div>
        <div class="inputBox">
          <input type="text" required="required" />
          <span>Last Name</span>
        </div>
        <div class="inputBox">
          <input type="text" required="required" />
          <span>MailId</span>
        </div>
        <div class="inputBox">
          <input type="text" required="required" />
          <span>Phone Number</span>
        </div>
        <button> SignUp</button>
      </div>
    </div>
  );
};
export default LoginPage;

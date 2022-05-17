import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.scss";

function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState();

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    general: "Usuário e/ou senha incorretos",
  };

  function handleSubmitLogin(event) {
    event.preventDefault();
    let { username, password } = document.forms[0];
    const user = database.find((user) => user.username === username.value);
    if (user) {
      if (user.password === password.value) {
        setErrorMessage(null);
        navigate("/home");
      } else {
        setErrorMessage(errors.general);
      }
    } else {
      setErrorMessage(errors.general);
    }
  }

  return (
    <section className="login">
      <div className="form">
        <form onSubmit={handleSubmitLogin}>
          {errorMessage && <div className="error">{errorMessage}</div>}
          <div className="input-container">
            <label>Usuário</label>
            <input type="text" name="username" required />
          </div>
          <div className="input-container">
            <label>Login</label>
            <input type="password" name="password" required />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;

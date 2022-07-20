import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/container/container";
import InputLogin from "../../components/input-login/input-login";
import InputPassword from "../../components/input-password/input-password";
import LoginSubmit from "../../components/login-submit/login-submit";
import { AuthContext } from "../../contexts/auth";

import "./login.scss";

const Login = () => {
  const { setToken } = useContext(AuthContext);
  // take form inputs values
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const [error, setError] = useState();

  const [loading, setLoading] = useState(false)


  // Form submit
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (emailValue && passwordValue) {
      setLoading(true)
      fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify({
          "email": emailValue,
          "password": passwordValue,
        }),
        headers: {
          "Content-Type": "application/json" 
        }
      })
        .then((res) => res.json())
        .then((data) => 
        {setToken(data.token)
        navigate("/")}
        )
        .catch(e => setError(e))
        .finally(() => setLoading(false))
    }
  };

  return (
    <>
      <header className="login-header">
        <Container>
          <h1 className="logo">BoburBlog</h1>
        </Container>
      </header>
      <section className="login-section">
        <Container className="login-container">
          <div className="login">
            <form onSubmit={handleFormSubmit} className="login-form" action="#">
              <h2 className="login-title">Login</h2>
              <InputLogin emailRef={emailRef} />
              <InputPassword passwordRef={passwordRef} />
              <LoginSubmit loading={loading} />
              <span className="error">{error}</span>
              <p>eve.holt@reqres.in</p>
              <p>cityslicka</p>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Login;

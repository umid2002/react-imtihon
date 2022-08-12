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

  // Navigate for Home Page
  const navigate = useNavigate();
  // Error
  const [error, setError] = useState(""); // Boshlangich qiymat berish shart...
  // Loading
  const [loading, setLoading] = useState(false)

  // take form inputs values
  const emailRef = useRef();
  const passwordRef = useRef();
  // Form submit
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    // Take input value
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    // Agar ikklasi ham true qaytarsa manashu function ishlasin.
    if (emailValue && passwordValue) {
      // setLoading(true)
      fetch("https://reqres.in/api/login", {
        method: "POST", // Agar GET bo`ladigan bo`lsa method yozish shart emas. POST qilganimiz uchun yozyabmiz ya`ni backendga ma`lumot yuboryabmiz. Agar ma`lumot to`g`ri bo`ladigan bo`lsa access beriladi bo`lmasa error qaytadi.
        body: JSON.stringify({ // Ma`lumotni yuborish jarayoni ya`ni inputni qiymatini yuborish.
          "email": emailValue,
          "password": passwordValue,
        }),
        headers: { // ??????????????
          "Content-Type": "application/json" 
        }
      })
        .then((res) => {
          if(res.ok){
            return res.json()
          }
        }) // Ma`lumot kelgandan keyin json formatga o`girsin.
        .then((data) => {
          setToken(data.token); // useState`dagi tokenni fetchdan keladigan tokenga o`zgartish. Kirish huquqini beradigan shifrlanga kod.
          navigate("/")
      }
        )
        .catch(e => setError(e.message)) // Agar ma`lumot kelmay qolsa errorni olish.
        .finally(() => setLoading(false)) // Tugallangandan keyin buttonni disablatini false qilish.
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
              <LoginSubmit loading={loading}  />
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

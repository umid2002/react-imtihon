import "./input-login.scss"

const InputLogin = ({emailRef}) => {
  return(
    <input ref={emailRef} className="input-login" type="email" placeholder="Login" />
  );
}
export default InputLogin;
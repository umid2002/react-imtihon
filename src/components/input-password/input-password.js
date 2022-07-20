import "./input-password.scss";

const InputPassword = ({passwordRef}) => {
  return (
    <input ref={passwordRef} className="input-password" type="password"  placeholder="Password" />
  );
}
export default InputPassword;
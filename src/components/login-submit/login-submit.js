import "./login-submit.scss"

const LoginSubmit = ({loading}) => {
  return (
    <button disabled={loading} type="submit" className="login-submit">Submit</button>
  );  
}

export default LoginSubmit;
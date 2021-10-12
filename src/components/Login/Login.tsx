import { SyntheticEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { Routes } from "~/constants";
import login from "~/services/login";
import { isPasswordValid } from "~/utils/validation/passwordValidation";
import { isUsernameValid } from "~/utils/validation/usernameValidation";
import ErrorBlock from "../ErrorBlock";
import LoadingScreen from "../LoadingScreen";
import "./login-style.scss";

const Login = () => {
  const { push } = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);

    try {
      if (!isUsernameValid(username)) {
        setErrorMessage(
          "Username must have 8-20 characters and no underscores or dots",
        );
      } else if (!isPasswordValid(password)) {
        setErrorMessage(
          "Password must have eight characters, at least one letter, one number and one special character",
        );
      } else {
        setIsLoading(true);
        await login(username, password);
        setIsLoading(false);
        push(Routes.Users);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="text-center">Mygom.tech</h1>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
          type="text"
          className="input mt-52px"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          type="password"
          className="input mt-24px"
        />
        <ErrorBlock error={errorMessage} />
        <button type="submit" className="button mt-24px">
          Login
        </button>
        {isLoading ? (
          <LoadingScreen text="Logging in..."></LoadingScreen>
        ) : null}
      </form>
    </div>
  );
};

export default Login;

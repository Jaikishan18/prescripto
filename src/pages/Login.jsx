import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

const Login = ({ setToken }) => {
  const [state, setState] = useState("Sign Up");
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (name.trim() === "") {
      validationErrors.name = "Name is required";
    }
    if (email.trim() === "") {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid";
    }
    if (password.trim() === "") {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }

    // If there are validation errors, set the errors state and don't proceed

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // console.log("validationErrors",validationErrors)
      return;
    }
    navigate("/");
    setToken(true);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="login_page">
        <p>{state === "Sign Up" ? "Create Account" : "Login"}</p>
        <p>
          Please {state === "Sign Up" ? "sign up" : "Login"}to book appointment
        </p>
        {state === "Sign Up" && (
          <div>
            <p>Full Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error text-danger">{errors.name}</p>}
          </div>
        )}
        <div>
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error text-danger">{errors.email}</p>}
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="error text-danger">{errors.password}</p>
          )}
        </div>
        {state === "Sign Up" ? (
          <button>Create account</button>
        ) : (
          <button>Login</button>
        )}
        <div></div>
        <p>
          Already have an account?
          {state === "Sign Up" ? (
            <span
              className="text-primary link-opacity-10 cursor"
              onClick={() =>  setState("Login")}
            >
              Login here
            </span>
          ) : (
            <span
              className="text-primary link-opacity-10 cursor"
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Create Account
            </span>
          )}
        </p>
      </div>
    </form>
  );
};

export default Login;

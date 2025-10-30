import { useState } from "react";
import { useNavigate } from "react-router";
import viewImg from "../assets/view.png";
import novViewImg from "../assets/no-view.png";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigation = useNavigate();
  const [viewPassword, setViewPassword] = useState(false);
  const handleLogin = () => {
    if (!email) {
      return alert("please enter email");
    }
    if (email?.length < 4) {
      return alert("please enter  proper email");
    }
    if (!email?.includes("@") || !email?.includes(".")) {
      return alert("please enter  proper email");
    }
    if (!password) {
      return alert("please enter password");
    }
    if (password?.length < 6) {
      return alert("Password must be of 6 char");
    } else {
      localStorage.setItem("login", email);
      Navigation("/home");
    }
  };

  const handlePasswordView = () => {
    setViewPassword(!viewPassword);
  };
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Login</h1>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "250px",
              height: "30px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "15px",
          }}
        >
          <span>Password</span>
          <div
            style={{
              position: "relative",
            }}
          >
            <input
              value={password}
              type={viewPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "250px",
                height: "30px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "9px",
                right: "5px",
                cursor: "pointer",
              }}
              onClick={handlePasswordView}
            >
              <img
                src={viewPassword ? novViewImg : viewImg}
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          <button
            style={{
              marginTop: "5px",
            }}
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            style={{
              marginTop: "5px",
            }}
            onClick={handleLogin}
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

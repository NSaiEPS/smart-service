import { useLayoutEffect } from "react";
import { useNavigate } from "react-router";

const ProtectedRoute = ({ children, login = false }) => {
  const Navigation = useNavigate();
  const userEmail = localStorage.getItem("login");

  const checkProtected = () => {
    if (login) {
      if (userEmail) {
        Navigation("/home");
        window.location.reload();
      }
    } else {
      if (!userEmail) {
        Navigation("/");
        window.location.reload();
      }
    }
  };
  useLayoutEffect(() => {
    checkProtected();
  }, []);
  return children;
  //   return <div>ProtectedRoute</div>;
};

export default ProtectedRoute;

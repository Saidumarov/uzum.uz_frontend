import { Navigate } from "react-router-dom";
import UserPage from "../UserPage";
import { Account } from "../../components";
import SignIn from "../../components/users/signin/index";
export function ProfileRoute() {
  try {
    const userLocal = localStorage.getItem("user");
    const logonUserLocal = localStorage.getItem("logonUser");

    const user = userLocal ? JSON.parse(userLocal) : null;
    const logonUser = logonUserLocal ? JSON.parse(logonUserLocal) : null;

    const selectedUser = user || logonUser;
    if (selectedUser && selectedUser.email) {
      return <UserPage />;
    }
  } catch (error) {
    console.error(error);
  }
  return <Navigate to="/signup" />;
}

export function SignInRoute() {
  try {
    const userLocal = localStorage.getItem("user");
    const logonUserLocal = localStorage.getItem("logonUser");

    const user = userLocal ? JSON.parse(userLocal) : null;
    const logonUser = logonUserLocal ? JSON.parse(logonUserLocal) : null;

    const selectedUser = user || logonUser;
    if (selectedUser && selectedUser.email) {
      return <UserPage /> && <Navigate to="/profil" />;
    }
  } catch (error) {
    console.error(error);
  }
  return <Navigate to="/signup" /> ? <SignIn /> : "";
}
export function AccountRoute() {
  try {
    const userLocal = localStorage.getItem("user");
    const logonUserLocal = localStorage.getItem("logonUser");

    const user = userLocal ? JSON.parse(userLocal) : null;
    const logonUser = logonUserLocal ? JSON.parse(logonUserLocal) : null;

    const selectedUser = user || logonUser;
    if (selectedUser && selectedUser.email) {
      return <Account />;
    }
  } catch (error) {
    console.error(error);
  }
  return <Navigate to="/signup" /> ? <SignIn /> : "";
}

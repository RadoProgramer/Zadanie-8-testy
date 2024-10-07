import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export function RestrictedRoute({ Component, redirectPath }) {
    const isLoggedIn = useSelector(selectIsLoggedIn);
	return isLoggedIn ? <Navigate to={redirectPath} /> : Component;
}

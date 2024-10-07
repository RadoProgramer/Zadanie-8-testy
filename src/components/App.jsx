import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegistration, userLogin } from "../redux/slices/authSlice";
import RegistrationForm from "../components/RegistrationForm";
import LoginForm from "../components/LoginForm";
import ContactsPage from "../pages/Contacts";
import HomePage from "../pages/Home";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { token } = useSelector((state) => state.auth);

	return token ? <Component {...rest} /> : <Navigate to="/login" />;
};

const App = () => {
	const dispatch = useDispatch();

	const handleRegisterSubmit = (values) => {
		dispatch(userRegistration(values));
	};

	const handleLoginSubmit = (values) => {
		dispatch(userLogin(values));
	};

	return (
		<Router>
			<Routes>
				{}
				<Route
					path="/register"
					element={<RegistrationForm onSubmit={handleRegisterSubmit} />}
				/>
				{}
				<Route
					path="/login"
					element={<LoginForm onSubmit={handleLoginSubmit} />}
				/>
				{}
				<Route
					path="/contacts"
					element={<PrivateRoute component={ContactsPage} />}
				/>
				{}
				<Route path="/" element={<HomePage />} />
			</Routes>
		</Router>
	);
};

export default App;

import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { lazy } from "react";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const HomePage = lazy(() => import("../pages/Home"));
const ContactsPage = lazy(() => import("../pages/Contacts"));
const LoginPage = lazy(() => import("../pages/Login"));
const RegisterPage = lazy(() => import("../pages/Register"));

function App() {
	return (
		<SharedLayout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/contacts" element={<PrivateRoute redirectPath="/login" Component={<ContactsPage />} />} />
				<Route
					path="/login"
					element={
						<RestrictedRoute
							redirectPath="/contacts"
							Component={<LoginPage />}
						/>
					}
				/>
				<Route path="/register" element={<RestrictedRoute
							redirectPath="/contacts"
							Component={<RegisterPage />}
						/>} />
			</Routes>
		</SharedLayout>
	);
}

export default App;

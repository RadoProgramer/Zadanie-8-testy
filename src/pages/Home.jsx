import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div style={{ textAlign: "center", padding: "50px" }}>
			<h1>Welcome to the Contacts App</h1>
			<p>
				You can <Link to="/register">Register</Link> or{" "}
				<Link to="/login">Login</Link> to start managing your contacts.
			</p>
		</div>
	);
};

export default HomePage;

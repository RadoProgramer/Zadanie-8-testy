import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Contacts App!</h1>
      <p>This is a simple application to manage your contacts.</p>
      
      <div>
        <h2>Get Started</h2>
        <p>
          <Link to="/register">Register</Link> {/* Link do strony rejestracji */}
        </p>
        <p>
          <Link to="/login">Login</Link> {/* Link do strony logowania */}
        </p>
      </div>
    </div>
  );
};

export default Home;

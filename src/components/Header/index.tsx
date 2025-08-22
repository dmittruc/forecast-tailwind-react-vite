import { Link } from 'react-router';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav>
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/details">Details</Link>
      </nav>
    </header>
  );
};

export default Header;

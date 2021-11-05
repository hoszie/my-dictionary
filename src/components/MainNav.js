import { Link } from "react-router-dom";

const MainNav = () => {
  return (
  <header>
    <div>
      <h1>My Dictionary</h1>
    </div>
    <h3>This is my first project - my online dictionary</h3>
    <nav>
      <ul>
        <li>
          <Link to="/">Dictionary</Link>
        </li>
        <li>
          <Link to="/new-word">New Word</Link>
        </li>
        <li>
          <Link to="/word-of-day">Daily Word</Link>
        </li>
      </ul>
    </nav>
  </header>
  );
};

export default MainNav;

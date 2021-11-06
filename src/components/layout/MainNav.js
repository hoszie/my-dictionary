import { Link } from "react-router-dom";

import styles from "./MainNav.module.css";

const MainNav = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>My Dictionary</div>
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

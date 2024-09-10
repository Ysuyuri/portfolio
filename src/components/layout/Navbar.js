import Container from "./Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "./Navbar.module.css";
import me from "../../img/me.png";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img className={styles.logo} src={me} alt="Me" />
      </Link>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Início</Link>
        </li>
        <li className={styles.item}>
          <Link to="/">Projetos</Link>
        </li>
        <li className={styles.item}>
          <Link to="/">Contato</Link>
        </li>
        <li className={styles.item}>
          <Link to="https://github.com/Ysuyuri">{<FaGithub size={44} />}</Link>
        </li>
        <li className={styles.item}>
          <Link to="https://www.linkedin.com/in/rafaelnascimento0/">
            {<FaLinkedin size={44} />}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

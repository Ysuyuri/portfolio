import Container from "./Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "./Navbar.module.css";
import me from "../../img/me.png";

import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img className={styles.logo} src={me} alt="Me" />
      </Link>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/" smooth={true} duration={500}>
            Início
          </Link>
        </li>
        <li className={styles.item}>
          <Scroll
            to="experience"
            smooth={true}
            duration={500}
            className={styles.scroll}
          >
            Experiências
          </Scroll>
        </li>
        <li className={styles.item}>
          <Scroll
            to="know"
            smooth={true}
            duration={500}
            className={styles.scroll}
          >
            Conhecimentos
          </Scroll>
        </li>
        <li className={styles.item}>
          <Scroll
            to="Project"
            smooth={true}
            duration={500}
            className={styles.scroll}
          >
            Projetos
          </Scroll>
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

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li className={styles.link}>
          <Link to="https://www.facebook.com/rafinhald3/">
            {<FaFacebook />}
          </Link>
        </li>
        <li className={styles.link}>
          <Link to="https://www.instagram.com/faeelmeira/">
            {<FaInstagram />}
          </Link>
        </li>
        <li className={styles.link}>
          <Link to="https://github.com/Ysuyuri">{<FaGithub />}</Link>
        </li>
        <li className={styles.link}>
          <Link to="https://www.linkedin.com/in/rafaelnascimento0/">
            {<FaLinkedin />}
          </Link>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Rafael Meira</span> &copy; 2024
      </p>
    </footer>
  );
}

export default Footer;

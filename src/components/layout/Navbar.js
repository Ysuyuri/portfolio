import Container from "./Container";
import { FaListUl, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";

import styles from "./Navbar.module.css";
import me from "../../img/me.png";

import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

  const [toggleOpen, setToggleOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const toggleMenu = () => {
    setToggleOpen(!toggleOpen);
  }

  const mobile = () => {
    if(window.innerWidth <= 450) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const handleClick = () => {
    setToggleOpen(false)
  }

  useEffect(() => {
    setToggleOpen(false)
    mobile();
    window.addEventListener('resize', mobile);
    return () => {
      window.removeEventListener('resize', mobile)
    }
  },[])

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img className={styles.logo} src={me} alt="Me" />
      </Link>
      <ul className={`${styles.list} ${toggleOpen ? styles.open : ''}`}>
        <li className={styles.item}>
          <Link to="/" smooth={true} duration={500} onClick={handleClick}>
            Início
          </Link>
        </li>
        <li className={styles.item}>
          <Scroll
            to="experience"
            smooth={true}
            duration={500}
            className={styles.scroll}
            onClick={handleClick}
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
            onClick={handleClick}
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
            onClick={handleClick}
          >
            Projetos
          </Scroll>
        </li>
        {!isMobile 
        ? 
        <>
          <li className={styles.item}>
          <Link to="https://github.com/Ysuyuri">{<FaGithub size={44} />}</Link>
          </li>
          <li className={styles.item}>
            <Link to="https://www.linkedin.com/in/rafaelnascimento0/">
              {<FaLinkedin size={44} />}
            </Link>
          </li>
        </>
        :
        <>
          <li className={styles.item}>
          <Link to="https://github.com/Ysuyuri" smooth={true} duration={500}>
            Github
          </Link>
          </li>
          <li className={styles.item}>
          <Link to="https://www.linkedin.com/in/rafaelnascimento0/" smooth={true} duration={500}>
            Linkedin
          </Link>
          </li>
        </>
        }
      </ul>
      {isMobile ? !toggleOpen 
      ?
      <div className={styles.toggle} onClick={toggleMenu}>
        <FaListUl size={30}/>
      </div>
      :
      <div className={styles.toggle} onClick={toggleMenu}>
        <FaTimes size={30}/>
      </div>
      :
      <></>
      }
    </nav>
  );
}

export default Navbar;

import styles from "./Home.module.css";
import me from "../../img/me.png";
import background from "../../img/background.png";
import icon from "../../img/code_icon.png";

import LinkButton from "../form/LinkButton"
import ProjectCard from "../form/ProjectCard";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

function Home() {

  const [loading, setLoading] = useState(true)
  const [projeto, setProjeto] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/Projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      setLoading(false)
      setProjeto(data.sort((a, b) => a.id - b.id).slice(0, 6));
    })
    .catch((err) => console.log(err))
  },[])

  return (
    <div className={styles.home_container}>
      <section
        id="apresentacao"
        className={styles.content}
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.section}>
          <motion.div className={styles.text} initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x:0}} transition={{duration: 1, delay: 0.5}} viewport={{once: true}}>
            <h1>
              <span>R</span>AFAE
              <span>L</span>
            </h1>
            <h1>
              <span>M</span>EIR
              <span>A</span>
            </h1>
          </motion.div>
          <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} whileHover={{scale: 1.1}} transition={{duration: 0.5, delay: 0.3, ease: [0, 0.71, 0.2, 1.01]}}>
            <img src={me} alt="Me" className={styles.image} />
          </motion.div>
        </div>
        <motion.div className={styles.especializacao} initial={{opacity: 0, y:-50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0.8}}>
          <h1>PROGRAMADOR WEB</h1>
        </motion.div>
      </section>
      <section id="aboutMe" className={styles.content_color2}>
        <motion.div className={styles.title} initial={{opacity: 0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 1, delay: 0.1}} viewport={{once:true}}>
          <h1>SOBRE MIM</h1>
        </motion.div>
        <div className={styles.section_2}>
          <motion.div className={styles.aboutMe} initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.4}} viewport={{once:true}}>
            <h1>RESUMO PROFISSIONAL</h1>
            <p>
              Trabalhando na área de suporte, tive inúmeras experiências onde tive que resolver problema sobre pressão. Junto a isso, eu tive inúmeras experiências com desenvolvimento de projetos nos lugares onde trabalhei, onde trabalhei programando para Mobile me utilizando de tecnologias como React Native (programando em Typescript) ou projetos em Excel me utilizando do VBA.
            </p>
            <h1>FOCO PROFISSIONAL</h1>
            <p>
              Procuro me expecializar em linguagem WEB, onde no momento procuro aperfeiçoar minhas habilidades com Javascript, HTML e CSS. Junto a isso, estou desenvolvendo projetos para aperfeiçoar ainda mais meus conhecimentos sobre API's, Banco de Dados relacionais e não relacionais, além de estar focado em melhorar minhas habilidades com testes individuais. Em paralelo, estou também estudando inglês e buscando a fluência na língua.
            </p>
          </motion.div>
          <motion.div initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.4}} viewport={{once:true}}>
            <img src={icon} alt="Icon" className={styles.icon} />
          </motion.div>
        </div>
      </section>
      <section id="Project" className={styles.content}>
          <div className={styles.title}>
            <h1>MEUS PROJETOS</h1>
          </div>
          <div className={styles.projetos_Container}>
            <div className={styles.projetos_itens}>
              {projeto.map((projeto) => (
                <ProjectCard 
                img={projeto.img}
                titulo={projeto.titulo}
                desc={projeto.desc}
                />
              ))}
            </div>
            <LinkButton text="Ver mais" to="./projetos"/>
          </div>
      </section>
    </div>
  );
}

export default Home;

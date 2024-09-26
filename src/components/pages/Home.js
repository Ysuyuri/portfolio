import styles from "./Home.module.css";
import me from "../../img/me.png";
import background from "../../img/background.png";
import icon from "../../img/code_icon.png";

import LinkButton from "../form/LinkButton"
import ProjectCard from "../form/ProjectCard";
import { useEffect, useState } from "react";

import { color, motion } from "framer-motion";
import KnowledgeCard from "../form/KnowledgeCard";

function Home() {

  const [loading, setLoading] = useState(true)
  const [projeto, setProjeto] = useState([])
  const [knowledge, setKnowledge] = useState([])
  const [aboutMe, setAboutMe] = useState(false)

  useEffect(() => {
    fetch("http://localhost:5000/Projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      setProjeto(data.sort((a, b) => a.id - b.id).slice(0, 6));
    })
    .catch((err) => console.log(err))

    fetch("http://localhost:5000/Knowledge", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      setLoading(false)
      setKnowledge(data)
    })
    .catch((err) => console.log(err))
  },[])

  return (
    <div className={styles.home_container}>
      <section id="apresentacao" className={styles.content}>
        <div className={styles.section}>
          <motion.div className={styles.text} initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x:0}} transition={{duration: 1, delay: 0.5}} viewport={{once: true}}>
            <h1>Olá, eu me chamo <span>Rafael Meira!</span></h1>
            <p>Sou desenvolvedor Web, com foco em Back e Front end.</p>
            <h2>Para transitar entre informações pessoais e profissionais, <span onClick={() => setAboutMe(!aboutMe)} style={{ cursor: "pointer" }}>clique aqui.</span></h2>
          </motion.div>
        <div className={styles.imageContainer}>
        {!aboutMe && 
          <>
          <motion.div className={styles.aboutMe} initial={{opacity: 0, x: -100, scale: 1}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.4}} viewport={{once:true}}>
            <h1>Sobre mim</h1>
            <p>
              Trabalhando na área de suporte, tive inúmeras experiências onde tive que resolver problema sobre pressão. Junto a isso, eu tive inúmeras experiências com desenvolvimento de projetos nos lugares onde trabalhei, onde trabalhei programando para Mobile me utilizando de tecnologias como React Native (programando em Typescript) ou projetos em Excel me utilizando do VBA.
            </p>
          </motion.div>
          </>}
          <motion.img initial={{opacity: 0, scale: 0.5}} animate={aboutMe ? {x: [-100, -10], opacity: 1, scale: 1} : {x: [100, 10], opacity: 1, scale: 1}} whileHover={{scale: 1.1}} transition={{duration: 1, ease: "easeInOut"}} src={me} alt="Rafael" className={styles.image} onClick={() => setAboutMe(!aboutMe)}/>
          {aboutMe && 
          <>
          <motion.div className={styles.aboutMe} initial={{opacity: 0, x: -100, scale: 1}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.4}} viewport={{once:true}}>
            <h1>RESUMO PROFISSIONAL</h1>
            <p>
              Trabalhando na área de suporte, tive inúmeras experiências onde tive que resolver problema sobre pressão. Junto a isso, eu tive inúmeras experiências com desenvolvimento de projetos nos lugares onde trabalhei, onde trabalhei programando para Mobile me utilizando de tecnologias como React Native (programando em Typescript) ou projetos em Excel me utilizando do VBA.
            </p>
          </motion.div>
          </>}
        </div>
        </div>
      </section>
      <section id="aboutMe" className={styles.content}>
        <motion.div className={styles.title} initial={{opacity: 0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 1, delay: 0.1}} viewport={{once:true}}>
          <h1>Conhecimentos</h1>
          <p>Estabeleci um conhecimento concreto com varias tecnologias, onde pude aplica-las em projetos, tais como <span>React Native, React, Typescript, Javascript, Firebase, SQL, VBA, </span>entre outras.</p>
        </motion.div>
        <div className={styles.conhecimentos_Container}>
          {!loading ?
          knowledge.map((knowledge) => (
            <KnowledgeCard 
            img={knowledge.img}
            titulo={knowledge.titulo}
            />
          ))
          :
          <h1>Loading</h1>
          }
          <h1>hi</h1>
        </div>
      </section>
      <section id="Project" className={styles.content}>
          <div className={styles.title}>
            <h1>MEUS PROJETOS</h1>
          </div>
          <div className={styles.projetos_Container}>
            <div className={styles.projetos_itens}>
              {!loading ?
              projeto.map((projeto) => (
                <ProjectCard 
                img={projeto.img}
                titulo={projeto.titulo}
                desc={projeto.desc}
                />
              ))
              :
              <h1 style={color}>Loading...</h1>}
            </div>
            {!loading && <LinkButton text="Ver mais" to="./projetos"/>}
          </div>
      </section>
    </div>
  );
}

export default Home;

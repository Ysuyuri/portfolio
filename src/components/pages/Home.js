import styles from "./Home.module.css";
import me from "../../img/me.png";
import background from "../../img/background.png";

import LinkButton from "../form/LinkButton";
import ProjectCard from "../form/ProjectCard";
import { useEffect, useState } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";

import { color, motion } from "framer-motion";
import KnowledgeCard from "../form/KnowledgeCard";
import WorkCard from "../form/WorkCard";

function Home() {
  const [loading, setLoading] = useState(true);
  const [projeto, setProjeto] = useState([]);
  const [knowledge, setKnowledge] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [know, setknow] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/Projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjeto(data.sort((a, b) => a.id - b.id).slice(0, 4));
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:5000/Knowledge", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setKnowledge(data);
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:5000/Experience", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setLoading(false);
        setExperiences(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h1>
              Olá, eu me chamo <span>Rafael Meira!</span>
            </h1>
            <p>Sou desenvolvedor Web, com foco em Back e Front end.</p>
            <h2>
              Para transitar entre informações pessoais e profissionais,{" "}
              <span
                onClick={() => setknow(!know)}
                style={{ cursor: "pointer" }}
              >
                clique aqui.
              </span>
            </h2>
          </motion.div>
          <div className={styles.imageContainer}>
            {!know && (
              <>
                <motion.div
                  className={styles.know}
                  initial={{ opacity: 0, x: -100, scale: 1 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h1>Sobre mim</h1>
                  <p>
                    Sou desenvolvedor web com foco em React e Node.js, buscando
                    sempre melhorar minhas habilidades e acompanhar as inovações
                    tecnológicas. No momento, estou avançando no inglês e
                    estudando cybersecurity para integrar mais segurança às
                    minhas soluções.
                  </p>
                </motion.div>
              </>
            )}
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                know
                  ? { x: [-100, -10], opacity: 1, scale: 1 }
                  : { x: [100, 10], opacity: 1, scale: 1 }
              }
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              src={me}
              alt="Rafael"
              className={styles.image}
              onClick={() => setknow(!know)}
            />
            {know && (
              <>
                <motion.div
                  className={styles.know}
                  initial={{ opacity: 0, x: -100, scale: 1 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h1>Resumo Profissional</h1>
                  <p>
                    Sou um desenvolvedor web dedicado, com sólida formação em
                    suporte de TI, programação e automação de processos. Com uma
                    graduação em Sistemas de Informação e experiência prática em
                    desenvolvimento web utilizando JavaScript, TypeScript e
                    React Native, tenho como foco criar soluções eficientes,
                    escaláveis e intuitivas. Possuo um profundo conhecimento em
                    tecnologias de backend, como SQL Server e Firebase, além de
                    expertise na automação de processos com VBA e Python. Também
                    tenho experiência na construção de dashboards com Power BI e
                    na integração de soluções orientadas a dados. Minha
                    experiência abrange ainda a manutenção de redes,
                    administração de sistemas e desenvolvimento mobile.
                  </p>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </section>

      <section id="experience" className={styles.experience}>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h1>Experiência de Trabalho.</h1>
          <div style={{ marginTop: "3%" }}>
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <WorkCard key={`experience-${index}`} experience={experience} />
              ))}
            </VerticalTimeline>
          </div>
        </motion.div>
      </section>

      <section id="know" className={styles.experience}>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h1>Conhecimentos.</h1>
          <h2>
              Estabeleci um conhecimento concreto com varias tecnologias, onde
              pude aplica-las em projetos, tais como{" "}
              <span
                onClick={() => setknow(!know)}
                className={styles.destaque}
              >
                React Native, React, Typescript, Javascript, Firebase, SQL, VBA,{" "}
              </span>
              entre outras.
            </h2>
        </motion.div>
        <div className={styles.conhecimentos_Container}>
          {!loading ? (
            knowledge.map((knowledge) => (
              <KnowledgeCard img={knowledge.img} titulo={knowledge.titulo} />
            ))
          ) : (
            <h1>Loading</h1>
          )}
          <h1>hi</h1>
        </div>
      </section>
      <section id="Project" className={styles.projetos_Container}>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h1>Meus Projetos.</h1>
          <h2>
          Para acessar todos os projetos, clique em{" "}
              <span
                onClick={() => setknow(!know)}
                className={styles.destaque}
              >
                ver mais{" "}
              </span>
              localizado no final dos projetos apresentados abaixo.
            </h2>
        </motion.div>
        <div className={styles.projetos_itens}>
            {!loading ? (
              projeto.map((projeto) => (
                <ProjectCard
                  img={projeto.img}
                  titulo={projeto.titulo}
                  desc={projeto.desc}
                  codigo={projeto.codigo}
                />
              ))
            ) : (
              <h1 style={color}>Loading...</h1>
            )}
        </div>
        {!loading && <LinkButton text="Ver mais" to="./projetos" />}
      </section>
    </div>
  );
}

export default Home;

import styles from "./Home.module.css";
import background from "../../img/background.png";

import LinkButton from "../form/LinkButton";
import ProjectCard from "../form/ProjectCard";
import { useState } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";

import { motion } from "framer-motion";
import KnowledgeCard from "../form/KnowledgeCard";
import WorkCard from "../form/WorkCard";
import Terminal from "../form/Terminal";

import db from "../../data/db.json"

function Home() {
  const [projeto, setProjeto] = useState(db.Projects);
  const [knowledge, setKnowledge] = useState(db.Knowledge);
  const [experiences, setExperiences] = useState(db.Experience);

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
            <p>Sou estudante de Cybersecurity, com foco em <span>Redteam</span> e <span>Blueteam</span>.</p>
          </motion.div>
          <div className={styles.imageContainer}>
            <motion.div
              animate={{
              x: [100, 10], opacity: 1, scale: 1 
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            > 
              <Terminal />
            </motion.div>
                <motion.div
                  className={styles.know}
                  initial={{ opacity: 0, x: -100, scale: 1 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h1>Sobre mim</h1>
                  <p>
                    Profissional de Cybersecurity com foco em segurança ofensiva e defensiva, 
                    atuando na identificação, exploração e mitigação de vulnerabilidades em ambientes reais. 
                    Possuo experiência prática com análise de tráfego de rede, port scanning, 
                    testes de intrusão, exploração de serviços, shells remotas e análise de logs para 
                    detecção e resposta a incidentes. Atualmente estou buscando aprofundar meus conhecimentos
                    em arquitetura de sistemas, redes e práticas de defesa, com objetivo de fortalecer a postura de segurança
                    de ambientes corporativos.
                  </p>
                </motion.div>
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
            Estabeleci um conhecimento concreto de {" "}
            <span className={styles.destaque}>
              Protocolo TCP/IP, UDP, FTP, SSH, Analise de Log com Wireshark, terminal Linux, Python, Parâmetros
              WEB (GET, POST, etc), SQLi, XSS, LFI, RFI, Buffer Overflow, {" "}
            </span>
            entre outros conhecimentos que são necessários para minha base de conhecimento. 
            Além disso, tenho conhecimento prático com laboratórios reais feitos pela empresa DESEC, 
            além de experiência com CTF's.
          </h2>
        </motion.div>
        <div className={styles.conhecimentos_Container}>
          {knowledge.map((knowledge) => (
              <KnowledgeCard img={knowledge.img} titulo={knowledge.titulo} />
            ))}
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
            <span className={styles.destaque}>
              ver mais{" "}
            </span>
            localizado no final dos projetos apresentados abaixo, ou caso queira
            acessar os projetos abaixo, basta clicar neles para ser
            redirecionado para sua página.
          </h2>
        </motion.div>
        <div className={styles.projetos_itens}>
          {projeto.map((projeto) => (
              <ProjectCard
                img={projeto.img}
                titulo={projeto.titulo}
                desc={projeto.desc}
                codigo={projeto.codigo}
                link={projeto.link}
              />
            ))
          }
        </div>
          <LinkButton text="Ver mais" to="./projetos" />
      </section>
    </div>
  );
}

export default Home;

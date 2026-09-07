import { useState } from "react";
import styles from "./Projetos.module.css";
import ProjectCard from "../form/ProjectCard";
import db from "../../data/db.json"

import { motion } from "framer-motion";

function Projetos() {
  const [project] = useState(db.Projects);

  return (
    <div className={styles.container}>
      <div className={styles.cabecalho}>
        <motion.div
          className={styles.titulo}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1>PROJETOS</h1>
          <p>
            Para acessar os projetos, basta clicar em cima de qualquer um deles
            que você será redirecionado para a página do projeto escolhido.
          </p>
        </motion.div>
        {/* espaço para imagem que ficará ao lado do título */}
      </div>
      <div className={styles.projetos}>
        {project.map((project) => (
          <ProjectCard
            img={project.img}
            titulo={project.titulo}
            desc={project.desc}
            codigo={project.codigo}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projetos;

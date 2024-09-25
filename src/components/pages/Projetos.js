import { useEffect, useState } from "react"
import styles from "./Projetos.module.css"
import ProjectCard from "../form/ProjectCard"

import { motion } from "framer-motion"

function Projetos() {

    const [project, setProject] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/Projects", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data);
        })
        .catch((err) => console.log(err))
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.cabecalho}>
                <motion.div className={styles.titulo} initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }} viewport={{once: true}}>
                    <h1>PROJETOS</h1>
                    <p>Para acessar os procejos, basta clicar em cima de qualquer um deles que você será redirecionado para a página do projeto escolhido.</p>
                </motion.div>
                {/* espaço para imagem que ficará ao lado do título */}
            </div>
            <div className={styles.projetos}>
                {project.map((project) => (
                    <ProjectCard
                    img={project.img}
                    titulo={project.titulo}
                    desc={project.desc}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projetos
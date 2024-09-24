import { useEffect, useState } from "react"
import styles from "./Projetos.module.css"
import ProjectCard from "../form/ProjectCard"

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
                <div className={styles.titulo}>
                    <h1>PROJETOS</h1>
                    <p>Para acessar os procejos, basta clicar em cima de qualquer um deles que você será redirecionado para a página do projeto escolhido.</p>
                </div>
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
import styles from "./ProjectCard.module.css"

import { motion } from "framer-motion"

function ProjectCard({ img, titulo, desc }) {
    return (
        <motion.div className={styles.projeto} initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} whileHover={{scale: 1.2}} transition={{duration: 0.2, delay: 0.2}} viewport={{once:true}}>
            <div className={styles.projeto_imagem} >
                <p>{img}</p>
            </div>
            <div className={styles.projeto_texto}>
                <h2>{titulo}</h2>
                <p>{desc}</p>
            </div>
        </motion.div>
    )
}

export default ProjectCard
import styles from "./KnowledgeCard.module.css";
import { color, motion } from "framer-motion";

function KnowledgeCard({ img, titulo }) {
  return (
    <motion.div
      className={styles.content}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.2, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className={styles.image}>
        <img src={img} alt={titulo} className={styles.img} />
      </div>
      <div className={styles.texto}>
        <h2>{titulo}</h2>
      </div>
    </motion.div>
  );
}

export default KnowledgeCard;

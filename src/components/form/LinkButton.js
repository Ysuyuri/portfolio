import styles from "./Button.module.css";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

function LinkButton({ text, to }) {
  return (
    <motion.div
      className={styles.form}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <Link className={styles.btn} to={to}>
        {text}
      </Link>
    </motion.div>
  );
}

export default LinkButton;

import styles from "./Home.module.css";
import me from "../../img/me.png";

function Home() {
  return (
    <div className={styles.home_container}>
      <section className={styles.content}>
        <div className={styles.nome}>
          <h1>
            <span>R</span>AFAE
            <span>L</span>
          </h1>
          <h1>
            <span>M</span>EIR
            <span>A</span>
          </h1>
        </div>
        <img src={me} alt="Me" className={styles.image} />
      </section>
      <div className={styles.especializacao}>
        <h1>PROGRAMADOR FULL STACK</h1>
      </div>
    </div>
  );
}

export default Home;

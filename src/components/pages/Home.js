import styles from "./Home.module.css";
import me from "../../img/me.png";
import background from "../../img/background.png";

function Home() {
  return (
    <div className={styles.home_container}>
      <section
        id="apresentacao"
        className={styles.content}
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className={styles.section}>
          <div className={styles.text}>
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
        </div>
        <div className={styles.especializacao}>
          <h1>PROGRAMADOR FULL STACK</h1>
        </div>
      </section>
      <section id="aboutMe" className={styles.content_color2}>
        <h1>about me</h1>
      </section>
      <section id="Project" className={styles.content}>
        <h1>project</h1>
      </section>
    </div>
  );
}

export default Home;

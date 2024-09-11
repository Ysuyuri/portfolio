import styles from "./Home.module.css";
import me from "../../img/me.png";
import background from "../../img/background.png";
import icon from "../../img/code_icon.png";

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
        <div className={styles.title}>
          <h1>SOBRE MIM</h1>
        </div>
        <div className={styles.section_2}>
          <div className={styles.aboutMe}>
            <h1>RESUMO PROFISSIONAL</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <h1>FOCO PROFISSIONAL</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <h1>CONTATO</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
          <img src={icon} alt="Icon" className={styles.icon} />
        </div>
      </section>
      <section id="Project" className={styles.content}>
        <h1>project</h1>
      </section>
    </div>
  );
}

export default Home;

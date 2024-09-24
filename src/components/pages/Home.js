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
          <h1>PROGRAMADOR</h1>
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
              Trabalhando na área de suporte, tive inúmeras experiências onde tive que resolver problema sobre pressão. Junto a isso, eu tive inúmeras experiências com desenvolvimento de projetos nos lugares onde trabalhei, onde trabalhei programando para Mobile me utilizando de tecnologias como React Native (programando em Typescript) ou projetos em Excel me utilizando do VBA.
            </p>
            <h1>FOCO PROFISSIONAL</h1>
            <p>
              Procuro me expecializar em linguagem WEB, onde no momento procuro aperfeiçoar minhas habilidades com Javascript, HTML e CSS. Junto a isso, estou desenvolvendo projetos para aperfeiçoar ainda mais meus conhecimentos sobre API's, Banco de Dados relacionais e não relacionais, além de estar focado em melhorar minhas habilidades com testes individuais. Em paralelo, estou também estudando inglês e buscando a fluência na língua.
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

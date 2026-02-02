import { useEffect, useState } from "react";
import styles from "./Terminal.module.css";

export default function TerminalMock() {
  const commandText = "hostname";
  const outputText = "Rafael-Meira";

  const [typed, setTyped] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      if (index >= commandText.length) {
        clearInterval(typing);

        setTimeout(() => {
          setShowOutput(true);
          setTimeout(() => setShowPrompt(true), 400);
        }, 500);

        return;
      }

      setTyped((prev) => prev + commandText[index]);
      index++;
    }, 120);

    return () => clearInterval(typing);
  }, []);


  return (
    <div className={styles.terminalWindow}>
      <div className={styles.terminalHeader}>
        <div className={`${styles.circle} ${styles.close}`} />
        <div className={`${styles.circle} ${styles.minimize}`} />
        <div className={`${styles.circle} ${styles.maximize}`} />
        <div className={styles.terminalTitle}>root@root: /</div>
      </div>

      <div className={styles.terminalBody}>
        <div className={styles.line}>
          <span className={styles.prompt}>root@root:~$</span>
          <div className={styles.code}>{typed}</div>
          {!showOutput && <span className={styles.cursor} />}
        </div>

        {showOutput && (
          <>
            <div className={styles.line}>{outputText}</div>
            {showPrompt && (
              <div className={styles.line}>
                <span className={styles.prompt}>root@root:~$</span>
                <span className={styles.cursor} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
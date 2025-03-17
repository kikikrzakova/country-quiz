
import styles from "./Header.module.css"
import { useScore } from "./ScoreContext"

export default function Header(){
    const {score} = useScore();
    return <header className={styles.headerContainer}>
        <h1 className={styles["dm-sans-header"]}>Country Quiz</h1>
        <button className={styles['score-button']}>🏆 {score}/10 Points</button>
    </header>
}
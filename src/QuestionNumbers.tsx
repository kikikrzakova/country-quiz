import { ReactNode } from "react";
import styles from './QuestionNumbers.module.css'

export default function QuestionNumbers({setCurrentQuestion}){
    const numberButtons: Array<ReactNode> = [];
    for (let i = 0; i < 10; i += 1){
        numberButtons.push(<button type="button" className={styles.numberButton} key={i} onClick={()=>setCurrentQuestion(i)}>{i+1}</button>)
    }
    return (
        <div className={styles.buttonContainer}>
            {numberButtons}
        </div>
    )
}
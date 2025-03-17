import Header from "./Header";
import styles from './Layout.module.css'
import QuizContainer from "./QuizContainer";

export default function Layout(){
    return (
        <div className={styles.container}>

            <Header/>
            <QuizContainer/>
        </div>
    )
}
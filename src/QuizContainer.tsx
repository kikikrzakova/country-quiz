import { JSX, useEffect, useState } from 'react'
import styles from './QuizContainer.module.css'
import QuestionNumbers from './QuestionNumbers';
import Question from './Question';

export default function QuizContainer(){
    const [data, setData] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [allQuestions, setAllQuestions] = useState([]);
    useEffect(() =>{
        async function fetchData() {
            const response = await fetch('https://restcountries.com/v3.1/all')
            const countries = await response.json();

            // two types of questions
            const questions: string[] = [
                `Which country does this flag {flag} belong to?`,
                `Which country is {city} the capital?`
            ]
            const tenIndices = new Set();
            while (tenIndices.size < 10) {
                tenIndices.add(Math.trunc(Math.random() * 250));
            }
            const tenQuestions: (string | JSX.Element)[] = [];
            tenIndices.forEach((countryIndex: number) => {
                const questionIndex = Math.floor(Math.random() *2);
                const question = questions[questionIndex];
                // console.log(question, countries[countryIndex].name.common);
                if (question.includes('{city}')) {
                    tenQuestions.push(question.replace('{city}', countries[countryIndex].capital));
                } 
                else if (question.includes('{flag}')) {
                    const parts = question.split('{flag}'); // Split around {flag}
                    
                    tenQuestions.push(
                        <span key={countryIndex}>
                            {parts[0]}
                            <img src={countries[countryIndex].flags.svg} alt="flag" style={{ width: '20px', height: '15px' }} />
                            {parts[1]}
                        </span>
                    );
                } 
            })
            console.log(tenQuestions);
        }
        fetchData();
    }, [])

    ///////////////////////////////////////////
    //////////////////////////////

    return (
    <div className={styles.container}>
        <div className={styles.questionNumbersContainer}>

        <QuestionNumbers setCurrentQuestion={setCurrentQuestion}/>
        <Question currentQuestion={currentQuestion}/>
        </div>
    </div>
    )
}
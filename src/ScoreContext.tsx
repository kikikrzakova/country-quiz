import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from "react";

interface ScoreContextType {
    score: number;
    setScore: Dispatch<SetStateAction<number>>;
  }

const ScoreTheme = createContext<ScoreContextType | null >(null);

export function ScoreProvider({children}: {children: ReactNode}){
    const [score, setScore] = useState(0);
    return <ScoreTheme.Provider value={{score, setScore}}>
        {children}
    </ScoreTheme.Provider>
}

export function useScore() {
    const scoreContext = useContext(ScoreTheme);
    if (!scoreContext) throw new Error("useScore must be used within a ScoreProvider");
    return scoreContext;
}
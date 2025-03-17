import './App.css'
import Layout from './Layout';
import { ScoreProvider } from './ScoreContext';

function App() {




  return (
    <ScoreProvider>
      
      <Layout/>
    </ScoreProvider>
  )
}

export default App

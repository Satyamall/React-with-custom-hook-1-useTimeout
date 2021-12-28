
import './App.css';
import { useTimeout } from './Hook/useTimeout';

function App() {
   
  const {ready}=useTimeout(5000)

  return (
    <div className="App">
       <h1>React with custom hook useTimeout</h1>
       <div>
         {
           ready ? "I'm visible after 5000ms" : "after 5 seconds ready should be true"
         }
       </div>
    </div>
  );
}

export default App;

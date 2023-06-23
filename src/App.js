
import './App.css';
import { HeroPage } from './components/heroSection/heroPage';
import { Navbar } from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroPage/>
      
    </div>
  );
}

export default App;

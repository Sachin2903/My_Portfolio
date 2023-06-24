import './App.css';
import { AboutSection } from './components/aboutSection/aboutSection';
import { HeroPage } from './components/heroSection/heroPage';
import { Navbar } from './components/navbar/navbar';
import { Project } from './components/project/project';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroPage/>
      <AboutSection/>
      <Project/>
      
    </div>
  );
}

export default App;

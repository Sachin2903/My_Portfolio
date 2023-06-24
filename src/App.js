import './App.css';
import { AboutSection } from './components/aboutSection/aboutSection';
import { HeroPage } from './components/heroSection/heroPage';
import { Navbar } from './components/navbar/navbar';
import { Project } from './components/project/project';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { Last } from './components/last/last';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroPage/>
      <AboutSection/>
      <Provider store={store}>
      <Project/>

      </Provider>
      <Last/>
      
      
    </div>
  );
}

export default App;

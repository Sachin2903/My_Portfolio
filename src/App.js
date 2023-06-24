import './App.css';
import { AboutSection } from './components/aboutSection/aboutSection';
import { HeroPage } from './components/heroSection/heroPage';
import { Navbar } from './components/navbar/navbar';
import { Project } from './components/project/project';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { Last } from './components/last/last';
import { Tech } from './components/tech/tech';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroPage/>
      <AboutSection/>
      <Tech/>
      <Provider store={store}>
      <Project/>

      </Provider>
      <Last/>
      <h5>Desgined & Build By Sachin Chaturvedi, 2023</h5>
      
      
    </div>
  );
}

export default App;

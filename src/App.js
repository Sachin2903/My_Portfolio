import './App.css';
import { AboutSection } from './components/aboutSection/aboutSection';
import { HeroPage } from './components/heroSection/heroPage';
import { Navbar } from './components/navbar/navbar';
import { Project } from './components/project/project';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { Last } from './components/last/last';
import { Tech } from './components/tech/tech';
import { Fragment,useRef,useEffect } from 'react';
function App() {
  const load =useRef();
  const loadsecond =useRef();

  useEffect(()=>{
const clear=setTimeout(()=>{
 loadsecond.current.style.display="none";
     load.current.style.display="none";
   },5000)
return ()=>{
 clearTimeout(clear)
}
  },[])



  return (
    <Fragment>
 <div ref={load} className="App">
      <div className="loader">
        <div className='toploader'></div>
        <div ref={loadsecond} className='loaderbox'>
          <div className='a'><div className='green'></div></div>
          <div className='b'><div className='red'></div></div>
          <div className='c'><div className='orange'></div></div>
          <div className='d'><div className='white'></div></div>
        </div>
      </div>
    </div>



    
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

    </Fragment>
  );
}

export default App;

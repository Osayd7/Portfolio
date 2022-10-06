import {Routes, Route} from 'react-router-dom'
import './App.scss';
import Layout from './components/Layout';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Card from './components/Cards/Cards';



function App() {
  return (

    <Routes>
        <Route path="/" element = {< Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element = {< About />}/>
          <Route path="contact" element = {<Contact />}/>
          
        </Route>

    </Routes>
  );
}

export default App;

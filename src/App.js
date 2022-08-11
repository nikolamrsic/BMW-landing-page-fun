import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Cards from './Components/Cadrs';
import Paragraf from './Components/Paragraf';
import Tabovi from './Components/Tabs';
import { Tab } from '@mui/material';
import Form from './Components/Form';
import Links from './Components/Links';
import Hook from './Components/Hook';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero></Hero>
     <Cards></Cards>
     <Paragraf></Paragraf>
     <Form></Form>
    
    </div>
  );
}

export default App;

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/Navbar/Navbar';
import './styles/App.scss';
 
function App() { 
   return (
    
      <>
      <Navbar/>
      <Header/>
       <p>Hej verden</p>
       <Main/>
       <Footer/>
       </>
   ) 
} 

export default App
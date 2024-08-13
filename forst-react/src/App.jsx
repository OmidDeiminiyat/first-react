import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/Navbar/Navbar';
import Greeting from './components/Greeting/Greeting';


import './styles/App.scss';
 
function App() { 
   const firstUser = 'Omid';
   const secondUser = 'Lionel Richie';
   const thirdUser = 'Trump';
   const HeaderFirst = 'Props er cool';
   const dishes = [
      'Pizza',
      'Sushi',
      'Pasta',
      'Tacos',
      'Ice Cream'
    ];
  
 
   return (
    
      <>
      <Navbar/>
      <Header name={HeaderFirst}/>
       <p>Hej verden</p>
       <Greeting name={firstUser} />
       <Greeting name={secondUser} />
      <Greeting name={thirdUser} />
       <Main name={dishes}/>
       <Footer/>
       </>
   ) 
} 

export default App
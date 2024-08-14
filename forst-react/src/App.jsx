import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/Navbar/Navbar';
import Greeting from './components/Greeting/Greeting';
import Button from './components/Button/Button';


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
    const handleClick = () => {
      alert('Button clicked!');
    };
  
 
   return (
    
      <>
      <Navbar/>
      <Header name={HeaderFirst}/>
       <p>Hej verden</p>
       <Greeting name={firstUser} />
       <Greeting name={secondUser} />
      <Greeting name={thirdUser} />
       <Main name={dishes}/>
       <div>
      <h1>Button Component Example</h1>
      <Button 
        action={handleClick} 
        size="small" 
        theme="light" 
        text="Small Light Button" 
      />
      <Button 
        action={handleClick} 
        size="medium" 
        theme="dark" 
        text="Medium Dark Button" 
      />
      <Button 
        action={handleClick} 
        size="large" 
        theme="light" 
        text="Large Light Button" 
      />
    </div>
       <Footer/>
       </>
   ) 
} 
export default App
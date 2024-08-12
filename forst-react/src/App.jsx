import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';
 
function App() { 
   return (
    
      <>
      <Header/>
       <p>Hej verden</p>
       <Main/>
       <Footer/>
       </>
   ) 
} 

export default App
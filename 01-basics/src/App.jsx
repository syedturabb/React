import React from 'react'

import Greeting from "./greeting.jsx";
import Header from './header.jsx';
import Footer from './footer.jsx';

  function App(){
    const name = "Turab"
    const course = "React"

    return (
       <div>
        <Header />
            <h2>My name is {name}</h2>
            <p>I am learnign React</p>
            <p>10*5= {10*5}</p>
            <img src="https://react.dev/images/logo.svg" alt="my logo" />

            <Greeting />

      <Footer />

            
       </div>

    );
  };
export default App


import Button from './button.jsx';
import Greeting from './greeting.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Login from './login.jsx'
  // function SayHi(){
  //   return (
  //     alert("Thanks for Clicking the button")
  //   );
  // }
  function App(){
    const name = "Turab"
    const course = "React"
    const age = 19;
    return (
       <div>
        <Header />
            <h2>My name is {name}</h2>
            <p>I am learnign React</p>
            <Button />
            <p>10*5= {10*5}</p>
            <img src="https://react.dev/images/logo.svg" alt="my logo" />
             <body />
            <Greeting name="Ali" age={21} />
            <p>hey i am hadi</p>
            <Login />
      <Footer />

            
       </div>

    );
  };
export default App


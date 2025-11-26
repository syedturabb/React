import Button from './button.jsx';
import Greeting from './greeting.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Login from './login.jsx'
import Form from './form.jsx'

  function SayHi(){
    return (
      alert("Thanks for Clicking the button")
    );
  }
  function App(){
    const name = "Turab"
    const course = "React"
    const age = 19;
    return (
       <div>
             <div style={{ padding: "50px" }}>
      <h1>Login Form</h1>
      <Form />
    </div>
            <Button />
             <body />
            <Greeting name="Ali" age={21} />
            <Login />
            <Footer />

           
         
       </div>
    );
  };



export default App


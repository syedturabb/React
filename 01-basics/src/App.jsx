import React, { useState } from 'react'
import axios from 'axios';
const App = () => {
  
  // const [username,setUsername] = useState('')
  // const submitHandler= (e)=>{
    
  //   e.preventDefault();
  //   console.log(username);
  //   setUsername('')
    
  // } 

  // return (
  //   <div>
      {/* <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input          
        value={username}
         onChange={(e) =>{
              setUsername(e.target.value);
        }} type="text" placeholder='Enter your name' className='bg-amber-100 px-4 py-4'/>
        <button className='bg-amber-600 px-4 m-5 py-3 rounded'>Submit</button>
      </form>
    </div>
  ) */}
      // const [data,setData] = useState([]);
      // const getData = async ()=>{
      //   const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100');
        
      //   setData(response.data);

      //   console.log(data[0].dowload_url);

        
      // }

      const [data, setData] = useState([]);
      const getData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list');

        setData(response.data);
        console.log(data[1].dowload_url);
        
      }
          

       
        return (
    <div>
        <div className='p-10 text-white'> 
        <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3'>Click</button>
        <div className='p-5 mt-5 bg-gray-950'>
            {
              data.map(function(elm,idx){
                return <div key={idx} className='bg-gray-300 text-black flex items-center justify-between w-full px-7 py-6'>
                      <img className='h-40' src={elm.dowload_url} alt=""></img>
                      <h1>{elm.author}</h1>
                          
                </div>
                

              })
            }  
      </div>
</div>
</div>
  )
}
export default App

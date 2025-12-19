 export function Gallery() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}
export function Profile(){
     return(
        <div>
            <h1>Hello G</h1>
        </div>
     );
}
export function Login({name,array}){
          let isLoggedIN = true;
                   if(isLoggedIN){
                         return <h1>Welcome {name}! Your Id is {array.id}</h1>
      }else{
        return <h1>you are not logged in</h1>
      }
}
          const array = ["turab", "Ali","Ahmed", "usman "]
          const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];
export function Map(){
              return (
                <div>
                    {/* {array.map(function(name){
                        return 
                            <h2> Name: {name}</h2>
                        })} */}

                        {people.map(function(person){
                              return <h2 key={person.name}> Name: {person.name}ID: {person.id}  Profession: {person.profession}  </h2>
                        })}
                    
                </div>
               );
            

              
}

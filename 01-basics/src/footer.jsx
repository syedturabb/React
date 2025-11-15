function footer() {
     const names = ["turab","Ali","haider"]
     const ages = [19,20,21]
    return (

         
    //     <div>
    //          {names.map((name) => (
    //     <h3>{name}</h3>
    //   ))}
    //         <h2>Names: {names} </h2>
            
    //     </div>

        <div>
               {ages.map((age) =>(
                <h3>{age}</h3>
               ))}
               <h3>Ages: {ages}</h3>
            
        </div>
    );
}

export default footer


import React, { useState } from "react";

const App =  () => {
  const [ counter, setCounter ] = useState(0)

  
  return(
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>plus</button>
      <button onClick={() => setCounter(0)}>zero</button>
    </div>
    
  )
}





/* 
const Hello = ({name, age}) => {


 const bornYear = () =>  new Date().getFullYear() - age
  
 
 return (
   <div>
     <p>
       Hello {name}, you are {age} years old
     </p>
     <p>
       So you were probably born in {bornYear()}
     </p>
   </div>
 ) 

}

const App = () => {
  const name = 'Boyce'
  const age = 20

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name= "Joseph" age = {10 +5} />
      <Hello name = {name} age = {age} />
    </div>
  )
} */

    

export default App;

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ count, setCount] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => console.log(data))

  }, [])


  const nayoks = ['Jasim', 'Deepjol',{name: 'Baappa', age: 34}]
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nk => <Nayok name={nk.name} age={nk.age}></Nayok>)
      }
      <Nayok name={nayoks[1]}age ='55'></Nayok> 
      <Nayok name="Shakib"></Nayok>
      <Nayok name= {nayoks[0]}></Nayok>
      <Nayok></Nayok>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
} // main component

function MovieCounter(){
  const [count, setCount] = useState(0);

  const handleClick = () => setCount (count + 1);
  return (
    <div>
      <button onClick = {handleClick}>Add Movie</button>
      <h3>Number of movies: {count} </h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count +10}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>


    </div>
  )
}

function MovieDisplay(props){
  return <h4>Movies I have acted: {props.movies} </h4>

}

function Nayok(props){
  console.log(props)
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px'
  }
  return (
  <div style = {nayokStyle}>
      <h1>Ami Nayok-{props.name}</h1>
  <h3>I have done 5 movies in {props.age || 30} years</h3>
  </div>
  )

} // component



export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = React.useState(0);
  const [cocktail, setCocktail] = React.useState(null);
  React.useEffect(() => {
    fetch('/counter') 
      .then(res => res.json())
      .then(data => {
        setCounter(data.counter);
        console.log(data);
      });
    fetch('/api')
     .then(res => res.json())
      .then(data => {
        setCocktail(data);
        console.log(data);
      });    
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {counter}
        </p>
        <button onClick={() => {
          fetch('/api')
            .then(res => res.json())
             .then(data => {
               setCocktail(data);
               console.log(data);
             });
          }}>
          Cocktail Picture
        </button>
        <img src={cocktail === null ? "https://1gr.cz/fotky/idnes/17/071/org/ZT6c728d_131820_2861019.jpg" : cocktail.drinks[0].strDrinkThumb} width={400} />
      </header>
    </div>
  );
}

export default App;

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
        setCocktail(data.drinks[0].strDrinkThumb);
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
        <p>
          <img 
            src={cocktail}
            alt="cocktail picture"
          />
        </p>
      </header>
    </div>
  );
}

export default App;

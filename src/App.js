import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
const KEY = 'ohg5Z0I2qocabN6TrIojwkyo48DXZa8B6e3aPsPX';

function App() {
  const [formSubmit, setFormSubmit] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState();

  const formAction = (e) => {
    e.preventDefault();
    setFormSubmit(true);
  };

  React.useEffect(() => {
    if (formSubmit === true) {
      axios
        .get(
          `https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-10-31&end_date=2021-10-31&api_key=${KEY}`
        )
        .then((res) => {
          console.log(res);
        });
      setFormSubmit(false);
    }
  }, [formSubmit]);

  return (
    <div className="App">
      <form onSubmit={formAction}>
        <button type="submit">Generate</button>
      </form>
      <div>
        <img src={imageSrc} />
      </div>
    </div>
  );
}

export default App;

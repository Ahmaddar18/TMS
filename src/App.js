import React from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios');
class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    error: null,
    isLoaded: false,
    items: []
  };
}

componentDidMount() {
  //fetch("http://ahmaddar009.0fees.us/api/9")
  axios.get("http://ahmaddar009.0fees.us/api/9",
        { headers: {'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      }}
      )
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.items
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}

render() {
  const { error, isLoaded, items } = this.state;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.amount}>
            {item.name} {item.response_desc}
          </li>
        ))}
      </ul>
    );
  }
}
}

export default App;

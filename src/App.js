import React, { Component } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import './App.css';

const store = createStore(reducers, {}, applyMiddleware());

class App extends Component {

  render() {
    return (
        <Provider store={store}>
          <div className="App">
            <Header />
            <Card />
          </div>
        </Provider>
    );
  }
}

export default App;

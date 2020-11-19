import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './store/reducers'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todos');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todos', serializedState);
  } catch {
  }
};

const persistedState = loadState();

const store = createStore(rootReducer, persistedState)
console.log(store.getState())

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

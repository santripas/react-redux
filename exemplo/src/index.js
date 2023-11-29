import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './Counter';
import reportWebVitals from './reportWebVitals';

const initialStates = { count: 40, title: "Danki Code" };

function reducer(state = initialStates, action) {
switch (action.type) {
case "INCREMENT":
return { ...state, count: state.count + 1 };
default:
return state;
}
}

const store = createStore(reducer);

const App = () => (
<Provider store={store}>
<Counter />
</Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
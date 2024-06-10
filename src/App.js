import logo from './logo.svg';
import './App.css';
// import First from './First';  //same directory
// import Second from './Second';
// import { Test, Show } from './Test'; // multiple function export
import MyRoute from './MyRoute';
import cartReducer from './redux/reducers/cartReducer';
import { legacy_createStore } from 'redux'; // to help to know compiler that an reducer is a store
import { Provider } from 'react-redux';  // to provide data from reducer to components
import store from './store';


function App() {
  // const store=legacy_createStore(cartReducer)
  return (
    // <div className="App">
    // <h1>React JS</h1>
    // <First/>
    // <Second/>
    // <Test/>
    // <Show/>
    // </div>
    <>
     <Provider store={store}>

     <MyRoute/>
     </Provider>
   
    
    </>
  );
}

export default App;

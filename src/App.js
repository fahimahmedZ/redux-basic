import './App.css';
import Users from './Users';
import Form from './Form';
import {Provider} from "react-redux";
import store from './store/';

function App() {
  return (
  <Provider store={store}>
    <div className='container'>
      <Form />
      <Users />
    </div>
  </Provider>
  );
}

export default App;

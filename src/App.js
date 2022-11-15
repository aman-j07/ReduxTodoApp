import { Provider } from 'react-redux';
import './App.css';
import Todos from './components/Todos';
import store from './components/redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Todos/>
    </div>
    </Provider>
  );
}

export default App;

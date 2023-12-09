import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <AddTodo />
      <Todo />
    </div>
  );
}

export default App;

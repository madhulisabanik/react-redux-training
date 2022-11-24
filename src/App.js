import './App.css';
import TodoData from './todo.json';
import Header from './components/Header';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <a href='#'>Learn React</a>
      <Header />
      <div className="checkbox-container">
        <Todo todoData={TodoData}/>
      </div>
    </div>
  );
}

export default App;

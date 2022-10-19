import './App.css';
import TodoData from './todo.json';
import Header from './components/Header';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="checkbox-container">
        <Todo todoData={TodoData}/>
      </div>
    </div>
  );
}

export default App;

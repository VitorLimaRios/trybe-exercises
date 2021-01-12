import logo from './logo.svg';
import './App.css';
import myName from "./Component";

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const taskList = ['Projeto - Movie Cards Library', 'Projeto - Movie Cards Library Stateful', 'Projeto - Movie Cards Library CRUD'];
  return (
    <div>
      {task('estudar')}
      {task('trabalhar')}
      {taskList.map(task)}
    </div>
  );
}

export default App;

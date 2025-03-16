import './App.css';
import SeminarList from './components/SeminarList';

function App() {
  console.log("App component is rendering"); // Добавим лог для тестирования

  return (
    <div>
      <h1>Семинары</h1>
      <SeminarList />
    </div>
  );
}

export default App;

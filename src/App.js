import './App.css';
import { Dashboard } from './components/Forms/Dashboard';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App" style={{marginTop: 61}}>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;

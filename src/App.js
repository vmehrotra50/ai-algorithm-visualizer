import logo from './logo.svg';
import './App.css';
import Graph from './components/Graph';

function App() {
  return (
    <div className="App">
      <Graph height={10} width={10} start_x={0} start_y={0} goal_x={9} goal_y={9} />
    </div>
  );
}

export default App;

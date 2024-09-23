import './App.css';
import NestedComments from './components/NestedComments';
function App() {
  return (
    <div className="App">
      {/* First approach using recursion */}
      <NestedComments />
      {/* Second approach, without recursion and using data with parentId*/}
    </div>
  );
}

export default App;

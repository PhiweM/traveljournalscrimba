import './App.css';
import data  from './data';
import Card from './components/Card';
import Navbar  from './components/Navbar';
function App() {
  const cards = data.map(item =>
     <Card 
        key={item.id}
        item={item}
     />
    )
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;

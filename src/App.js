import './App.css';
import data  from './data';
import Card from './components/Card';

function App() {
  const cards = data.map(item =>
     <Card 
        key={item.id}
        item={item}
     />
    )
  return (
    <div className="App">
      {cards}
    </div>
  );
}

export default App;

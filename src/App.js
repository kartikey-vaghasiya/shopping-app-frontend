import './App.css';
import './tailwind.css';
import Navbar from './components/Navbar'
import CardContainer from './components/CardContainer';

function App() {
  return (
    <div className='app-div'>
      <Navbar/>
      <CardContainer/>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import CoffeeData from './components/CoffeeData'
import CoffeeDetails from './components/CoffeeDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CoffeeData />} />
        <Route path="/:id" element={<CoffeeDetails />} />
      </Routes>
    </div>
  );
}

export default App;

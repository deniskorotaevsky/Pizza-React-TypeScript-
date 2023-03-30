import React, {FC, useState} from 'react';
import './App.css';
import AddPizzaForm from './components/AddPizza';
import Pizza from './models/Pizza';

const App: FC = () => {

  const[pizzaList, setPizzaList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzaList([...pizzaList, newPizza]);
  }

  return (
    <div className="App">
      <div className="wrap">
       <span className='heading'>Наша пиццерия</span>
       <AddPizzaForm 
       addPizza={addPizza}

       />
      </div>
    </div>
  );
}

export default App;

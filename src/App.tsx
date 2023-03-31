import React, { FC, useState } from 'react';
import './App.css';
import AddPizzaForm from './components/AddPizza';
import DisplayPizzas from './components/DisplayPizzas';
import Pizza from './models/Pizza';

const App: FC = () => {

  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  }

  return (
    <div className="App">
      <div className="wrap">
        <span className='heading'>Наша пиццерия</span>
        <AddPizzaForm
          addPizza={addPizza}

        />
        <DisplayPizzas
          pizzasList={pizzasList}
        />
      </div>
    </div>
  );
}

export default App;


import React from 'react'
import { BrowserRouter as Router, Route, Routes }
	from 'react-router-dom';
import './App.css';

import AllScenarios from './components/AllScenarios';
import AddScenarioForm from './components/AddScenarioForm';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className="App">
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path='/addscenario' element={<AddScenarioForm />} />
            <Route path='/allscenarios' element={<AllScenarios />} />
             {/*<Route path='/addvehiclesform' element={<AddVehiclesForm/>} />
           <Route path='/' element={<Home/>} />*/}
          </Routes>
        </div>
      </Router>
    </div>
	);
}

export default App;

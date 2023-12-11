import React, { useState } from 'react';
import './App.css';
import RowButton from './components/RowButton';


function App() {
  const [rowsData, setRowsData] = useState(Array(5).fill([]));

  const handleButtonClick = (rowIndex) => (clickedButtons) => {
    const updatedRowsData = [...rowsData];
    updatedRowsData[rowIndex] = clickedButtons;
    setRowsData(updatedRowsData);
  };

  const handleSubmit = () => {
    console.log('Rows data:', rowsData);
  };

  return (
    <div className="App">
      <h1 className=" text-center"> Lottery</h1>
      <div className='d-flex flex-column gap-4'>
     {[...Array(5)].map((_, index) => (
      <RowButton key={index} onButtonClick={ handleButtonClick(index)} />
     ))}
      </div>
      <button className="button-30 mt-5" onClick={handleSubmit}> Submit</button>
    </div>
  );
}

export default App;

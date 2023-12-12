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
    
    // Object.values(rowsData).forEach((row) => console.log('Row',row));

    //generate 5 random number between 0 and 9
     const generatedUniqueNumbers = (count) => {
      const uniqueNumbers = new Set();

      while (uniqueNumbers.size < count){
        uniqueNumbers.add(Math.floor(Math.random() * 10));
      }

      return Array.from(uniqueNumbers);

     }
    
    const lotteryNumbers = generatedUniqueNumbers(5);
     console.log('Lottery numbers:', lotteryNumbers);

     //check if all lottery numbers are present in rows data (selected bets)

     let win = rowsData.some((row) => {
      return lotteryNumbers.every((number) => row.includes(number));
     });

     if (win){
      console.log('Bets Won!!');
     } else {
      console.log('Bets Lost........')
     }
     

    
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

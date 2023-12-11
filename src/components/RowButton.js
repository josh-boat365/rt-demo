// App.js

import React, { useState } from 'react';
import Button from './Button';

//get each button click event into an array
const RowButton = ({ onButtonClick }) => {
  const [clickedButtons, setClickedButtons] = useState([]);

  //for each clicked button
  const handleClick = (buttonNumber) => {
    //arranging the value of the clicked buttons
    const updatedButtons = [...clickedButtons, buttonNumber];
    setClickedButtons(updatedButtons);
    onButtonClick(updatedButtons); // Passes the updated buttons to the parent component
  };

  return (

      <div>
        {/* Create five buttons using the Button component */}
        {[...Array(10)].map((_, index) => (
          <Button
            key={index}
            text={`${index}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
  );
};

export default RowButton;

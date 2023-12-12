import React, { useState } from 'react';
import Button from './Button';

//get each button click event into an array
const RowButton = ({ onButtonClick }) => {
  const [clickedButtons, setClickedButtons] = useState([]);

  //for each clicked button
  const handleClick = (buttonNumber) => {
    //arranging the value of the clicked buttons
    // const updatedButtons = [...clickedButtons, buttonNumber];

    const index = clickedButtons.indexOf(buttonNumber);
    let updatedButtons;

    if (index !== -1) {
      // if button number has been clicked previously, remove from array
      updatedButtons = [...clickedButtons.slice(0, index), ...clickedButtons.slice(index + 1)];
    } else {
      // if button number is clicked the second time , add to array
      updatedButtons = [...clickedButtons, buttonNumber];
    }


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

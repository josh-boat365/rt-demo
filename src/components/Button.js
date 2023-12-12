import React, {useState} from "react";


const Button = ({ text, onClick}) => {
  const [className, setClassName] = useState("button-29");

  const handleClick = () => {
    //if button is clicked 
    if (className === "button-29") {
      //change state to button-24
      setClassName("button-24");

    }else{
      //if button is clicked the second time change state to its default
      setClassName("button-29");

    }
      onClick();
  };

  return (
    <button onClick={handleClick} className={className}>
      {text}
    </button>
  );
}

export default Button;

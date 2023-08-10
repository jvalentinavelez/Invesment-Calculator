import React, { useState } from 'react';

import styles from './UserInput.module.css';
import './InputItem';
import InputItem from './InputItem';

const UserInput = (props) => {

  const initialUserInput = {
    'current-savings': 1000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10
  };

  const [userInput, setUserInput] = useState(initialUserInput);

  const inputChangeHandler = (identifier, value) => {
    setUserInput((prevInput)=> {
      return {
        ...prevInput, 
        [identifier]: +value, // the "+" converts the string value to a number
      }
    })
  }

  const resetHandler = () => {
    setUserInput(initialUserInput);
  }
  
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmitInput(userInput);
  }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles['input-group']}>
          <InputItem 
            title="Current Savings ($)" 
            inputId= "current-savings"  
            valueEntered={userInput['current-savings']}
            onChangeInput={(event)=>{inputChangeHandler("current-savings", event.target.value)}}>
          </InputItem>
          <InputItem 
            title="Yearly Savings ($)" 
            inputId= "yearly-contribution" 
            valueEntered={userInput['yearly-contribution']}
            onChangeInput={(event)=>{inputChangeHandler("yearly-contribution", event.target.value)}}>
          </InputItem>
        </div>
        <div className={styles['input-group']}>
          <InputItem 
            title="Expected Interest (%, per year)" 
            inputId= "expected-return" 
            valueEntered={userInput['expected-return']}
            onChangeInput={(event)=>{inputChangeHandler("expected-return", event.target.value)}}>
          </InputItem>
          <InputItem 
            title="Investment Duration (years)" 
            inputId= "duration" 
            valueEntered={userInput['duration']}
            onChangeInput={(event)=>{inputChangeHandler("duration", event.target.value)}}>
          </InputItem>
        </div>
        <p className={styles.actions}>
          <button type="reset" className={styles.buttonAlt} onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    )
}

export default UserInput;
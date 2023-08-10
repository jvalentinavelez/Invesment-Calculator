import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import ResultsTable from './components/ResultsTable/ResultsTable';
import React, { useState } from 'react';

function App() {

  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    setUserInput(userInput);
  };

  //we can re-run this code whenever the state of this app component changes
  //whenever we recieve new user input, the component function will re-execute
  //and the next code will be re-executed
  //we'll have the yearly data updated as derived state, based on that user input state  

  const yearlyData = []; // per-year results

  //to ensure that userInput exists 
  if (userInput) {
    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
  
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      let totalInterest = currentSavings -  userInput['current-savings'] - yearlyContribution * (i+1);
      let totalContibution = userInput['current-savings'] + yearlyContribution * (i+1)
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: totalContibution,
        totalInterest: totalInterest
      });
    }
  }

  return (
    <div>
      <Header />
      <UserInput onSubmitInput={calculateHandler}></UserInput>

      {!userInput &&  <p style={{textAlign: 'center'}}>No results yet. Submit the data to calculate your investment.</p>}
      {userInput && <ResultsTable onShowResults={yearlyData}></ResultsTable>}
      

    </div>
  );
}

export default App;

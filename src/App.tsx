import { useState, useEffect } from 'react'
import './App.css'
import Results from './Components/Results'
import DateInput from './Components/DateInput'

function App() {
  const [buttonClickState, setButtonClickState] = useState(false);
  const [inputsData, setInputsData] = useState<string[]>([]);

  return (
    <div className="bg-white p-4 rounded-4 main-div">
      <DateInput isButtonClicked={buttonClickState} setButtonClickState={setButtonClickState} inputsData={inputsData} setInputsData={setInputsData}></DateInput>
      <Results isButtonClicked={buttonClickState} inputsData={inputsData}></Results>
    </div>
  )
}

export default App

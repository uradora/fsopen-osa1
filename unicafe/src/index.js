import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGood = () => {setGood(good + 1)}
  const handleNeutral = () => {setNeutral(neutral + 1)}
  const handleBad = () => {setBad(bad + 1)}

  return (
    <div>
    <div>
      <h1>anna palautetta</h1>
    </div>
    <div>
        <Button value={handleGood} text="hyvä" />
        <Button value={handleNeutral} text="neutraali" />
        <Button value={handleBad} text="huono" />
    </div>
    <div>
        <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.value}>
      {props.text}
    </button>
  )
}

const Statistic = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  )
}



const Statistics = ({good, neutral, bad}) => {
    const sum = good + neutral + bad
    const avg = good - bad / sum
    const positive = good / sum

    if (good === 0 && neutral === 0) {
      return (
      <div>
        <br />
        Ei yhtään palautetta annettu
      </div>
      )
    } else

    return (
        <div>
            <div><h1>statistiikka</h1></div>
            <Statistic text="hyvä" value={good} />
            <Statistic text="neutraali" value={neutral} />
            <Statistic text="huono" value={bad} />
            <Statistic text="yhteensä" value={sum} />
            <Statistic text="keskiarvo" value={avg} />
            <Statistic text="positiivisia" value={positive} />
        </div>
    )
}


ReactDOM.render(<App />, 
  document.getElementById('root'))

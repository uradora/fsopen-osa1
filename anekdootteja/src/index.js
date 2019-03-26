import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0})

  const addVotes = () => {
    const newVotes = {
      ...votes,
      [selected]: votes[selected] + 1
    }
    setVotes(newVotes)
    console.log(newVotes)
  }
    
  const [mostVoted, maxValue] = Object.entries(votes).reduce((acc,cur) => cur[1] > acc[1] ? cur : acc)


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <Button handleClick={() => addVotes()} text="vote" />
      <Button handleClick={() => setSelected(Math.floor(Math.random() * 6))} text="next anecdote" />
      <br />
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[mostVoted]}
    </div>
  )
}


const Button = (props) => { 
    return (
    <button onClick={props.handleClick}>{props.text}</button>
    )
 }



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

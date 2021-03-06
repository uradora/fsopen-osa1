import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

const Header = ({course}) => (
    <div>
        <h1>{course}</h1>
    </div>
)


const Content = (props) => {

    return (
    <div>
        <Part name={props.part1} exercises={props.exercises1} />
        <Part name={props.part2} exercises={props.exercises2} />
        <Part name={props.part3} exercises={props.exercises3} />
    </div>
    )
}


const Part = (props) => (
    <div>
        <p>{props.name} {props.exercises}</p>
    </div>
)


const Total = (props) => {
    const yhteensa = props.exercises1 + props.exercises2 + props.exercises3;
    return (
    <div>
        <p>yhteensä {yhteensa} tehtävää</p>
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
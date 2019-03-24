import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [ 
    {
        name: 'Reactin perusteet',
        exercises: 10
    },
    {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
    },
    {
        name: 'Komponenttien tila',
        exercises: 14
    }
   ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => (
    <div>
        <h1>{props.name}</h1>
    </div>
)


const Content = (props) => {

    return (
    <div>
        <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
        <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
        <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
    )
}


const Part = (props) => (
    <div>
        <p>{props.name} {props.exercises}</p>
    </div>
)


const Total = (props) => {
    const yhteensa = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
    return (
    <div>
        <p>yhteensä {yhteensa} tehtävää</p>
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
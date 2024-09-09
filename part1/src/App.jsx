const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <>
      {props.exercises.map(part => (
        <Part key={part.name} part={part} />
      ))}
    </>
  )
}

const Total = (props) => {
  let total = 0
  props.exercises.forEach(part => {
    total += part.exercises
  })
  return <p>Total {total}</p>
}

const Part = (props) => {
  return <p>{props.part.name} {props.part.exercises}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />
      <Content
        exercises={parts}
      />
      <Total
        exercises={parts} />
    </div>
  )
}

export default App
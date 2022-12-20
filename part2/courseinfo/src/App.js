
const Header = ({title}) => {
  return (
   <h1 key={title.id}>{title}</h1>
  )
}

const Part1 = ({parts}) => {
  return(
    <div>
      {parts.map(e=><p key={e.id}>{e.name} {e.exercises}</p>)}
    </div>
  )
}

const Part2 = ({parts}) => {
  return(
    <div>
    {parts.map(e=><p key={e.id}>{e.name} {e.exercises}</p>)}
  </div>
  )
}

const Total = ({sum}) => {
  return(
    <div>
      <p>total of {sum} exercises</p>
    </div>
  )
}
const Content = ({courses}) => {
  return (
    <div>
      <Header title={courses[0].name} />
      <Part1 parts={courses[0].parts} />
      <Total sum={courses[0].parts.map(e => e.exercises).reduce((a, b) => a + b, 0)} />
      <Header title={courses[1].name} />
      <Part2 parts={courses[1].parts} />
      <Total sum={courses[1].parts.map(e => e.exercises).reduce((a, b) => a + b, 0)} />
   </div>
  )
}
const Course = ({courses}) => {
  return(
    <div>
      <Content courses={courses} />
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

return(
  <div>
    <Course courses={courses} />
  </div>
)

}

export default App
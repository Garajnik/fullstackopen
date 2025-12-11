function Header(props) {
  const course = props.course;
  return (
    <h1>{course}</h1>
  )
}

function Part(props) {
  const part = props.part;
  const exercise = props.exercise
  return (
    <p>
      {part} {exercise}
    </p>
  )
}

function Content(props) {
  console.log(props)
  const part1 = props.props[0].name;
  const part2 = props.props[1].name;
  const part3 = props.props[2].name;
  const exercises1 = props.props[0].exercises;
  const exercises2 = props.props[1].exercises;
  const exercises3 = props.props[2].exercises;
  return (
    <div>
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
    </div>
  )
}

function Total(props) {
  const exercises1 = props.props[0].exercises;
  const exercises2 = props.props[1].exercises;
  const exercises3 = props.props[2].exercises;
  return (<p> Number of exercises {exercises1 + exercises2 + exercises3}</p>)
}

export default function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content props={course.parts} />
      <Total props={course.parts} />
    </div>
  );
}


/* eslint-disable react/prop-types */
const Header = (props) => <h1>{props.course}</h1>;

const Part = ({ text, number }) => (
  <p>
    {text} {number}
  </p>
);

const Contet = ({ parts }) => (
  <div>
    {parts.map((part, order) => (
      <Part text={part.name} number={part.exercises} key={order} />
    ))}
  </div>
);

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((acc, curr) => acc + curr.exercises, 0);
  return <p>Number of exercises {totalExercises}</p>;
};

function App() {
  const course = {
    course: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header text={course} />
      <Contet parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;

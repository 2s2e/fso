type HeaderProps = {
  course: string;
};

const Header = (props: HeaderProps) => {
  return <h1>{props.course}</h1>;
};

type ContentProps = {
  parts: PartProps[];
};

const Content = (props: ContentProps) => {
  const parts: PartProps[] = props.parts;
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  );
};

type TotalProps = {
  exercises1: number;
  exercises2: number;
  exercises3: number;
};

const Total = (props: TotalProps) => {
  return (
    <p>
      Number of exercises{" "}
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
};

type PartProps = {
  name: string;
  exercises: number;
};

const Part = (props: PartProps) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        exercises1={course.parts[0].exercises}
        exercises2={course.parts[1].exercises}
        exercises3={course.parts[2].exercises}
      />
    </div>
  );
};

export default App;

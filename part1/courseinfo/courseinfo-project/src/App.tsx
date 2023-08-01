type HeaderProps = {
  course: string;
};

const Header = (props: HeaderProps) => {
  return <h1>{props.course}</h1>;
};

type ContentProps = {
  part1: string;
  exercises1: number;
  part2: string;
  exercises2: number;
  part3: string;
  exercises3: number;
};

const Content = (props: ContentProps) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
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
  part: string;
  exercise: number;
};

const Part = (props: PartProps) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Part part={part1} exercise={exercises1}></Part>
      <Part part={part2} exercise={exercises2}></Part>
      <Part part={part3} exercise={exercises3}></Part>
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;

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
      {parts.map((part) => (
        <Part
          key={part.id}
          id={part.id}
          name={part.name}
          exercises={part.exercises}
        />
      ))}
    </div>
  );
};

type PartProps = {
  name: string;
  exercises: number;
  id: number;
};

const Part = (props: PartProps) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

type CourseObject = {
  id: number;
  name: string;
  parts: PartProps[];
};

type CourseProps = {
  courses: CourseObject[];
};

const Courses = (props: CourseProps) => {
  return props.courses.map((course) => (
    <div key={course.id}>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <p>
        {course.parts.map((part) => part.exercises).reduce((a, b) => a + b, 0)}
      </p>
    </div>
  ));
};

export default Courses;

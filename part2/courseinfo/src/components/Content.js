import Part from "./Part";

const Content = ({ course: { parts } }) => {
  let total = parts.reduce((prev, current) => prev + +current.exercises, 0);
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <h5>total of {total} exercises</h5>
    </>
  );
};

export default Content;

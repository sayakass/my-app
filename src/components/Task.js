import Button from './Button';

function Task(props) {
  return (
    <div>
      <span style={props.style}> {props.name} </span>
      <Button name="Edit" />
      <Button name="Del" />
    </div>
  );
}

export default Task;

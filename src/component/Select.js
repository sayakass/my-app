function Select(props) {
  return (
    <p>
      <label htmlFor={props.htmlFor}>
        {props.label}: &nbsp;
        <select id={props.label}>
          <option value="">- Select Province -</option>
          <option value={props.value1}>{props.value1}</option>
          <option value={props.value2}>{props.value2}</option>
        </select>
      </label>
    </p>
  );
}

export default Select;

import React from "react";
import "./styles.css";

function Radio(props) {
  return <input type="radio" {...props} />;
}

export default function App() {
  React.useEffect(() => {
    document.title = `react@${React.version}`;
  }, []);

  return (
    <React.Fragment>
      <h1>react@{React.version}</h1>
      <form
        onSubmit={(event) => {
          console.log(Object.fromEntries(new FormData(event.target)));
          event.preventDefault();
        }}
      >
        <label>
          radio readonly
          <Radio checked name="radio-readonly" value="one" readOnly />
          <Radio name="radio-readonly" value="two" readOnly />
        </label>
        <label>
          radio empty onChange
          <Radio
            checked
            name="radio-onChange-noop"
            value="one"
            onChange={() => {}}
          />
          <Radio name="radio-onChange-noop" value="two" onChange={() => {}} />
        </label>
        <label>
          radio
          <Radio checked name="radio" value="one" />
          <Radio name="radio" value="two" />
        </label>
        <input type="submit" />
      </form>
    </React.Fragment>
  );
}

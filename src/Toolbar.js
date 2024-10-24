const styles = {
  toolbar: {
    background: "lightgray",
    padding: 10,
  },
  darkHeader: {
    color: "white",
  },
};

export default function Toolbar(props) {
  return (
    // Double curly braces in inline CSS because children should be object literal in React, not a string like in HTML
    // Outer curly brace is to say that this is an object
    // Inner curly brace is to say that this is JSX
    <div style={styles.toolbar}>{props.children}</div> // No need double curly braces because styles.toolbar is already an object
  );
}

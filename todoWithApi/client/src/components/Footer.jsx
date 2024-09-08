import React from "react";
function Footer() {
  return (
    <footer className="info">
      <p>Click to edit a todo</p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  );
}
export default React.memo(Footer);

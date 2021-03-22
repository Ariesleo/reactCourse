import React from "react";
import ReactDOM from "react-dom";
// import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="kaley" animal="dog" breed="havaness" />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let friends = ["Raju", "Mohan", "Ramu"];
    return (
      <>
        <ol key="relativeList">
          {friends.map((friend, index) => (
            <li key={"relativeListItem" + (index + 1)} />
          ))}
        </ol>
      </>
    );
  }
}

export default App;

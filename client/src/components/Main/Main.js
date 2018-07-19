import React, { Component } from "react";
import {} from "semantic-ui-react";
import { Sidebar } from "../componentList";

class Main extends Component {
  render() {
    return (
      <main style={{ height: "500px" }}>
        <Sidebar />
      </main>
    );
  }
}
export default Main;

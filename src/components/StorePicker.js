import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    //1. Stop form from submitting
    event.preventDefault();
    // get text from input
    const storeName = this.myInput.current.value;
    // change page to /store/what user inputs
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          // function to pull random name
          //value={getFunName()}
        />
        <button type="sumbit">Visit Store </button>
      </form>
    );
  }
}

export default StorePicker;
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child componentDidMount");
    //We used this method for API call and after api call it will rerender component after api call with updated data
  }

  countIncrease = () => {
    // Never UPDATE state variables directly in class component
    // eg.
    // this.state.count = this.state.count + 1;

    // How to do
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("Child Render");
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h3>Count:{this.state.count}</h3>
        <button onClick={this.countIncrease}>Count Increase</button>
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h4>Contact: varunbhujbal@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

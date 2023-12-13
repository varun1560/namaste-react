import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // console.log("constructor is called");
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url:
          "https://sipl.ind.in/wp-content/uploads/2022/07/dummy-user.png",
      },
    };
  }

  async componentDidMount() {
    // console.log("componentDidMount called");
    const data = await fetch("https://api.github.com/users/varun1560");
    const json = await data.json();

    this.setState({
      userInfo: {
        name: json.name,
        location: json.location ? json.location : "Not Mentioned",
        avatar_url: json.avatar_url,
      },
    });
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount called");
  }

  render() {
    // console.log("render is called");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card display-user-info">
        <img className="img-user-profile" src={avatar_url} alt="user-profile" />
        <div className="div-user-name">
          <h3>Name: {name}</h3>
          <h4>Location: {location}</h4>
          <h4>Contact: varunbhujbal@gmail.com</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;

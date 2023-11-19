import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Page</h1>
        <h2>This is Namste React web series</h2>
        <UserClass
          name={"Varun Bhujbal (Class)"}
          location={"Airoli Navi Mumbai (Class)"}
        />
        <UserClass
          name={"Akshay Saini (Class)"}
          location={"Deharadun (Class)"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <h2>This is Namste React web series</h2>
//       <UserClass
//         name={"Varun Bhujbal (Class)"}
//         location={"Airoli Navi Mumbai (Class)"}
//       />
//     </div>
//   );
// };

export default About;

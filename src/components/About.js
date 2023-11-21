import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Page</h1>
        <h2>This is Namste React web series</h2>
        <UserClass
          name={"Varun Bhujbal (Class)"}
          location={"Airoli Navi Mumbai (Class)"}
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

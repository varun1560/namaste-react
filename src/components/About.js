import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Page</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
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

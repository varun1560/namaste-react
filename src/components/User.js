import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // api call
  }, []);

  return (
    <div className="user-card">
      <h3>Count: {count}</h3>
      <h3>Name: {name}</h3>
      <h4>Location: {location}</h4>
      <h4>Contact: varunbhujbal@gmail.com</h4>
    </div>
  );
};

export default User;

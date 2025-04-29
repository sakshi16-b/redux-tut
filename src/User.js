import React from "react";
const User = (props) => {
  console.warn(props);

  const { name, age } = props.data;
  return (
    <h1>
      User Component {name}
      {age}
    </h1>
  );
};
export default User;

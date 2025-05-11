import React, { useState } from "react";

const EatNSprintContainer = () => {
  const initialFriendList = [
    {
      name: "Clark",
      debt: 0,
      img_url: "",
    },
    {
      name: "Sarah",
      debt: 0,
      img_url: "",
    },
    {
      name: "Anthony",
      debt: 0,
      img_url: "",
    },
  ];
  const [Friends, setFriend] = useState([...initialFriendList]);

  return <div>EatNSprintContainer</div>;
};

export default EatNSprintContainer;

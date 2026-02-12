import React, { useEffect, useState } from "react";

const RandomUser = () => {
  const [user, setUser] = useState("");
  const fetchData = () => {
    fetch("http://randomuser.me/api/?results=1")
      .then((resp) => resp.json())
      .then((data) => setUser(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return Object.keys(user).length > 0 ? (
    <div style={{ padding: "40px" }}>
      <h1>Customer data</h1>
      <h2>Name: {user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt="" />
    </div>
  ) : (
    <h1> Data Loding...</h1>
  );
};

export default RandomUser;

import { useEffect, useState } from "react";
import Card from "./components/Card";
import NavigationBar from "../../shared/NavigationBar";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [descrip, setDescrip] = useState([]);
  const [feed, setFeed] = useState([]);
  const [query, setQuery] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };

  // const fetchDescrip = async () => {
  //   const response = await fetch("http://localhost:3000/descripcion");
  //   const data = await response.json();
  //   setDescrip(data);
  //   console.log(data);
  // };

  // const fetchFeed = async () => {
  //   const response = await fetch("http://localhost:3000/feedback");
  //   const data = await response.json();
  //   setFeed(data);
  //   console.log(data);
  // };

  useEffect(() => {
    fetchUsers();
    // fetchDescrip();
    // fetchFeed();
  }, []);
  return (
    <>
      {/* <h1>Usuarios</h1>
      {users.map((user) => (
        <ul key={user.id}>
          <li>
            <h2>Name: {user.name}</h2>
          </li>

          <li>ID: {user.id}</li>
          <li>Email: {user.email}</li>
        </ul>
      ))}
      <h1>Descripcion</h1>
      {descrip.map((descri) => (
        <ul key={descri.id}>
          <li>descripcion: {descri.descripcion}</li>
          <li>USER ID: {descri.user_id}</li>
        </ul>
      ))}
      <h1>Feedbacks</h1>
      {feed.map((feedback) => (
        <ul key={feedback.id}>
          <li>feedback: {feedback.feedback}</li>
          <li>USER ID: {feedback.user_id}</li>
        </ul>
      ))} */}
      <NavigationBar setQuery={setQuery}>
        <div>
          {users
            .filter((user) => user.name.includes(query))
            .map((userd) => (
              <div
                key={userd.id}
                style={{
                  margin: "5px",
                  padding: "1%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card user={userd} />
              </div>
            ))}
        </div>
      </NavigationBar>
    </>
  );
};

export default Dashboard;

//users.filter((user)=> uyser.name includes(query)).map((user))

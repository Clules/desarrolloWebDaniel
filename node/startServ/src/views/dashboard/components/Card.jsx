import React from "react";
import { useNavigate } from "react-router-dom";
import userImage from "../../../assets/user.svg";

const Card = ({ user }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(user.id);
    navigate(`/users/${user.id}`);
  };
  return (
    <div
      style={{
        width: "25%",
        height: "10%",
        backgroundColor: "black",
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "column",
        color: "white",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <div>
        <img
          src={userImage}
          alt=""
          style={{ width: "100px", marginRight: "15px" }}
        />
      </div>
      <div>
        <p style={{ fontSize: "15px" }}>{user.name}</p>
        <p>Email: {user.email}</p>
        <p>Last Name: {user.lastname}</p>
        <p>Age: {user.age}</p>
      </div>
    </div>
  );
};

export default Card;

const { db } = require("../config/db");

const getAllDescriptions = async () => {
  try {
    const query = "SELECT * FROM descripcion;";
    const { rows } = await db.query(query);
    return rows;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const getDescriptionByID = async (id) => {
  try {
    const query =
      "SELECT U.name, d.descripcion FROM users U JOIN descripcion d ON U.id = d.user_id WHERE U.id = $1;";
    const { rows } = await db.query(query, [id]);
    return rows;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const createDescription = async (descripcion, prescription, userId) => {
  try {
    const query =
      "INSERT INTO descripcion (descripcion, prescription, user_id) VALUES ($1, $2, $3) RETURNING *;";
    const { rows } = await db.query(query, [descripcion, prescription, userId]);
    return rows[0];
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
module.exports = { getAllDescriptions, getDescriptionByID, createDescription };

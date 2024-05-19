const readlineSync = require("readline-sync");
const fs = require("fs");
const path = require("path");

function cesarCipher(str, idx) {
  let result = "";
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  for (letter of str) {
    letter = letter.toLowerCase();

    let index = alpha.indexOf(letter);
    if (index !== -1) {
      let newIndex = (index + idx) % 26;
      let newLetter = alpha[newIndex];
      result += newLetter;
      //   console.log("newLetter", newLetter);
    }

    // console.log("letter", letter);
    // console.log("index", index);
  }

  return result;
}

function registerUser() {
  let user = readlineSync.question("Enter your name: ");
  let password = readlineSync.question("Enter your password: ");

  let encPassword = cesarCipher(password, 5);

  addUser(user, encPassword);

  console.log("Welcome ", user);
  console.log("Password ", password);
}

function addUser(user, encPassword) {
  const filePath = path.join(__dirname, "users.json");
  let users = [];

  fs.readFile(filePath, (err, data) => {
    if (err) {
      users;
    } else {
      users = JSON.parse(data);
    }

    users.push({ user, encPassword });

    fs.writeFile(filePath, JSON.stringify(users), (err) => {
      if (err) {
        console.log("Error adding users");
      } else {
        console.log("User added");
      }
    });
  });
}

function login() {
  let user = readlineSync.question("Enter your name: ");
  let password = readlineSync.question("Enter your password: ");

  const filePath = path.join(__dirname, "users.json");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log("Error reading file");
    } else {
      for (let userN of JSON.parse(data)) {
        if (
          user === userN.user &&
          cesarCipher(password, 5) === userN.encPassword
        ) {
          console.log("Welcome: ", user);
        } else {
          console.log("Wrong user or password!");
        }
      }
    }
  });
}

function menu() {
  while (true) {
    let res = readlineSync.question(
      "1) Register \n2) Login \n3) Exit \nChoose an option: "
    );

    if (res == 1) {
      login();
    } else if (res == 2) {
      registerUser();
    } else if (res == 3) {
      break;
    }
  }
}

menu();
// console.log(cesarCipher("vegaesputo", 3));

let fullOp = "";
let arr = [];
let ecua = [];
let resul = 0;

function number(value) {
  console.log(value);
  fullOp += value;
  renderNum();
}

function operation(op) {
  if (op == "=") {
    try {
      resul = eval(fullOp);
    } catch (error) {
      fullOp = "SYNTAX error";
    }
    console.log(fullOp);

    document.getElementById("screen").innerHTML = resul;
    arr.push(resul);
    ecua.push(fullOp);
    displayHistory(ecua);

    console.log(resul);
    limp();
    return 0;
  } else if (op == "C") {
    limp();
    document.getElementById("screen").innerHTML = fullOp;
    resul = 0;
  } else {
    fullOp += op;
    renderNum();
    console.log(op);
  }
}

function renderNum() {
  document.getElementById("screen").innerHTML = fullOp;
}

function limp() {
  fullOp = "";
}

function displayHistory(ope) {
  const historyContainer = document.getElementById("history");
  historyContainer.innerHTML = "";
  arr.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Operation No. ${index + 1} :  ${
      ope[index]
    } = ${item}`;
    historyContainer.appendChild(listItem);
  });
}

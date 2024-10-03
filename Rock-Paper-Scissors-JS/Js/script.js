let actionMessage = document.getElementById("actionMessage");
let userScoreElem = document.getElementById("userScore");
let compScoreElem = document.getElementById("compScore");
let dispMsg = "";
let userScore = 0,
  compScore = 0;

function getChoice(ch) {
  if (ch == "r") return "Rock";
  else if (ch == "p") return "Paper";
  else if (ch == "s") return "Scissors";
}

function changeBorderColor(id, status = "neutral") {
  let btn = document.getElementById(id);
  if (status == "neutral") {
    color = "skyblue";
  } else if (status == "error") {
    color = "crimson";
  } else if (status == "success") {
    color = "mediumspringgreen";
  }

  btn.style.borderColor = color;
  setTimeout(() => {
    btn.style.borderColor = "gray";
  }, 800);
}

function getBtnClk(id) {
  let btn = document.getElementById(id);
  let userChoice = id;
  let compChoiceNum = Math.floor(Math.random() * 3);
  let compChoice = (compChoiceNum == 0) ? "r" : (compChoiceNum == 1) ? "p" : "s";
  if (userChoice == compChoice) {
    dispMsg = "It's a tie! Both gets one point.";
    userScore++;
    compScore++;
    changeBorderColor(id);
  }
  if (userChoice == "r" && compChoice == "p") {
    dispMsg = `${getChoice(compChoice)}<sub>computer</sub> beats ${getChoice(
      userChoice
    )}<sub>user</sub>!`;
    compScore++;
    changeBorderColor(id, "error");
  } else if (userChoice == "r" && compChoice == "s") {
    dispMsg = `${getChoice(userChoice)}<sub>user</sub> beats ${getChoice(
      compChoice
    )}<sub>computer</sub>!`;
    userScore++;
    changeBorderColor(id, "success");
  } else if (userChoice == "p" && compChoice == "r") {
    dispMsg = `${getChoice(userChoice)}<sub>user</sub> beats ${getChoice(
      compChoice
    )}<sub>computer</sub>!`;
    userScore++;
    changeBorderColor(id, "success");
  } else if (userChoice == "p" && compChoice == "s") {
    dispMsg = `${getChoice(compChoice)}<sub>computer</sub> beats ${getChoice(
      userChoice
    )}<sub>user</sub>!`;
    compScore++;
    changeBorderColor(id, "error");
  } else if (userChoice == "s" && compChoice == "r") {
    dispMsg = `${getChoice(compChoice)}<sub>computer</sub> beats ${getChoice(
      userChoice
    )}<sub>user</sub>!`;
    compScore++;
    changeBorderColor(id, "error");
  } else if (userChoice == "s" && compChoice == "p") {
    dispMsg = `${getChoice(userChoice)}<sub>user</sub> beats ${getChoice(
      compChoice
    )}<sub>computer</sub>!`;
    userScore++;
    changeBorderColor(id, "success");
  }
  actionMessage.innerHTML = dispMsg;
  userScoreElem.innerText = userScore;
  compScoreElem.innerText = compScore;
}

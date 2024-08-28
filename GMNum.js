SN = Math.trunc(Math.random() * 21);
let MyScore = 20;
let HighScore = 0;

const DisplayMessage = (msg) => {
  document.querySelector(".message").textContent = msg;
};

document.querySelector(".highscore").textContent = HighScore;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  document.querySelector(".score").textContent = MyScore;

  if (guess < 0 || guess > 20) {
    DisplayMessage("⚠️  Number is not valid");
  } 
  else if (!guess) {
    DisplayMessage("⛔ No Number");
  } 
  else if (guess === SN) {
    DisplayMessage("🎊 Correct Number");
    document.querySelector(".number").textContent = SN;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (MyScore > HighScore) {
      HighScore = MyScore;
      document.querySelector(".highscore").textContent = HighScore;
    }
  } 
  else if (guess !== SN) {
    if (MyScore > 1) {
      DisplayMessage(guess > SN ? "📈 Too High" : "📉 Too Low");
      MyScore--;
      document.querySelector(".score").textContent = MyScore;
    } 
    else {
      DisplayMessage("😭 You Lost");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#f97373";
      document.querySelector(".message").style.fontSize = "5rem";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  MyScore = 20;
  SN = Math.trunc(Math.random() * 21);

  DisplayMessage("Start guessing...");
  document.querySelector(".score").textContent = MyScore;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

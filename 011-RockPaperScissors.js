// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

const rps = (p1, p2) => {
  const choices = ["rock", "paper", "scissors"];
  if (!choices.includes(p1))
    return "Invalid move! Please play rock, paper or scissors.";
  else if (!choices.includes(p2))
    return `Player 2 made an invalid move: ${p2}.`;
  let result;
  switch (`${p1}${p2}`) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      result = "Player 1 won!";
      break;
    case "scissorsrock":
    case "rockpaper":
    case "paperscissors":
      result = "Player 2 won!";
      break;
    default:
      result = "Draw!";
  }
  return result;
};

console.log(rps("rock", "scissors"));
console.log(rps("scissors", "rock"));
console.log(rps("paper", "paper"));

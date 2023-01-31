const prompt = require('prompt-sync')({sigint: true});

let p1 = prompt('Player 1, enter "rock", "paper", or "scissors": ')

let p2 = prompt('Player 2, enter "rock", "paper", or "scissors": ')

let rock = "rock"
let paper = "paper"
let scissors = "scissors"

if(p1 === rock && p2 === rock) {
    console.log("Draw!")
} else if (p1 === rock && p2 === paper) {
    console.log("Player 2 wins!")
} else if (p1 === rock && p2 === scissors) {
    console.log("Player 1 wins!")
} else if (p1 === paper && p2 === paper) {
    console.log("Draw!")
} else if (p1 === paper && p2 === scissors) {
    console.log("Player 2 wins!")
} else if (p1 === paper && p2 === rock) {
    console.log("Player 1 wins!")
} else if (p1 === scissors && p2 === scissors) {
    console.log("Draw!")
} else if (p1 === scissors && p2 === paper) {
    console.log("Player 1 wins!")
} else if (p1 === scissors && p2 === rock) {
    console.log("Player 2 wins!")
} else {
    console.log("Error, try again!")
}
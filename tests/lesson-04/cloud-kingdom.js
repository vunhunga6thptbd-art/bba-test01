//Khai báo biến playerName và currentLives
let playerName = "Mario";
let currentLives = 3;

// Khai báo hằng
const level1Coins = 25;
const level2Coins = 30;
const level3Coins = 45;

//Tính tổng coins 3 level
const tongCoins = level1Coins + level2Coins + level3Coins;

//Tính trung bình
const coinsTrungBinh = tongCoins / 3;

//Tính số coins dư khi chia tổng số coin cho 3
const coinsDu = tongCoins % 3;

// In kết quả
console.log("Player:", playerName);
console.log("Lives:", currentLives);
console.log("Tổng coins 3 level:", tongCoins);
console.log("Coins trung bình:", coinsTrungBinh);
console.log("Số coins dư khi chia tổng số coins cho 3:", coinsDu);
/*
    mushroom: "Mario becomes Super!"
    flower: "Mario can shoot fireballs!"
    star: "Mario is invincible!"
    none: "Mario is normal"
    Khác: "Unknown power-up"
*/
// Khai báo biến powerUp
let powerUp = 'mushroom';
let effect = '';

//Sử dụng câu điều kiện if...else để xác định tên hiệu ứng tương ứng với các powerUp:

if (powerUp === 'mushroom') {
    effect = 'Mario becomes Super!';
} else if (powerUp === 'flower') {
    effect = 'Mario can shoot fireballs!';
} else if (powerUp === 'star') {
    effect = 'Mario is invincible!';
} else if (powerUp === 'none') {
    effect = 'Mario is normal';
} else {
    effect = 'Unknown power-up';
}
console.log(effect);

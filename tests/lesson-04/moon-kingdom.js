//BÀI 1:
//Khai báo hàm createCharacters:
function createCharacters() {
    //Khai báo mảng character
    const characters = [
        { name: "Nhung", level: 1, health: 100 },
        { name: "Hà", level: 3, health: 300 },
        { name: "Hương", level: 4, health: 400 },
        { name: "Huyền", level: 5, health: 500 }
    ];
    /*Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp:
        thuộc tính name: UPPERCASE của name gốc
        level: x2 của level gốc
        health: x3 của health gốc
    */
    const charactersPowerUp = characters.map((character) => ({
        name: character.name.toUpperCase(),
        level: character.level * 2,
        health: character.health * 3
    }));
    //Sử dụng hàm filter để lọc ra các phần tử có chỉ số health > 1000. Đặt tên mảng mới lọc được này là “possibleWinners”
    const possibleWinners = charactersPowerUp.filter(character => character.health > 1000);

    //In kết quả
    console.log(charactersPowerUp);
    console.log(possibleWinners);
};
//Gọi hàm
createCharacters();

//BÀI 2:
//Khai báo hàm printLeaderboard
function printLeaderboard() {
    const players = [
        { name: "Mario", score: 1000 },
        { name: "Luigi", score: 500 },
        { name: "Peach", score: 900 },
        { name: "Yoshi", score: 200 },
        { name: "Nhung", score: 600 }
    ];
    players.sort((a,b) => b.score - a.score);
    // console.log(players);

    for (let i = 0; i < players.length; i++) {
        let rank = "";
        if(i === 0) {
            rank = "🥇";
        } else if (i === 1) {
            rank = "🥈";
        } else if (i === 2) {
            rank = "🥉";
        } else {
            rank = " ";
        }
        console.log(`${rank} ${i+1}. ${players[i].name} - ${players[i].score} pts`);
    }
}
printLeaderboard();
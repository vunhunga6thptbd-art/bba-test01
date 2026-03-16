//Khai báo hàm findPairsDivisibleBy17
function findPairsDivisibleBy17() {
    //Khai báo biến đếm số cặp, do ban đầu chưa có cặp số nào nên = 0
    let count = 0;
    //Vòng lặp i từ 1 đến 100 do đó 1 <= i <= 100
    for (let i = 1; i <= 100; i++) {
        //Để tránh lặp cặp số ví dụ (1,16) (16,1) => Do đó j > i
        // for (let j = 1; j <= 100; j++) {
        for (let j = i + 1; j <= 100; j++) {
            //Cặp số chia hết cho 17 => i + j chia 17 dư 0
            if ((i + j) % 17 === 0) {
                //Cặp số thỏa mãn thì cộng vào biến count
                count++;
                //In ra cặp số thỏa mãn điều kiện
                console.log(`(${i}, ${j}) = ${i+j}`);
            }
        }
    }
    //In ra kết quả tổng số cặp
    console.log(`\n Tổng cộng: ${count} cặp`);
}
//Gọi hàm
findPairsDivisibleBy17();
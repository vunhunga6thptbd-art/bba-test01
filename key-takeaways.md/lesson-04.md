# I. Object
## 1. Object là gì? Tại sao cần Object?
- __Object (Đối tượng)__ là kiểu dữ liệu dùng để lưu trữ một tập hợp các cặp __key – value__ (khoá – giá trị).

- __Vấn đề khi không có Object__
    - Giả sử bạn cần lưu thông tin 1 sinh viên:

            let hoTen = "Nguyễn Văn A";
            let tuoi = 20;
            let lop = "WEB01";
            
            → 3 biến rời rạc, khó quản lý. Nếu có 100 sinh viên thì sao?

- __Giải pháp: dùng Object__

            let sinhVien = {
                hoTen: "Nguyễn Văn A",
                tuoi: 20,
                lop: "WEB01"
            };
            
            → Gom gọn trong __1 biến duy nhất__, dễ quản lý, dễ truyền đi.

- __Quy tắc nhớ:__ Object giống như một __hồ sơ (record)__ — mỗi mục trong hồ sơ có tên (key) và nội
dung (value).

## 2. Cách khai báo Object
- __Cách 1: Object Literal (phổ biến nhất)__
        
        let xe = {
            hang: "Toyota",
            mau: "Trắng",
            namSanXuat: 2023
        };
- __Cách 2: Dùng new Object()__   

        let xe = new Object();
        xe.hang = "Toyota";
        xe.mau = "Trắng";
        xe.namSanXuat = 2023;

- __Quy tắc đặt tên key__
    - Key thường là __string__, không cần đặt trong dấu ngoặc kép nếu là tên hợp lệ (không có dấu cách, ký tự đặc biệt).
    - Nếu key có dấu cách hoặc ký tự đặc biệt → __bắt buộc đặt trong ngoặc kép__.

            let person = {
                "full name": "Nguyen Van A", // key có dấu cách → cần ngoặc kép
                age: 25 // key bình thường → không cần
            };

## 3. Truy xuất dữ liệu trong Object
- __Cách 1: Dot notation (Dấu chấm) — phổ biến__
        
        let sinhVien = { hoTen: "Lan", tuoi: 22 };
        console.log(sinhVien.hoTen); // "Lan"
        console.log(sinhVien.tuoi); // 22

- __Cách 2: Bracket notation (Dấu ngoặc vuông)__

        console.log(sinhVien["hoTen"]); // "Lan"

- ***Khi nào BẮT BUỘC dùng bracket notation?***
        
        // 1. Key có dấu cách hoặc ký tự đặc biệt
        let obj = { "full name": "Lan" };
        console.log(obj["full name"]); // OK
        // console.log(obj.full name); // Lỗi cú pháp

        // 2. Key là biến
        let keyName = "hoTen";
        console.log(sinhVien[keyName]); // "Lan"
        // console.log(sinhVien.keyName); // undefined — tìm key tên "keyName"

## 4. Gán giá trị cho Object
        let sinhVien = { hoTen: "Lan", tuoi: 22 };
        // Sửa giá trị
        sinhVien.tuoi = 23;
        console.log(sinhVien.tuoi); // 23
        // Thêm key mới (key chưa tồn tại → tự tạo mới)
        sinhVien.email = "lan@gmail.com";
        console.log(sinhVien);
        // { hoTen: "Lan", tuoi: 23, email: "lan@gmail.com" }
    
- __Lưu ý:__ Gán vào key chưa tồn tại = __thêm mới__. Gán vào key đã tồn tại = __cập nhật__.

## 5. Thêm, sửa, xoá thuộc tính
- __Thêm__

        let product = { ten: "Áo thun" };
        product.gia = 150000; // thêm bằng dot
        product["mauSac"] = "Đen"; // thêm bằng bracket

- __Sửa__

        product.gia = 180000; // cập nhật giá

- __Xoá__

        delete product.mauSac;
        console.log(product); // { ten: "Áo thun", gia: 180000 }

    - __Cảnh báo:__ ***delete*** chỉ xoá thuộc tính khỏi Object. Nó __không__ xoá biến.

## 6. Object lồng nhau (Nested Object)
- Giá trị (value) của một key có thể là __bất kỳ kiểu dữ liệu nào__, kể cả một Object khác.

        let sinhVien = {
        hoTen: "Minh",
        tuoi: 21,
        diaChi: {
        soNha: "12",
        duong: "Lê Lợi",
        thanhPho: "Hồ Chí Minh"
        }
        };

- __Truy xuất Object lồng nhau__

        console.log(sinhVien.diaChi.duong); // "Lê Lợi"
        console.log(sinhVien["diaChi"]["soNha"]); // "12"

## 7. Tổng kết nhanh

| Thao tác | Cú pháp | Ví dụ|
|----------|---------|------|
| Khai báo | {} hoặc new Object() | let obj = { a: 1 } |
| Truy xuất | .key hoặc ["key"] | obj.a hoặc obj["a"] |
| Thêm / Sửa | obj.key = value | obj.b = 2 |
| Xoá | delete obj.key | delete obj.a |
| Lồng nhau | value là Object | obj.x.y.z |

# II. Array (Mảng)
## 1. Array là gì? Tại sao cần Array?
- __Array (Mảng)__ là kiểu dữ liệu dùng để lưu trữ __một danh sách có thứ tự__ các giá trị.

- __Vấn đề khi không có Array__
```
Giả sử bạn cần lưu danh sách 5 môn học:

let mon1 = "Toán";
let mon2 = "Lý";
let mon3 = "Hoá";
let mon4 = "Anh";
let mon5 = "Tin";

→ 5 biến rời rạc. Nếu có 50 môn thì sao? Không thể viết 50 biến được.
```

- __Giải pháp: dùng Array__
```
let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];

→ __1 biến duy nhất__ chứa toàn bộ danh sách, dễ quản lý, dễ duyệt qua.
```
- __Quy tắc nhớ:__ Array giống một __danh sách đánh số__ — mỗi phần tử có vị trí (index) bắt đầu từ 0.

## 2. Cách khai báo Array
- __Cách 1: Array Literal (phổ biến nhất)__
        
        let traiCay = ["Táo", "Cam", "Xoài"];
        let diemSo = [8, 9, 7.5, 10];
        let hocSinh = []; // mảng rỗng

- __Cách 2: Dùng new Array()__
        
        let traiCay = new Array("Táo", "Cam", "Xoài");

***Thực tế: Cách 1 (Array Literal) được dùng gần như 100% vì ngắn gọn hơn.***

- __Array có thể chứa nhiều kiểu dữ liệu khác nhau__

        let honHop = ["Lan", 22, true, null, { lop: "WEB01" }];

        → Hợp lệ, nhưng trong thực tế nên giữ các phần tử cùng kiểu để dễ xử lý.

## 3. Truy xuất dữ liệu trong Array
### 3.1. Lấy phần tử theo index (chỉ số)
- ***Index bắt đầu từ 0***, không phải từ 1.

        let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
        
        console.log(monHoc[0]); // "Toán" — phần tử đầu tiên
        console.log(monHoc[2]); // "Hoá" — phần tử thứ 3
        console.log(monHoc[4]); // "Tin" — phần tử cuối cùng
        console.log(monHoc[5]); // undefined — không tồn tại

### 3.2. Lấy phần tử cuối cùng
        let cuoi = monHoc[monHoc.length - 1]; // "Tin"

### 3.3. Đếm số phần tử: .length
        console.log(monHoc.length); // 5

### 3.4. Gán lại giá trị theo index
        monHoc[1] = "Vật lý";
        console.log(monHoc); // ["Toán", "Vật lý", "Hoá", "Anh", "Tin"]

## 4. Thêm, xoá phần tử
### 4.1. Thêm vào cuối: .push()
        let monHoc = ["Toán", "Lý"];
        monHoc.push("Hoá");
        console.log(monHoc); // ["Toán", "Lý", "Hoá"]

### 4.2. Xoá phần tử cuối: .pop()
        let monBiXoa = monHoc.pop();
        console.log(monBiXoa); // "Hoá"
        console.log(monHoc); // ["Toán", "Lý"]

### 4.3. Thêm vào đầu: .unshift()
        monHoc.unshift("Anh");
        console.log(monHoc); // ["Anh", "Toán", "Lý"]

### 4.4. Xoá phần tử đầu: .shift()
        monHoc.shift();
        console.log(monHoc); // ["Toán", "Lý"]

### 4.5. Tóm tắt nhanh
| Thao tác | Phương Thức | Vị trí |
|----------|-------------|--------|
| Thêm cuối | .push() | → cuối mảng |
| Xoá cuối | .pop() | ← cuối mảng |
| Thêm đầu | .unshift() | → đầu mảng |
| Xoá đầu | .shift() | ← đầu mảng |

## 5. Kết hợp Array với vòng lặp
- Đây là sức mạnh thực sự của Array — xử lý __hàng loạt__ dữ liệu.

### 5.1. Dùng for truyền thống
        let diemSo = [8, 6, 9, 7, 10];

        for (let i = 0; i < diemSo.length; i++) {
            console.log("Học sinh " + (i + 1) + ": " + diemSo[i] + " điểm");
        }
        // Học sinh 1: 8 điểm
        // Học sinh 2: 6 điểm
        // Học sinh 3: 9 điểm
        // Học sinh 4: 7 điểm
        // Học sinh 5: 10 điểm

__Lưu ý:__ i < diemSo.length chứ không phải i <= diemSo.length (vì index bắt đầu từ 0).

### 5.2. Dùng for...of — gọn hơn khi không cần index
        let traiCay = ["Táo", "Cam", "Xoài"];
        for (let qua of traiCay) {
            console.log(qua);
        }
        // Táo
        // Cam
        // Xoài

### 5.3. Dùng .forEach() — cách hiện đại
        let traiCay = ["Táo", "Cam", "Xoài"];
        traiCay.forEach(function(qua, viTri) {
            console.log(viTri + ": " + qua);
        });
        // 0: Táo
        // 1: Cam
        // 2: Xoài

## 6. Tổng kết nhanh
| Thao tác | Cú pháp | Ví dụ |
|----------|---------|-------|
| Khai báo | [] | let arr = [1, 2, 3] |
| Truy xuất | arr[index] | arr[0] → 1 |
| Đếm phần tử | arr.length | 3 |
| Thêm cuối | arr.push(val) | arr.push(4) |
| Xoá cuối | arr.pop() | arr.pop() |
| Duyệt | for , for...of , .forEach() | xem mục 5 |

# III. Function (Hàm) trong JavaScript
## 1. Function là gì? Tại sao cần Function?
- __Function (Hàm)__ là một khối lệnh được đặt tên, có thể __gọi lại nhiều lần__ mà không cần viết lại code.

- __Vấn đề khi không có Function__
    - Giả sử bạn cần in lời chào ở 3 chỗ khác nhau trong chương trình:

            // Chỗ 1
            console.log("===========================");
            console.log("Xin chào! Chào mừng bạn đến với HocTest.com");
            console.log("===========================");
            // ... code khác ...

            // Chỗ 2 — copy paste lại
            console.log("===========================");
            console.log("Xin chào! Chào mừng bạn đến với HocTest.com");
            console.log("===========================");
            // ... code khác ...

            // Chỗ 3 — copy paste lại
            console.log("===========================");
            console.log("Xin chào! Chào mừng bạn đến với HocTest.com");
            console.log("===========================");
            
        → Lặp lại 3 lần cùng một đoạn code. Nếu cần sửa → phải sửa __3 chỗ__. Dễ sót, dễ sai.

- __Giải pháp: dùng Function__

            // Khai báo 1 lần
            function chaoMung() {
            console.log("===========================");
            console.log("Xin chào! Chào mừng bạn đến với HocTest.com");
            console.log("===========================");
            }
            // Gọi bao nhiêu lần tuỳ thích
            chaoMung(); // Chỗ 1
            chaoMung(); // Chỗ 2
            chaoMung(); // Chỗ 3

    → Viết __1 lần__, dùng __nhiều lần__. Cần sửa → sửa __1 chỗ duy nhất__.

- __Quy tắc nhớ:__ Function giống như một __công thức nấu ăn__ — viết công thức 1 lần, nấu bao nhiêu lần cũng được.

## 2. Cách khai báo Function
### 2.1. Cú pháp cơ bản
            function tenHam() {
                // các dòng lệnh bên trong
            }
                function — từ khoá bắt buộc
                tenHam — tên do bạn đặt
                {} — thân hàm, chứa code sẽ thực thi

            Ví dụ:
            function ngoiSao() {
                console.log("⭐⭐⭐⭐⭐");
            }
            function xinChao() {
                console.log("Hello World!");
            }

### 2.2. Quy tắc đặt tên hàm
- Dùng __camelCase__: tinhTong , layDuLieu , hienThiSanPham
- Nên bắt đầu bằng __động từ__: tinh... , lay... , hienThi... , kiemTra...
- Tên phải __diễn tả hành động__ mà hàm thực hiện

        // Tên tốt
        function tinhDiemTrungBinh() { ... }
        function hienThiDanhSach() { ... }
        
        // Tên tệ
        function abc() { ... }
        function hamCuaToi() { ... }

- __Quan trọng__: Khai báo function __chưa chạy code bên trong__. Code chỉ chạy khi bạn __gọi hàm__.

## 3. Gọi hàm — Function thực thi
### 3.1. Khai báo ≠ Thực thi
        // Khai báo — chỉ "ghi công thức", chưa có gì xảy ra
        function demNguocPhongTen() {
            console.log("3...");
            console.log("2...");
            console.log("1...");
            console.log("🚀 Phóng!");
        }

        // Gọi hàm — code bên trong MỚI chạy
        demNguocPhongTen();

        Kết quả:
        3...
        2...
        1...
        🚀 Phóng!

### 3.2. Gọi hàm = tên hàm + dấu ()
        demNguocPhongTen(); // ✅ Gọi hàm — có ()
        demNguocPhongTen; // ❌ Chỉ tham chiếu tới hàm, KHÔNG chạy

### 3.3. Gọi nhiều lần
        function veDuong() {
            console.log("──────────");
        }
        
        veDuong();
        console.log("Phần 1: Giới thiệu");
        veDuong();
        console.log("Phần 2: Nội dung");
        veDuong();

        Kết quả:
        ──────────
        Phần 1: Giới thiệu
        ──────────
        Phần 2: Nội dung
        ──────────

## 4. Function với tham số (Parameter)
- Hàm chaoMung() ở trên luôn in __cùng một nội dung__. Nếu muốn chào từng người khác nhau thì sao?

### 4.1. Tham số = "nguyên liệu" truyền vào cho hàm
        // tham số ↓
        function chao(ten) {
            console.log("Xin chào " + ten + "!");
        }
        chao("Lan"); // "Xin chào Lan!"
        chao("Minh"); // "Xin chào Minh!"
        chao("Hoa"); // "Xin chào Hoa!"

- __Cách nhớ:__ Tham số giống như __ô trống cần điền__ — khi gọi hàm, bạn điền giá trị cụ thể vào.

### 4.2. Phân biệt: Parameter vs Argument
        // parameter (tham số) — biến giữ chỗ khi khai báo
        function chao(ten) {
        console.log("Xin chào " + ten + "!");
        }
        // argument (đối số) — giá trị thật khi gọi
        chao("Lan");


- __Parameter (tham số):__ Tên biến đặt trong () khi khai báo → ten
- __Argument (đối số):__ Giá trị truyền vào () khi gọi → "Lan"

*Trong thực tế, hai từ này thường dùng thay thế nhau. Không cần phân biệt quá kỹ.*

### 4.3. Nhiều tham số
        function tinhTong(a, b) {
            console.log(a + b);
        }

        tinhTong(3, 5); // 8
        tinhTong(10, 20); // 30

        function gioiThieu(ten, tuoi, lop) {
            console.log("Tôi là " + ten + ", " + tuoi + " tuổi, lớp " + lop);
        }

        gioiThieu("Lan", 20, "WEB01");

        // "Tôi là Lan, 20 tuổi, lớp WEB01"

        gioiThieu("Minh", 22, "WEB02");
        // "Tôi là Minh, 22 tuổi, lớp WEB02"

- __Thứ tự quan trọng:__ Argument truyền vào theo __đúng thứ tự__ parameter khai báo.

### 4.4. Nếu thiếu argument?
        function chao(ten) {
            console.log("Xin chào " + ten + "!");
        }

        chao(); // "Xin chào undefined!"

    → Tham số không được truyền giá trị sẽ là undefined.

## 5. Function có giá trị trả về: return
- Ngoài việc __làm gì đó__ (in ra console), hàm còn có thể __trả về kết quả__ để dùng tiếp.

### 5.1. Không có return — chỉ "làm"
        function inTong(a, b) {
            console.log(a + b); // in ra, nhưng không trả về
        }
        
        let ketQua = inTong(3, 5); // in 8
        console.log(ketQua); // undefined — vì hàm không return

### 5.3. Có return — "làm" xong "trả kết quả"
        function tinhTong(a, b) {
            return a + b; // trả kết quả về cho nơi gọi
        }

        let ketQua = tinhTong(3, 5);
        console.log(ketQua); // 8

        // Dùng trực tiếp trong biểu thức
        console.log(tinhTong(10, 20) * 2); // 60

- __Cách nhớ:__ ***return*** giống như __giao hàng__ — hàm xử lý xong thì gửi kết quả về cho người gọi.

### 5.4. return dừng hàm ngay lập tức
        function kiemTraTuoi(tuoi) {
            if (tuoi < 0) {
            return "Tuổi không hợp lệ"; // dừng hàm tại đây
            }
            return "Tuổi của bạn là " + tuoi;
        }

        console.log(kiemTraTuoi(-5)); // "Tuổi không hợp lệ"
        console.log(kiemTraTuoi(20)); // "Tuổi của bạn là 20"

## 6. Tổng kết nhanh
| Khái niệm | Cú pháp | Ý nghĩa |
|-----------|---------|---------|
| Khai báo | function tenHam() { ... } | Tạo hàm, chưa chạy |
| Gọi hàm | tenHam() | Chạy code bên trong |
| Tham số | function tenHam(a, b) { ... } | "Nguyên liệu" truyền vào |
| Trả kết quả | return giaTriTraVe | Gửi kết quả về nơi gọi |

# IV. JavaScript - Phạm vi của biến
- __Phạm vi__ (scope) xác định nơi mà biến có thể truy cập
- JavaScript có ba loại phạm vi:
    - Block scope (khối)
    - Function scope (hàm)
    - Toàn cục (global)

## 1. Block scope (khối)
- __Block scope (khối)__: biến được __khai báo__ trong __cặp ngoặc nhọn__
    - __var__: không bị giới hạn bởi cặp ngoặc nhọn
    - __let/const__: bị giới hạn bởi cặp ngoặc nhọn. Ra ngoài bị __undefined__

            if (true) {
                var varVariable = "var không có block scope";
                let letVariable = "let có block scope";
                const constVariable = "const cũng có block scope";
            }

            console.log(varVariable); // OK - var không bị giới hạn bởi block

            console.log(letVariable); // Error: letVariable is not defined

            console.log(constVariable); // Error: constVariable is not defined

## 2. Function scope (hàm)
- __Function scope (hàm)__: biến được __khai báo__ trong một __hàm__
    - Cả let/var/const __ra ngoài hàm__ đều bị __undefined__

            function myFunction() {
                var functionScoped = "Chỉ có thể truy cập trong hàm này";
                let alsoFunctionScoped = "Tương tự";

                console.log(functionScoped); // OK
            }

            console.log(functionScoped); // Error: functionScoped is not defined

## 3. Toàn cục (global)
- __Toàn cục (global)__: biến được khai báo ở một __dòng code tự do__, không nằm trong __khối__ hay __hàm__
            var globalVar = "Tôi là biến toàn cục";
            let globalLet = "Tôi cũng là biến toàn cục";

            function testFunction() {
                console.log(globalVar); // Truy cập được
                console.log(globalLet); // Truy cập được
            }

# V. JavaScript - break và continue
## 1. break
- __break__ dùng để __thoát hoàn toàn khỏi vòng lặp__ ngay lập tức.

            // Thoát khi tìm thấy giá trị
            for (let i = 0; i < 10; i++) {
                if (i === 5) {
                    break; // Thoát vòng lặp khi i = 5
                }
                console.log(i);
            }
            // Output: 0, 1, 2, 3, 4

## 2. continue
- continue dùng để __bỏ qua phần còn lại__ của vòng lặp hiện tại và __chuyển sang lần lặp tiếp theo__.

            // Bỏ qua số chẵn
            for (let i = 0; i < 10; i++) {
                if (i % 2 === 0) {
                    continue; // Bỏ qua số chẵn
                }
                console.log(i);
            }
            // Output: 1, 3, 5, 7, 9

# VI. JavaScript - Câu điều kiện nâng cao
- __Câu điều kiện__ if...else: Thực thi code khác nhau cho trường hợp true và false:

            let score = 75;

            if (score >= 60) {
                console.log("Bạn đã qua môn");
            } else {
                console.log("Bạn cần học lại");
            }

- __Câu điều kiện__ if...else...if: Kiểm tra nhiều điều kiện theo thứ tự:

            let score = 85;

            if (score >= 90) {
                console.log("Xuất sắc");
            } else if (score >= 80) {
                console.log("Giỏi");
            } else if (score >= 70) {
                console.log("Khá");
            } else if (score >= 60) {
                console.log("Trung bình");
            } else {
                console.log("Yếu");
            }

- __Ternary operator__ (toán tử điều kiện): Cách viết ngắn gọn cho if...else đơn giản

            let age = 20;
            let status = (age >= 18) ? "Người lớn" : "Trẻ em";
            console.log(status); // "Người lớn"
            
            // Có thể lồng nhau (nên cẩn thận với độ phức tạp)
            let score = 75;
            let grade = score >= 90 ? "A" :
                        score >= 80 ? "B" :
                        score >= 70 ? "C" :
                        score >= 60 ? "D" : "F";

# VI. JavaScript - Vòng lặp nâng cao
## 1. for...in Loop
- Dùng để duyệt qua các __thuộc tính__ (properties) của một object.
    ```
    // Với Object
    const person = {
        name: "John",
        age: 30,
        city: "Hanoi"
    };

    for (let key in person) {
        console.log(key + ": " + person[key]);
    }
    // Output:
    // name: John
    // age: 30
    // city: Hanoi
    ```

    ```
    // Với Array (không khuyến khích)
        const colors = ["red", "green", "blue"];
        for (let index in colors) {
            console.log(index + ": " + colors[index]);
        }
        // Output:
        // 0: red
        // 1: green
        // 2: blue
    ```

## 2. forEach Method
- Method của Array để thực thi một function cho mỗi phần tử. __Không thể__ dùng __break__ hoặc __continue__.

    ```
    const numbers = [1, 2, 3, 4, 5];
    
    numbers.forEach(function(value) {
        console.log(value);
    });
    ```

# I. Git
## 1. Lịch sử của Git
- Cha đẻ của Git là Linux Torvalds (cha đẻ hệ điều hành Linux)
- Git ra đời cho Linux có xung đột với BitKeeper (BitMover) - một hệ thống Distributed Version Control System có bản quyền
- Hiện nay, Git là DVCS phổ biến nhất thế giới
- Cái tên git có nhiều giả thuyết
    + Viết sai chính tả của “get”
    + Global Information Tracker

## 2. So sánh Git với VSC khác:
- __Tính năng__: Dễ dùng, có nhiều tính năng vượt trội: branching, tốc độ xử lý nhanh
- __Chi phí__: Free
- __Phổ biến__: nhiều công ty sử
dụng

## 3. Phân biệt Git và GitHub
- __Git__:
    + Là một phần mềm
    + Cài trên máy của bạn
    + Là một command line tool
    + Là công cụ quản lý phiên bản, đưa file vào Git repository
    + Có các tính năng của Version Control System
- __GitHub__:
    + Là một dịch vụ web
    + Host trên website
    + Là công cụ có giao diện
    + Là nơi để upload Git repository lên
    + Có các tính năng của Version Control System và một số tính năng khác (GitHub Actions, GitHub Co-pilot)

## 4. Tìm hiểu về vùng
- __working directory__: là vùng chứa các file mới hoặc file có thay đổi
- __staging area__: Là vùng chứa các file chuẩn bị commit (tạo ra các phiên bản)
- __repository__: Là vùng chứa các commit (phiên bản)

* ***Cách chuyển file từ vùng working directory >> staging area >> repository:***

    1. Khởi tạo repo local: git init
    2. Tạo repo GitHub và liên kết tới repo local: git remote add origin <url>
    3. Thêm file vào staging area: git add .
    4. Commit file: git commit -m ”<message>”
    5. Push code: git push origin main

* ***Các cách thêm file vào vùng staging area:***
    - __Cách 1:__ Thêm từng file cụ thể:
        
            git add <file_name>

    - __Cách 2:__ Thêm nhiều file cụ thể:
        
            git add <file_name_1> <file_name_2> <file_name_3> ...

    - __Cách 3:__ Thêm tất cả các file:
        
            git add .

## 5. Cấu hình
* __Đặt mặc định username và email cho toàn bộ các repo trên máy tính:__
    - git config --global user.name “Tên bạn”
    - git config --global user.email “email của bạn”

* __Đặt mỗi repo một tên khác nhau:__
    - git config user.name "Tên"
    - git config user.email "email"

## Một số câu lệnh
* __Xem trạng thái file:__
    - git status
        
        - File màu xanh: vùng staging
        - File màu đỏ: vùng working directory

* __Kiểm tra danh sách commit:__
    - git log

## 6. Commit Convention
- __Convention giúp:__
    + Cả team làm việc với nhau theo một quy tắc
    +  Code gọn gàng, sạch đẹp hơn
    + Chuyên nghiệp hơn!

- __Quy tắc:__
    <type>: <short_description>
        
        Trong đó:
            - type: loại commit
                +  chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
                + feat: thêm tính năng mới, test case mới
                + fix: sửa lỗi 1 test trước đó
            - short_description: mô tả ngắn gọn (50 kí tự), tiếng Anh hoặc tiếng Việt không dấu.

- __Ví dụ:__

    “chore: remove unused file”

    “feat: add code for exercises 2”

    “fix: fix automation for case 1”

## 7. Simple workflow
- __Không dùng global config:__

        init >> config >> add >> commit >> push
- __Dùng global config:__

        init >> add >> commit >> push

# II. JavaScript basic
## 1. JavaScript là gì?
- Là một ngôn ngữ lập trình.
- Ra đời năm 1995 bởi Brendan Eich.
- Top language: Stackoverflow report.
- Giúp cho browser hoạt động được.
- Bình thường JavaScript chạy được do browser engine support:
    + Edge: Chaka
    + Firefox: SpiderMonkey
    + Chrome: V8
- Khi chạy trên máy tính, chúng ta không có browser engine 
    => cần công cụ khác để chạy khác 
    => NodeJS

## 2. Chương trình đầu tiên: “Hello world!”
- "Hello, World!" là chương trình máy tính mà đầu ra là dòng chữ "Hello, world!" trên thiết bị hiển thị.
- Vì đây là chương trình đơn giản nhất ở mọi ngôn ngữ lập trình, cho nên nó thường được dùng trong việc mô phỏng cho người mới bắt đầu về cú pháp lập trình cơ bản trong ngôn ngữ lập trình, hay để xác định ngôn ngữ hoặc hệ thống nào đó hoạt động tốt.

- Hello world
    + Cú pháp:
        console.log(“nội dung”);
        console.log(‘nội dung’);
            Có thể dùng nháy đơn hoặc nháy kép đều được

- __Lệnh chạy file JavaScript:__
    + __Cú pháp:__
    
            node <tên_file>
            
            Ví dụ: node hello.js
    + __Nếu file nằm trong thư mục sẽ dùng lệnh:__
        
            node <đường dẫn tới file>
            
            Ví dụ: node tests/hello.js

## 3. Comment
- Comment là cách “vô hiệu hoá” tạm thời một đoạn code. Dòng code được comment sẽ bị bỏ qua, không được thực thi.
- __Có 2 cách comment:__
    + __Comment 1 dòng:__
        
        ● Thêm // vào trước đoạn code muốn comment (forward slash)
            
            Ví dụ: 
                // const name = “Better Bytes Academy”
        
        ● Có thể thêm vào giữa dòng
            
            Ví dụ:
                const name = “Playwright Việt Nam” // Declare name variable
    + __Comment nhiều dòng:__
        
        ● Thêm /* vào trước dòng đầu tiên và */ sau dòng cuối cùng
            
            Ví dụ:
                /*
                const name = Nhung;
                console.log(name);
                */
## 4. Biến, hằng
### 4.1. Biến
- Biến là khái niệm cơ bản nhất trong lập trình. Từ biến trong “biến thiên”, có nghĩa là thay đổi được
- __Khai báo biến:__
    
        let <tên biến> = <giá trị>;
        
        Ví dụ:
            let myName = "Nhung";
            
            Sử dụng:
                console.log(myName); // In ra dòng chữ "Nhung"

### 4.2. Hằng
- Hằng là các giá trị không thay đổi được
- Từ hằng trong từ hằng số
- Hằng dùng để khai báo các giá trị không có nhu cầu thay đổi hoặc giá trị chỉ dùng một lần
- Khai báo hằng:

        <từ khoá> <tên hằng> = <giá trị>
            Từ khoá: const
                Ví dụ: 
                    const slogan = “Học Kỹ - Hiểu Bản Chất - Mentor Tận Tình”

* __Khi nào dùng biến, khi nào dùng hằng:__
    - Mặc định dùng const - giúp code an toàn hơn, dễ đọc hơn
    - Chỉ dùng let khi chắc chắn cần gán lại giá trị

## 5. Kiểu dữ liệu
- Một biến/hằng luôn có kiểu dữ liệu.
- Kiểu dữ liệu là loại dữ liệu mà biến đó đang mang.
- Trong JavaScript, có 8 kiểu dữ liệu, chia làm 2 nhóm chính:
    + Kiểu nguyên thuỷ (primitive types)
        
        ● Number
        
        ● String
        
        ● Boolean
        
        ● Undefined
        
        ● Null
        
        ● Symbol
        
        ● BigInt
    + Kiểu tham chiếu (reference types)
        
        ● Object

* __Number:__ Số nguyên và số thực (không phân biệt int/float)
        
    - const age = 25; // Số nguyên
    - const price = 19.99; // Số thực
    - const infinity = Infinity; // Vô hạn
    - const notANumber = NaN; // Không phải là số

        - NaN = Not a number

* __String:__ Chuỗi ký tự
    
    - const name = "John"; // Dùng nháy kép
    - const message = 'Hello'; // Dùng nháy đơn
    - const template = `Age: 10`; // Dùng “backtick” (dấu huyền cạnh số 1)

* __Boolean:__ Giá trị logic
    
    - const isActive = true; // Giá trị đúng
    - const isComplete = false; // Giá trị sai

- __Cách kiểm tra một biến có kiểu dữ liệu gì:__
    + Đọc code xem khai báo thế nào!
    + Sử dụng hàm typeof: typeof <variable>
        
        - Output: number || string || boolean

## 6. Toán tử so sánh
- Toán tử so sánh dùng để so sánh 2 toán hạng. Kết quả trả về ở dạng boolean
- __Chia làm ba nhóm:__
    + __So sánh bằng__
        
        ● == và ===
    + __So sánh không bằng__
        
        ● !
    + __So sánh lớn hơn, nhỏ hơn__
        
        ● >
        
        ● <
        
        ● <=
        
        ● >=

* __So sánh bằng == và ===__
    - __So sánh ==__
        + So sánh hai bằng == (Loose Equality)
        + So sánh giá trị sau khi chuyển đổi kiểu (type coercion)
            
                Ví dụ:
                    5 == "5" // true (chuyển string thành number)

                    5 == "6" // false (chuyển string thành number)

                    true == 1 // true (true chuyển thành 1)
                    
                    false == 0 // true (false chuyển thành 0)
    
    - __So sánh ===__
        + So sánh ba bằng === (Strict Equality) (nên dùng)
        + So sánh giá trị và kiểu dữ liệu - không chuyển đổi kiểu
            
                Ví dụ:
                    5 === "5" // false (khác kiểu)

                    true === 1 // false (khác kiểu)

                    false === 0 // false (khác kiểu)

                    5 === 5 // true (cùng kiểu, cùng giá trị)

* __So sánh không bằng != và !==__
    - So sánh không bằng !=
        
            5 != "5" // false (chuyển string thành number)

            true != 1 // false (true chuyển thành 1)

            false != 0 // false (false chuyển thành 0)

    - __So sáng không bằng !==__
        
            5 !== "5" // true (khác kiểu)
            
            true !== 1 // true (khác kiểu)
            
            false !== 0 // true (khác kiểu)
            
            5 !== 5 // false (cùng kiểu, cùng giá trị)

* __So sánh lớn hơn, nhỏ hơn, lớn hơn hoặc bằng, nhỏ hơn hoặc bằng__
            
            5 > 10 // false
            5 >= 10 // false
            5 < 10 // true
            5 <= 10 // true

- ***Khi nào thì so sánh hai bằng (==), khi nào thì so sánh ba bằng (===)***
    + Luôn dùng so sánh ba bằng!
    + Chỉ sử dụng == khi có chủ đích, muốn so sánh mà không quan tâm tới kiểu dữ liệu.

## 7. Toán tử logic
- Toán tử logic dùng để kết hợp nhiều điều kiện và trả về boolean
    + && (AND): trả về đúng nếu cả 2 vế của mệnh đề đúng
    + || (OR): trả về đúng nếu một trong 2 vế của mệnh đề đúng

## 8. Toán tử một ngôi
- Toán tử một ngôi là toán tử chỉ cần một toán hạng để thực hiện.
- __Có hai loại:__
    + __Prefix:__ Toán tử nằm ở phía trước - tăng trước, trả về sau
        ++x;
        --x;
    + __Postfix:__ Toán tử nằm ở phía sau - trả về trước, tăng sau
        x++;
        x--;
            
            Ví dụ:
                let a = 10;
                b = ++a; // tăng a lên 11 rồi trả về => b có giá trị là 11
    
                let c = 10;
                d = c++; // trả về giá trị 10 cho d rồi mới tăng
                // => d có giá trị là 10

## 9. Toán tử toán học
- Toán tử toán học tương tự như các phép tính cộng trừ nhân chia đã được học: +, -, *, /
        
        Ví dụ:
            const firstNumber = 5;
            const secondNumber = 10;
            const result = firstNumber + secondNumber; // result = 15
- ***Lưu ý:*** Khi chia cho 0, sẽ ra kết quả infinity (vô cực)
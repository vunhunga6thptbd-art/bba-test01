# I. Playwright
## 1. Playwright là gì?
- Là một __framework__
- Tiền thân là __Puppeteer__, được Microsoft tài trợ và phát triển lên.
- https://playwright.dev/
- Ra đời 31/01/2020
- Version mới nhất: v1.57

## 2. Ưu điểm Playwright
- __Cross browser__
    - Hỗ trợ các trình duyệt phổ biến: Chrome, Edge, Firefox, Safari
    - Hỗ trợ lên tới 143 phiên bản trình duyệt

- __Cross platform__
    - Code một lần, chạy trên các hệ điều hành phổ biến: Windows, Linux, MacOS

- __Tính năng “xịn sò”__
    - auto waiting, auto-retry assertion giúp giảm flaky tests (lúc pass, lúc fail)

- __Report đầy đủ thông tin__
    - Pass/fail theo từng loại trình duyệt  
    - Chi tiết ở từng thời điểm: “gọi API nào", “response trả về gì”, “ứng với dòng code nào

- __Code gen__
    - Thao tác để sinh ra code

# II. Công cụ sử dụng
## 1. NVM
- __NVM__ = Node Version Manager = quản lý __các phiên bản NodeJs__

- NodeJs = __Công cụ để chạy code__
- __2 options:__
    - Cài __trực tiếp__ NodeJS vào máy
    - Cài __thông qua NVM__
- __Chọn thông qua NVM vì__
    - Dễ __chuyển đổi nhiều phiên bản NodeJS__ (các dự án khác nhau có thể làm ở phiên bản NodeJS khác nhau)

## 2. Git & GitHub
- __Git:__ quản lý source code
- __GitHub:__ chia sẻ code, làm việc nhóm
- Cấu hình Git: Trước khi làm việc với Git, cần một số __cấu hình mặc định__:

    - __Config username (tên người dùng):__

            git config --global user.name “<tên bạn>”
    - __Config email (địa chỉ email):__

            git config --global user.email “<email của bạn>”
    - __Config branch default (nhánh mặc định):__

            git config --global init.defaultBranch main

## 3. VS Code
- VS Code = IDE = integrated development environment
    - Là công cụ để viết code
- Cài đặt Visual Studio Code: https://code.visualstudio.com/
- Cài đặt extension
    - Playwright extension: https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright
- Đổi terminal mặc định
    - Window Powershell là terminal mặc định trên Windows
    - Powershell hay bị chặn/ lỗi lặt vặt
    - => dùng Git Bash để tránh
các lỗi này
    - Cách đổi:
        
            Ctrl + Shift + P: Hiển thị hộpvthoại
            
            Tìm kiếm: Terminal default
            
            Chọn:
                Terminal: Select Default Profile
            
            Chọn Git Bash
            
            Kiểm tra lại

# III. Kết nối với GitHub
## 1. SSH Key là gì?
- SSH Key:
    - Cặp khóa (2 cái)
        - id_rsa và id_rsa.pub
        - id_rsa: cần giữ bí mật
        - id_rsa.pub: có thể gửi cho người khác
    - Giúp xác thực đăng nhập trở nên dễ dàng hơn
    - Lưu ở ~/.ssh
    - “~” đại diện cho thư mục home

## 2. Tạo SSH Key
- Lệnh tạo SSH Keys:
        
        ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
- Thêm vào GitHub
    - Lấy nội dung ssh key: 

            cat ~/.ssh/id_rsa.pub

    - Truy cập: https://github.com/settings/ssh/new để thêm ssh key

# IV. Cài đặt Playwright
## 1. Cài đặt Playwright
- Tạo thư mục
- Mở thư mục bằng VS Code
- Mở terminal lên
- Chạy lệnh:
    - npm init playwright@latest
    - Liên tục gõ "enter" cho tới khi hiển thị "... Happy hacking!"

## 2. Hiểu "vẹt" Playwright code
- Code Playwright rất dễ hiểu
- Tương tự như “lời thoại”
- VD:
    - goto = đi đến
    - expect = mong muốn
    - toHave... = có...
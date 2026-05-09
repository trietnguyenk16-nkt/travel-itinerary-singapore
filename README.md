# Singapore Trip - Quản lý hình ảnh

## Cách thêm ảnh

Để thêm ảnh mới vào bộ sưu tập, làm theo hai bước đơn giản sau:

### Bước 1: Tải ảnh lên Cloudinary
Trước tiên, tải ảnh của bạn lên Cloudinary bằng Media Library:
https://console.cloudinary.com/app/c-8ffdddcd7bade69bb9f1bee3865d6d/assets/media_library/search?q=&view_mode=mosaic

### Bước 2: Ghi URL ảnh vào `images.json`
Mở tệp `images.json` và thêm đường dẫn URL đầy đủ của ảnh từ Cloudinary vào mảng JSON.

**Trước:**
```json
[
  "https://res.cloudinary.com/dlxcvzcr9/image/upload/q_auto/f_auto/v1777570565/img11_fhmegt.jpg"
]
```

**Sau khi thêm URL ảnh mới:**
```json
[
  "https://res.cloudinary.com/dlxcvzcr9/image/upload/q_auto/f_auto/v1777570565/img11_fhmegt.jpg",
  "https://res.cloudinary.com/dlxcvzcr9/image/upload/q_auto/f_auto/v177757XXXX/new-image.jpg"
]
```

> **Lưu ý:** Sao chép đầy đủ URL Cloudinary và dán vào `images.json`.

## Cấu trúc dự án
```
travel-itinerary-singapore/
├── images/                 # Lưu trữ các tệp ảnh cục bộ (nếu có)
├── images.json            # Danh sách URL ảnh Cloudinary
├── index.html             # Tệp HTML chính
├── script.js              # Logic JavaScript
├── style.css              # Styling
└── README.md              # Tệp hướng dẫn này
```

## Tham khảo nhanh
1. ✅ Tải ảnh lên Cloudinary
2. ✅ Sao chép URL ảnh đầy đủ
3. ✅ Thêm URL vào `images.json`
4. ✅ Hoàn thành!
```
sing2026/
├── images/                 # Store all image files here
├── images.json            # List of image filenames (JSON array)
├── index.html             # Main HTML file
├── script.js              # JavaScript logic
├── style.css              # Styling
└── README.md              # This file
```

## Quick Reference
1. ✅ Save image to `images/` folder
2. ✅ Add filename to `images.json`
3. ✅ Done!

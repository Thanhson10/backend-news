// index.js
const express = require('express');
const cors = require('cors');
const app = express();

// Cấu hình CORS để cho phép Frontend (Vercel) gọi vào
app.use(cors()); 
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Dữ liệu giả (Sau này sẽ lấy từ Database)
const newsList = [
    {
      id: 1,
      title: "Học React để làm gì?",
      date: "15/12/2025",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
      summary: "React là một phầm mềm giúp ta tạo ra các chương trình..."
    },
    {
      id: 2,
      title: "Render và Vercel là bộ đôi hoàn hảo",
      date: "14/12/2025",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
      summary: "Kết hợp Frontend Vercel và Backend Render giúp tối ưu chi phí và hiệu năng."
    },

    {
      id: 3,
      title: "Đây là con Mèo",
      date: "14/12/2025",
      image: "https://i.pinimg.com/originals/e0/0e/d9/e00ed96cc83f6dc8d3b54e9fb63161d2.jpg",
      summary: "Đúng hay sai?."
    }
];

// API trang chủ
app.get('/', (req, res) => {
    res.send('Hello! News API is working!');
});

// API lấy danh sách tin tức
app.get('/api/news', (req, res) => {
    res.json(newsList);
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại port ${PORT}`);
});
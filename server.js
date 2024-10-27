const express = require('express');

const app = express();

const port = 5000;
// Middleware để phân tích cú pháp JSON

app.use(express.json());
// Tạo endpoint để xử lý POST request

app.post('/api/submit', (req, res) => {

    const { deviceId, qrCodeId, qrCodeValue } = req.body;
    // Kiểm tra dữ liệu nhận được

    const responseData = {

        message: "Request received successfully",

        deviceId: deviceId,

        qrCodeId: qrCodeId,

        qrCodeValue: qrCodeValue

    };
    // Trả về dữ liệu dưới dạng JSON

    res.status(200).json(responseData);
});
// Chạy server

app.listen(port, () => {

console.log(`Server is running on http://localhost:${port}`);

});

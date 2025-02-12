<template>
    <footer>
        <div class="footer-container">
            <div class="footer-column">
                <h3>thông tin sinh viên</h3>
                <p>lê trung thành</p>
                <p>MSSV: 22150329</p>
                <p>lớp: 221405</p>
            </div>
            <div class="footer-column">
                <ul>
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">facebook ở đây</a></li>                    
                </ul>
            </div>
            <div class="footer-column">
                <h3>Liên hệ</h3>
                <p>Địa chỉ: hẻm 214 Đường số 8, Phường 11, Thành phố Hồ Chí Minh</p>
                <p>Điện thoại: +84 0705385141</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style>
footer {
   
    width: 100%;
    background-color: rgba(62, 39, 35, 1); /* Nâu đậm với độ trong suốt */
    color: #ffd54f; /* Vàng đậm */
    padding: 20px 20px; /* Thu nhỏ padding */
    font-family: 'Arial', sans-serif;
    z-index: 1000; /* Đặt chỉ mục cao để footer luôn ở trên */
}

.footer-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-column {
    flex: 1;
    padding: 10px;
    min-width: 200px;
    box-sizing: border-box;
}

.footer-column h3 {
    margin-top: 0;
    color: #ffd54f; /* Vàng đậm */
    font-size: 1.2em;
}

.footer-column p {
    color: #e0e0e0; /* Xám nhạt */
    font-size: 0.9em;
}

.footer-column ul {
    list-style: none;
    padding: 0;
}

.footer-column ul li {
    margin-bottom: 8px;
}

.footer-column a {
    color: #ffd54f; /* Vàng đậm */
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

.footer-column a:hover {
    color: #ffb300; /* Vàng cam */
    text-decoration: underline;
}

.footer-container {
    border-top: 1px solid #5d4037; /* Đường viền nâu */
    padding-top: 20px;
}

</style>

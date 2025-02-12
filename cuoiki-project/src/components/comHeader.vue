<template>
    <header>
        <div class="container">
            <div class="logo-title">
                <div class="logo">
                    <img src="/caphe/coffee-plant.png" alt="Cafe Logo">
                </div>
                <div class="title">
                    <h1>Coffee Làng Lá</h1> <!-- Tên quán -->
                </div>
            </div>
            <nav>
                <ul>
                    <li><router-link to="/" exact-active-class="active">Trang Chủ</router-link></li>
                    <li><router-link to="/CaPhe" exact-active-class="active">Cà phê</router-link></li>
                    <li><router-link to="/TraSua" exact-active-class="active">Trà</router-link></li>
                    <li><router-link to="/LienHe" exact-active-class="active">Liên Hệ</router-link></li>
                    <!-- <li><a href="#">Tin Tức</a></li> -->
                    <li><router-link to="/Login" exact-active-class="active">Login</router-link></li>

                </ul>
            </nav>
            <div class="cta">
                <router-link to="/Cart" class="cta-button">
                    <img src="@/assets/other/basket.png" alt="Giỏ hàng" />
                </router-link>
            </div>
        </div>
    </header>
    <router-view/>
</template>

<script>
export default {
    
}
</script>

<style>
/* Đặt hình nền cho toàn bộ trang */
body {
    margin: 0; /* Bỏ margin mặc định */
    background-size: cover; /* Đảm bảo hình ảnh phủ toàn bộ */
    background-position: center; /* Căn giữa hình ảnh */
    background-repeat: no-repeat; /* Không lặp lại hình nền */
    height: 100vh; /* Chiều cao toàn màn hình */
}

.container {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    align-items: center; /* Căn giữa theo chiều dọc */
    justify-content: space-between;
    display: flex;
    background-color: rgba(62, 39, 35, 1); /* Nâu đậm với độ trong suốt */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    padding: 0 20px; /* Thêm khoảng cách vào bên trái và bên phải */
}

.logo-title {
    display: flex;
    align-items: center; /* Căn giữa logo và tên */
}

.logo img {
    height: 60px; /* Thay đổi chiều cao của logo để phù hợp hơn */
    transition: transform 0.3s ease;
}

.title {
    color: #ffd54f; /* Màu chữ vàng đậm */
    font-size: 18px; /* Kích thước chữ */
    font-weight: bold; /* Đậm chữ */
    margin-left: 10px; /* Khoảng cách giữa logo và tên quán */
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center; /* Đưa menu vào giữa */
    margin: 0;
    padding: 0;
}

nav ul li {
    margin: 0 20px;
}

nav ul li a {
    text-decoration: none;
    color: #ffd54f; /* Vàng đậm */
    font-weight: bold;
    transition: color 0.3s ease;
}

/* Hiệu ứng hover và active cho các liên kết */
nav ul li a:hover,
nav ul li a.active {
    color: #f56702; /* Vàng cam đậm hơn khi hover hoặc active */
}

/* Thay đổi màu sắc khi nhấn */
nav ul li a:active {
    color: #f57f17; /* Màu vàng sáng hơn khi nhấn */
}

.cta {
    display: flex;
    justify-content: flex-end; /* Đặt nút ở phía bên phải */
}

.cta-button {
    padding: 12px 20px;
    background-color: rgba(62, 39, 35, 1); /* Nâu cà phê */
    color: #fff;
    text-decoration: none;
    border-radius: 100px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta-button:hover {
    background-color: #5d4037; /* Nâu đậm hơn khi hover */
    transform: scale(1.1);
}
</style>

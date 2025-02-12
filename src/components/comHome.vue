<template>
    <div class="home">
        <div class="ad-container">
            <div class="ad-slider">
                <div class="ad-item">
                    <img src="@/assets/coffe/img2.png" alt="Cà phê nguyên chất" />
                </div>
                <div class="ad-item">
                    <img src="@/assets/TraSua/img5.jpg" alt="Trà sữa thượng hạng" />
                </div>
                <div class="ad-item">
                    <img src="@/assets/coffe/img6.jpg" alt="cà phê mới" />
                </div>
                <div class="ad-item">
                    <img src="@/assets/TraSua/img2.jpg" alt="trà sữa tươi mát " />
                </div>
                <div class="ad-item">
                    <img src="@/assets/coffe/img5.jpg" alt="cà phê đậm đà mới" />
                </div>
                <div class="ad-item">
                    <img src="@/assets/coffe/img1.jpg" alt="cà phê đậm đà mới" />
                </div>
                <div class="ad-item">
                    <img src="@/assets/coffe/img4.jpg" alt="cà phê đậm đà mới" />
                </div>
                 <div class="ad-item">
                    <img src="@/assets/TraSua/img3.jpg" alt="trà sữa tươi mát " />
                </div>
                 <div class="ad-item">
                    <img src="@/assets/TraSua/img4.jpg" alt="trà sữa tươi mát " />
                </div>
            </div>
        </div>
        <div class="content">
            <!-- Phần giới thiệu chung -->
            <div class="intro">
                <h1>Chào Mừng Đến Với Cửa Hàng Cà Phê Của Chúng Tôi!</h1>
                <p>Chúng tôi cung cấp các loại cà phê chất lượng cao, được chọn lọc từ những hạt cà phê tốt nhất. Hãy đến và thưởng thức hương vị tuyệt vời mà chúng tôi mang lại.</p>
                <p>Cảm ơn bạn đã ghé thăm cửa hàng của chúng tôi. Chúng tôi hy vọng sẽ mang đến cho bạn trải nghiệm tuyệt vời nhất!</p>
            </div>
            <div class="image-container">
                <img src="@/assets/coffe/menu.webp" alt="Hình ảnh cà phê lớn" />
            </div>
        </div>

        <!-- Phần giới thiệu về Cà Phê -->
        <div class="section coffee-section">
            <div class="section-content">
                <h2>Khám Phá Các Loại Cà Phê Tuyệt Hảo</h2>
                <p>Những ly cà phê được pha chế cẩn thận, mang đến hương vị đậm đà và mạnh mẽ. Chúng tôi tự hào mang đến cho bạn trải nghiệm cà phê độc đáo, mỗi ly là một tác phẩm nghệ thuật.</p>
            </div>
            <div class="section-image">
                <img src="@/assets/coffe/coffee-beans.jpg" alt="Hạt cà phê chất lượng cao" />
            </div>
        </div>

        <!-- Phần giới thiệu về Trà Sữa -->
        <div class="section bubble-tea-section">
            <div class="section-content">
                <h2>Thưởng Thức Trà Sữa Đặc Biệt</h2>
                <p>Trà sữa của chúng tôi được pha chế từ những lá trà tươi ngon và sữa nguyên chất, mang đến hương vị ngọt ngào và mát lạnh. Hãy đến để cảm nhận sự kết hợp hoàn hảo này!</p>
            </div>
            <div class="section-image">
                <img src="@/assets/TraSua/bubble-tea.webp" alt="Hình ảnh trà sữa tươi ngon" />
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'comHome',
    mounted() {
        setTimeout(() => {
            const homeElement = document.querySelector('.home');
            homeElement.classList.add('show');
        }, 100); // Hiệu ứng cho toàn bộ trang

        // Hiệu ứng cho các phần giới thiệu
        const sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('show');
            }, 400 * index); // Thời gian delay cho từng section
        });
    }
}
</script>


<style>
.home {
    height: auto;
    color: #333;
    text-align: left;
    padding: 20px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
}

.home.show {
    opacity: 1;
    transform: translateY(0);
}

.content {
    display: flex;
    width: 100%; /* Đặt chiều rộng đầy đủ */    align-items: center;
    gap: 40px;
    margin-bottom: 40px;
    padding: 20px; /* Thêm padding */
    border-radius: 10px; /* Bo góc */
    background-color: rgba(255, 235, 205, 0.5); /* Màu nền giống coffee-section */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Đổ bóng */
}


.intro {
    max-width: 50%;
}

.image-container img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Định dạng các phần giới thiệu cà phê và trà sữa */
.section {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    margin: 20px 0;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    opacity: 0; /* Bắt đầu với độ mờ */
    transform: translateY(20px); /* Dịch chuyển xuống */
    transition: opacity 0.5s ease-out, transform 0.5s ease-out; /* Hiệu ứng chuyển đổi */
}

.section.show {
    opacity: 1; /* Hiển thị đầy đủ */
    transform: translateY(0); /* Trở lại vị trí ban đầu */
}


.section-content {
    flex: 1;
    color: #333;
}

.section h2 {
    font-size: 1.8em;
    margin-bottom: 10px;
    color: #6d4c41; /* Màu sắc nổi bật cho tiêu đề */
}

.section p {
    font-size: 1em;
    line-height: 1.5;
}

.section-image img {
    width: 350px; /* Đặt chiều rộng cố định */
    height: 200px; /* Đặt chiều cao cố định */
    object-fit: cover; /* Giữ tỷ lệ và cắt hình ảnh nếu cần để lấp đầy vùng */
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.coffee-section {
    background-color: rgba(255, 235, 205, 0.5); /* Màu nền cho phần cà phê */
}

.bubble-tea-section {
    background-color: rgba(255, 248, 220, 0.5); /* Màu nền cho phần trà sữa */
}
.ad-container {
    width: 100%;
    overflow: hidden; /* Ẩn phần bên ngoài */
    position: relative; /* Để có thể định vị các item */
    background-color: rgba(255, 235, 205, 0.5); /* Màu nền cho phần quảng cáo */
}

.ad-slider {
  display: flex;
  animation: slide 20s linear infinite;
  width: max-content; /* Điều chỉnh chiều rộng của slider để không có khoảng trống */
  box-sizing: border-box;
}

.ad-item {
    min-width: 200px; /* Chiều rộng tối thiểu cho mỗi mục quảng cáo */
    padding: 10px; /* Khoảng cách bên trong */
    display: flex; /* Để căn chỉnh nội dung bên trong */
    flex-direction: column; /* Đặt hình ảnh ở trên và text ở dưới */
    align-items: center; /* Căn giữa nội dung */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Đổ bóng */
    border-radius: 10px; /* Bo góc */
    margin: 10px; /* Khoảng cách giữa các item */
    background-color: rgba(255, 235, 205, 0.5); /* Màu nền trắng cho item */
}

.ad-item img {
    max-width: 100%; /* Đảm bảo hình ảnh không vượt quá chiều rộng của item */
    height: 150px; /* Đặt chiều cao cố định */
    object-fit: cover; /* Giữ tỷ lệ và cắt hình ảnh nếu cần để lấp đầy vùng */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.ad-item p {
    margin-top: 10px; /* Khoảng cách giữa hình ảnh và tiêu đề */
    font-size: 1em; /* Kích thước chữ cho tiêu đề */
    color: #333; /* Màu chữ */
}

/* Hiệu ứng cuộn liên tục */
@keyframes slide {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-100% + 200px));
    }
}

.ad-slider {
    animation: slide 15s linear infinite; /* Thay đổi thời gian để có hiệu ứng mượt mà hơn */
}


</style>

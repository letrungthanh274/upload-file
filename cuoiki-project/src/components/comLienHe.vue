<template>
    <div>
   
        
        <div class="contact-info">
            <h2>Thông tin liên hệ</h2>
            <p><strong>Địa chỉ:</strong> hẻm 214 Đường số 8, Phường 11, Thành phố Hồ Chí Minh</p>
            <p><strong>Email:</strong> <a href="mailto:tle739573@gmail.com">tle739573@gmail.com</a></p>
            <p><strong>Số điện thoại:</strong> <a href="tel:+84705385141">+84 0705 385 141</a></p>
        </div>
        
        <div class="address-map">
            <h2>Bản đồ địa chỉ</h2>
            <iframe
                width="100%"
                height="450"
                frameborder="0"
                style="border:1px solid #ddd; border-radius: 8px;"
                src="https://www.openstreetmap.org/export/embed.html?bbox=106.6559%2C10.8433%2C106.6648%2C10.8458&layer=mapnik&marker=10.8446%2C106.6604"
                allowfullscreen>
            </iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ComLienHe'
}
</script>

<style scoped>
.contact-info {
    margin: 20px 0;
    padding: 15px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.contact-info:hover {
    background-color: #e7f1ff; /* Change background on hover */
    transform: scale(1.02); /* Slightly enlarge the container */
}

.contact-info h2 {
    margin-bottom: 10px;
    color: #333;
}

.contact-info p {
    margin: 5px 0;
    color: #555;
}

.contact-info a {
    color: #007BFF;
    text-decoration: none;
}

.contact-info a:hover {
    text-decoration: underline; /* Underline on hover */
}

.address-map {
    margin: 20px 0;
}
</style>

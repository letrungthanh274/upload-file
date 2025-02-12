<template>
  <div class="menu">
   
      <div class="menu-item">
        <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
          <img :src="product.image" alt="chill and coffee">
          <div class="menu-item-info">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p>{{ (product.price * 1000).toLocaleString('vi-VN') }}  đồng</p>
          </div>
        </router-link>
      </div>
    
  </div>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      id: this.product.id
    };
  },
   mounted() {
    if (!localStorage.getItem('isLoggedIn')) {
      alert('Bạn cần đăng nhập để truy cập trang này');
      this.$router.push({ name: 'Login', query: { redirect: this.$route.fullPath } });
    }
  },
};
</script>

<style>
.menu{
    
margin: 100px 20px;

}
.menu-item {
     display: flex;
  flex-wrap: wrap; /* Đảm bảo các item sẽ xuống dòng */
  justify-content: center; /* Căn giữa các mục theo hàng ngang */
  gap: 10px; /* Khoảng cách giữa các mục */
  flex-direction: column;
  position: relative;
  width: 210px;
  height: 210px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
 
}

.menu-item img {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
  
}

.menu-item-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  padding: 10px;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.menu-item:hover .menu-item-info {
  opacity: 1;
}

.menu-item:hover img {
  transform: scale(1.05);
}

.menu-item-info h3 {
  font-size: 14px;
  margin: 0 0 5px;
}

.menu-item-info p {
  font-size: 12px;
  margin: 0;
  color: #ccc;
}
</style>

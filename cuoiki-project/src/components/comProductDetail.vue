<template>
  <div class="menu">
    <div class="menu-container">
      <div class="menu-item">
        <img :src="product.image" alt="chill and coffee" />
        <div class="menu-item-info">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p><strong>Giá:</strong>{{ (product.price * 1000).toLocaleString('vi-VN') }}  đồng</p>
          <button @click="addToCart(product)" class="add-to-cart-btn">+</button>
          <div v-if="product.quality > 0">
            <button @click="addToCart(product)" class="add-to-cart-btn">+</button>
          </div>
          <p v-else class="out-of-stock">Sản phẩm đã hết hàng</p>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import Cart from "@/data/Cart";
import items from "@/data/items";
import items2 from "@/data/items2";

export default {
  data() {
    return {
      product: {},
      Cart: Cart,
    };
  },

  mounted() {
    // Lấy id từ URL
    let id = this.$route.params.id;
    // Tìm thông tin sản phẩm từ database dựa vào id
    this.product = items.find((x) => x.id == id) || items2.find((x) => x.id == id);
  },
  methods: {
    addToCart(product) {

       if (product.quality <= 0) {
        alert("Sản phẩm đã hết hàng!");
        return;
      }
      // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
      const infoproduct = this.Cart.find((item) => item.id == product.id);
      if (infoproduct&&product.quality>0) {
        // if (infoproduct.quantity < product.quality) {
          infoproduct.quantity += 1;
        // }
      } else {
        if (product.quality > 0) {
          // Tạo đối tượng mới
          const newproduct = { ...product, quantity: 1 };
          this.Cart.push(newproduct);
        }
      }
      product.quality--;
    },
  },
};
</script>

<style scoped>
.menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.menu-item {
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  max-width: 600px;
}

.menu-item img {
  width: 210px;
  height: 210px;
  transition: transform 0.3s ease;
}

.menu-item-info {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
}

.menu-item-info h3 {
  font-size: 20px;
  margin: 0 0 10px;
}

.menu-item-info p {
  margin: 0;
  color: #ccc;
}

.add-to-cart-btn {
  position: absolute;
  top: 55px;
  right: 10px;
  margin-top: 15px;
  padding: 10px;
  background-color: #ffcc00; /* Màu vàng */
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: #e37004; /* Màu vàng đậm hơn khi hover */
}
.out-of-stock {
  color: red;
  font-weight: bold;
  margin-top: 10px;
}


.menu-item:hover {
  transform: scale(1.05);
}
</style>

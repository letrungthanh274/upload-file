<template>
  <div class="Cart-container">
    <div class="modal-content">
      <table style="width: 100%;" class="text-center table">
        <tr>
          <th>HÌNH</th>
          <th>SẢN PHẨM</th>
          <th>Đơn giá</th>
          <th>Số lượng</th>
          <th>Tiền</th>
          <th>Trạng thái thanh toán</th>
          <th></th>
        </tr>
        <tr v-for="item in Cart" :key="item.id">
          <td><img :src="item.image" style="height: 100px;width: 100px;"></td>
          <td class="align-middle">{{ item.name }}</td>
          <td class="align-middle">{{ (item.price * 1000).toLocaleString('vi-VN') }}  đồng</td>
          <td class="align-middle">
            <button @click="decreaseQuantity(item)" :disabled="item.isPaid">-</button>
            {{ item.quantity }}
            <button @click="increaseQuantity(item)" :disabled="item.isPaid">+</button>
          </td>
          <td class="align-middle">{{ ((item.price * item.quantity) * 1000).toLocaleString('vi-VN') }}  đồng</td>          
          <td class="align-middle">{{ item.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán' }}</td>
          <td class="align-middle">
            <button class="btn btn-danger" @click="deleteProduct(item)" :disabled="item.isPaid">Xóa</button>
          </td>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th>Tổng đơn đặt</th>
          <th>{{ tongsoluong }}</th>
          <th>{{ (tongtien * 1000).toLocaleString('vi-VN') }}  đồng</th>          
          <th></th>
          <th><button class="btn btn-danger" @click="clearCart" :disabled="isAllPaid">Xóa hết!</button></th>
        </tr>
      </table>

      <!-- Phần thanh toán -->
      <div class="payment-section">
        <h3>Thông tin thanh toán</h3>
        <input type="text" class="input-field" placeholder="Họ và tên" v-model="customerName" />
        <input type="text" class="input-field" placeholder="Địa chỉ" v-model="customerAddress" />
        <input type="text" class="input-field" placeholder="Số điện thoại" v-model="customerPhone" />
        
        <h4>Phương thức thanh toán</h4>
        <select v-model="paymentMethod">
          <option value="credit-card">Thẻ tín dụng</option>
          <option value="paypal">PayPal</option>
          <option value="cash-on-delivery">Thanh toán khi nhận hàng</option>
        </select>
        
        <button 
          class="btn btn-success" 
          @click="submitPayment"
          :disabled="isAllPaid">
          {{ isAllPaid ? 'Đã thanh toán' : 'Thanh toán' }}
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import items from "@/data/items";
import items2 from "@/data/items2";
import Cart from "../data/Cart";

export default {
  data() {
    return {
      Cart: [], // Khởi tạo mảng giỏ hàng trống
      customerName: '', // Tên khách hàng
      customerAddress: '', // Địa chỉ khách hàng
      customerPhone: '', // Số điện thoại khách hàng
      paymentMethod: 'credit-card', // Phương thức thanh toán mặc định
      // isPaid: false,
    };
  },
  computed: {
  tongtien() {
    // Chỉ tính tổng tiền của các sản phẩm chưa thanh toán
    return this.Cart.reduce((total, item) => item.isPaid ? total : total + item.quantity * item.price, 0);
  },
  tongsoluong() {
    // Chỉ tính tổng số lượng của các sản phẩm chưa thanh toán
    return this.Cart.reduce((total, item) => item.isPaid ? total : total + item.quantity, 0);
  },
  // isAllPaid() {
  //   return this.Cart.every((item) => item.isPaid);
  // }
},

  methods: {
    loadCart() {
      this.Cart = Cart.map((item) => {
        const product = items.find((i) => i.id === item.id) || items2.find((i) => i.id === item.id);
        if (product) {
          return { ...item, quality: product.quality };
        }
        return item;
      });
    },
    deleteProduct(item) {
      this.Cart = this.Cart.filter((x) => x.id !== item.id);
    },
    increaseQuantity(item) {
              const product = items.find((i) => i.id === item.id) || items2.find((i) => i.id === item.id);

      if (item.quantity <= product.quality) {
        item.quantity++;
        product.quality--
      }
    },
    decreaseQuantity(item) {
              const product = items.find((i) => i.id === item.id) || items2.find((i) => i.id === item.id);
      if (item.quantity > 1) {
        item.quantity--;
        product.quality++
      } else {
        this.deleteProduct(item);
        product.quality++
      }
    },
    clearCart() {
      this.Cart = []; // Xóa toàn bộ giỏ hàng
      Cart.splice(0, Cart.length); // Cập nhật lại Cart gốc để không còn lưu sản phẩm
    },
  // submitPayment() {
  //   // Kiểm tra thông tin bắt buộc
  //   if (!this.customerName || !this.customerAddress || !this.customerPhone) {
  //     alert("Vui lòng nhập đầy đủ thông tin: Họ và tên, Địa chỉ, và Số điện thoại.");
  //     return;
  //   }

  //   if (confirm("Bạn có chắc chắn muốn thanh toán không?")) {
  //     alert(`Thanh toán thành công cho ${this.tongsoluong} sản phẩm với tổng tiền ${(this.tongtien * 1000).toLocaleString('vi-VN')} đồng`);
  //     // Đánh dấu các sản phẩm là đã thanh toán
  //     this.Cart.forEach(item => item.isPaid = true);
  //   } else {
  //     alert("Thanh toán đã bị hủy.");
  //   }
  // }

  },
  mounted() {
    this.loadCart(); // Tải giỏ hàng khi component được tạo
  },
  watch: {
    Cart: {
      handler(newCart) {
        Cart.splice(0, Cart.length, ...newCart);
      },
      deep: true,
    },
  },
  
};
</script>

<style>
.Cart-container {
    display: flex;
    flex-direction: column; /* Đặt phần tử theo chiều dọc */
    justify-content: center; /* Căn giữa nội dung */
    align-items: center; /* Căn giữa theo chiều dọc */
    min-height: calc(100vh - 160px); /* Chiều cao tối thiểu để giữa header và footer */
    padding: 20px; /* Khoảng cách xung quanh */
    background-color: rgba(255, 255, 255, 0.8); /* Nền nhẹ để làm nổi bật nội dung */
    border-radius: 8px; /* Bo tròn góc */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Bóng đổ nhẹ */
}

.payment-section {
    margin-top: 20px; /* Khoảng cách trên cho phần thanh toán */
    width: 100%; /* Chiếm toàn bộ chiều rộng */
}

.input-field {
    width: 100%; /* Chiếm toàn bộ chiều rộng */
    padding: 10px; /* Khoảng cách bên trong */
    margin: 10px 0; /* Khoảng cách trên và dưới */
    border: 1px solid #ccc; /* Đường viền */
    border-radius: 4px; /* Bo tròn góc */
}

.btn-success {
    background-color: #4CAF50; /* Màu xanh lá cây */
    color: white; /* Màu chữ trắng */
    padding: 10px 15px; /* Khoảng cách bên trong */
    border: none; /* Bỏ đường viền */
    border-radius: 4px; /* Bo tròn góc */
    cursor: pointer; /* Con trỏ chuột */
}

.btn-success:hover {
    background-color: #45a049; /* Màu xanh lá cây tối hơn khi hover */
}
</style>


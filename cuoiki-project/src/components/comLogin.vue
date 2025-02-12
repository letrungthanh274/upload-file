<template>
  <div class="login-container">
    <h2>Đăng Nhập</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="emailDisplay"
          :readonly="isLoggedIn"
          required
        />
      </div>
      <div>
        <label for="password">Mật Khẩu:</label>
        <input
          type="password"
          id="password"
          v-model="passwordDisplay"
          :readonly="isLoggedIn"
          required
        />
      </div>
      <!-- Thay đổi văn bản nút dựa trên trạng thái đăng nhập -->
       <button type="submit" @click="login">Đăng Nhập</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    <p>Chưa có tài khoản? <router-link to="/register">Đăng Ký</router-link></p>

    <!-- Nút đăng xuất -->
    <button @click="logout" class="logout-btn">Đăng Xuất</button>
  </div>
</template>

<script>
import users from '@/data/users'
export default {
  name: "ComLogin",
  data() {
    return {
      email: '',
      password: '',
      emailDisplay: '', // Biến để hiển thị email
      passwordDisplay: '', // Biến để hiển thị mật khẩu dưới dạng *
      errorMessage: '', 
      successMessage: '', 
      users: users
    };
  },

  methods: {
    login() {

      // Kiểm tra thông tin đăng nhập
      console.log(this.users)
      const user = this.users.find(
        x => x.email === this.emailDisplay && x.password === this.passwordDisplay
      );
      console.log(user)

      if (user) {
        localStorage.setItem('isLoggedIn', user); // Lưu trạng thái đăng nhập
        this.successMessage = 'Bạn đã đăng nhập thành công! Chúc một ngày tốt lành!';
        this.errorMessage = ''; // Xóa thông báo lỗi

        // Gán giá trị vào emailDisplay và passwordDisplay
        this.emailDisplay = this.email;
        this.passwordDisplay = '*'.repeat(this.password.length); // Hiển thị mật khẩu dưới dạng *

        // Điều hướng sau 1 giây
        setTimeout(() => {
          this.$router.push(this.$route.query.redirect || '/'); // Điều hướng sau khi hiển thị thông báo
        }, 1000);
      } else {
        this.errorMessage = 'Sai email hoặc mật khẩu!';
        this.successMessage = ''; // Xóa thông báo thành công
      }
    },
    logout() {
      localStorage.removeItem('isLoggedIn'); // Xóa trạng thái đăng nhập
      this.successMessage = 'Bạn đã đăng xuất thành công!';
      this.email = ''; // Reset email
      this.password = ''; // Reset mật khẩu
      this.emailDisplay = ''; // Reset emailDisplay
      this.passwordDisplay = ''; // Reset passwordDisplay
      this.errorMessage = ''; // Xóa thông báo lỗi
    },
  },
  mounted() {
    // Lấy dữ liệu users từ localStorage nếu có
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      this.users = storedUsers;
    }
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
}
form div {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}
button:hover {
  background-color: #0056b3;
}
.error-message {
  color: red;
  font-weight: bold;
  margin-top: 10px;
}
.success-message {
  color: green;
  font-weight: bold;
  margin-top: 10px;
  animation: fadeIn 1s;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.logout-btn {
  background-color: #dc3545;
  margin-top: 10px;
}
.logout-btn:hover {
  background-color: #c82333;
}
</style>

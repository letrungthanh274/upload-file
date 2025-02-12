<template>
  <div class="register-container">
    <h2>Đăng Ký</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="fullname">Họ và Tên:</label>
        <input type="text" id="fullname" v-model="fullname" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Mật Khẩu:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div>
        <label for="birthyear">Tuổi:</label>
        <input type="number" id="yearold" v-model="yearold" required />
      </div>
      <button type="submit">Đăng Ký</button>
    </form>
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import users from '@/data/users';

export default {
  name: "ComRegister",
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      yearold: "",
      successMessage: "",
      errorMessage: "",
      users: users // Tham chiếu tới mảng users
    };
  },
  methods: {
    handleSubmit() {
      // Kiểm tra xem email và tên đã được đăng ký chưa
      const isEmailRegistered = this.users.some(user => user.email === this.email);
      const isFullnameRegistered = this.users.some(user => user.fullname === this.fullname);

      if (isEmailRegistered) {
        this.errorMessage = "Email này đã được đăng ký.";
        this.successMessage = "";
      } else if (isFullnameRegistered) {
        this.errorMessage = "Tên này đã được đăng ký. Vui lòng chọn tên khác.";
        this.successMessage = "";
      } else {
        // Thêm người dùng mới vào mảng users
        const newUser = {
          fullname: this.fullname,
          email: this.email,
          password: this.password,
          yearold: this.yearold,
        };
        this.users.push(newUser);
        console.log(this.users)
        
        // Lưu lại mảng users vào localStorage
        localStorage.setItem('users', JSON.stringify(this.users));

        // Thông báo đăng ký thành công
        this.successMessage = "Đăng ký thành công! Bạn sẽ được chuyển đến trang đăng nhập...";
        this.errorMessage = "";

        // Chuyển hướng sau 2 giây
        setTimeout(() => {
          this.$router.push("/Login");
        }, 2000);
      }
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
.register-container {
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
}
button:hover {
  background-color: #0056b3;
}
.success-message {
  margin-top: 15px;
  color: rgb(194, 72, 2);
  font-weight: bold;
}
.error-message {
  margin-top: 15px;
  color: red;
  font-weight: bold;
}
</style>

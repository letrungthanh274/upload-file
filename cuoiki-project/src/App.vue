  <template>
    <div class="app-container"> <!-- Thêm div cha -->
      <Header/>

      <Footer/>
    </div>
  </template>


  <script>
  import Header from './components/comHeader.vue'
  import Footer from './components/comFooter.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
  </script>

  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .app-container {
    min-height: calc(100vh - 120px); /* Đảm bảo div đủ cao để chứa nội dung */
    display: flex;
    flex-direction: column; /* Đặt các phần tử theo chiều dọc */
    justify-content: space-between; /* Giúp căn chỉnh Footer xuống dưới cùng */
  }
  footer {
  margin-top: auto; /* Đẩy footer xuống cuối */
}
  </style>

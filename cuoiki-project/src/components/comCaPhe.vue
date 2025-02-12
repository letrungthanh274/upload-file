<template>
  <div>
    <div class="menu-container">
      <Product v-for="item in products" :key="item.id" :product="item" />
    </div>
  </div>
</template>

<script>
import items from '../data/items';
import Product from '@/components/comProduct.vue';

export default {
  name: 'comCaPhe',
  components: {
    Product,
  },
  data() {
    return {
      products: items,
    };
  },
};
</script>

<style>
.menu-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Tạo 4 cột */
  row-gap: 0px; /* Smaller gap between rows */
  column-gap: 0px; /* Adjust column gap if needed */
  justify-items: center; /* Căn giữa các mục trong lưới */
}

.menu-item {
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

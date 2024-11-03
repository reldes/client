<template>
  <div class="logo">
    <RouterLink to="/" aria-label="logo">
       <img src="@/assets/images/landing/ol-icon.png" alt="logo" />
       <span>OpenLab</span>
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

</script>
<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  img {
    margin-right: 10px;
    width: 50px;
  }
  a {
    text-decoration: none;
    color: rgb(84,84,85);
  }
}
</style>

<script setup lang="ts">
import { shallowRef } from 'vue';

// icons
import { RiseOutlined, FallOutlined } from '@ant-design/icons-vue';

const fivecards = shallowRef([
  {
    name: 'Total Page Views',
    earn: '4,42,236',
    percent: '59.3%',
    color: 'primary',
    icon: RiseOutlined,
    text: '35,000'
  },
  {
    name: 'Total Users',
    earn: '78,250',
    percent: '70.5%',
    color: 'success',
    icon: RiseOutlined,
    text: '8,900'
  },
  {
    name: 'Total Order',
    earn: '18,800',
    percent: '27.4%',
    color: 'warning',
    icon: FallOutlined,
    text: '1,943'
  },
  {
    name: 'Total Sales',
    earn: '$35,078',
    percent: '27.4%',
    color: 'error',
    icon: FallOutlined,
    text: '$20,395'
  }
]);
</script>
<template>
  <v-row class="my-0">
    
  </v-row>
</template>

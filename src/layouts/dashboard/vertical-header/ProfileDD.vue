<script setup lang="ts">
import { ref } from 'vue';
// icons
import {
  LogoutOutlined,
  UserOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  LockOutlined,
  CommentOutlined,
  UnorderedListOutlined,
  EditOutlined,
  ProfileOutlined,
  WalletOutlined
} from '@ant-design/icons-vue';
import { useAuthStore } from '@/stores/auth';

const tab = ref(null);
const authStore = useAuthStore();
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!-- profile DD -->
  <!-- ---------------------------------------------- -->
  <div>
    <div class="d-flex align-center pa-5">
      <v-avatar size="32" class="mr-2">
        <img src="@/assets/images/users/avatar-1.png" width="32" alt="Julia" />
      </v-avatar>
      <div>
        <h6 class="text-h6 mb-0">JWT User</h6>
        <p class="text-caption mb-0">UI/UX Designer</p>
      </div>
      <div class="ml-auto">
        <v-btn variant="text" color="primary" rounded="sm" icon size="large" @click="authStore.logout()">
          <LogoutOutlined :style="{ fontSize: '20px' }" />
        </v-btn>
      </div>
    </div>
  </div>
</template>
